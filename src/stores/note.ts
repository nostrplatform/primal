import { propTraps } from "@solid-primitives/props";
import { nip19 } from "../lib/nTools";
import { Kind } from "../constants";
import { hexToNpub } from "../lib/keys";
import { logError } from "../lib/logger";
import { sanitize } from "../lib/notes";
import { RepostInfo, NostrNoteContent, FeedPage, PrimalNote, PrimalRepost, NostrEventContent, NostrEOSE, NostrEvent, PrimalUser, TopZap, PrimalArticle, NostrRelaySignedEvent } from "../types/primal";
import { convertToUser, emptyUser } from "./profile";


export const getRepostInfo: RepostInfo = (page, message) => {
  const user = page?.users[message.pubkey];
  const userMeta = JSON.parse(user?.content || '{}');
  const stat = page?.postStats[message.id];

  return {
    user: {
      id: user?.id || '',
      pubkey: user?.pubkey || message.pubkey,
      npub: hexToNpub(user?.pubkey || message.pubkey),
      name: (userMeta.name || user?.pubkey) as string,
      about: (userMeta.about || '') as string,
      picture: (userMeta.picture || '') as string,
      nip05: (userMeta.nip05 || '') as string,
      banner: (userMeta.banner || '') as string,
      displayName: (userMeta.display_name || '') as string,
      location: (userMeta.location || '') as string,
      lud06: (userMeta.lud06 || '') as string,
      lud16: (userMeta.lud16 || '') as string,
      website: (userMeta.website || '') as string,
      tags: user?.tags || [],
      msg: {...user},
    },
    note: {
      id: message.id,
      pubkey: message.pubkey,
      created_at: message.created_at || 0,
      tags: message.tags,
      content: sanitize(message.content),
      kind: message.kind,
      sig: message.sig,
      likes: stat?.likes || 0,
      mentions: stat?.mentions || 0,
      reposts: stat?.reposts || 0,
      replies: stat?.replies || 0,
      zaps: stat?.zaps || 0,
      score: stat?.score || 0,
      score24h: stat?.score24h || 0,
      satszapped: stat?.satszapped || 0,
      noteId: nip19.noteEncode(message.id),
      noteActions: (page.noteActions && page.noteActions[message.id]) || noActions(message.id),
      relayHints: page.relayHints,
    },
  }
};

export const isRepostInCollection = (collection: NostrNoteContent[], repost: NostrNoteContent) => {

  const otherTags = collection.reduce((acc: string[][], m) => {
    if (m.kind !== Kind.Repost) return acc;

    const t = m.tags.find(t => t[0] === 'e');

    if (!t) return acc;

    return [...acc, t];
  }, []);

  if (repost.kind === Kind.Repost) {
    const tag = repost.tags.find(t => t[0] === 'e');

    return tag && !!otherTags.find(t => t[1] === tag[1]);
  }

  if (repost.kind === Kind.Text) {
    const id = repost.id;

    return !!otherTags.find(t => t[1] === id);
  }

  return false;

};
export const isLFRepostInCollection = (collection: NostrNoteContent[], repost: NostrNoteContent) => {

  const otherTags = collection.reduce((acc: string[][], m) => {
    if (m.kind !== Kind.Repost) return acc;

    const t = m.tags.find(t => t[0] === 'e');

    if (!t) return acc;

    return [...acc, t];
  }, []);

  if (repost.kind === Kind.Repost) {
    const tag = repost.tags.find(t => t[0] === 'e');

    return tag && !!otherTags.find(t => t[1] === tag[1]);
  }

  if ([Kind.LongForm, Kind.LongFormShell].includes(repost.kind)) {
    const id = repost.id;

    return !!otherTags.find(t => t[1] === id);
  }

  return false;

};

export const isInTags = (tags: string[][], tagName: string, value: string) => {
  return !!tags.find(tag => tag[0] === tagName && tag[1] === value);
}

export const parseEmptyReposts = (page: FeedPage) => {
  let reposts: Record<string, string> = {};

  page.messages.forEach(message => {
    if (message.kind === 6 && message.content.length === 0) {
      const tag = message.tags.find(t => t[0] === 'e');
      if (tag) {
        reposts[tag[1]] = message.id;
      }
    }
  });

  return reposts;
};

const parseKind6 = (message: NostrNoteContent, defaultKind = 1) => {
  try {
    return JSON.parse(message.content);
  } catch (e) {
    return {
      kind: defaultKind,
      content: '',
      id: message.id,
      created_at: message.created_at,
      pubkey: message.pubkey,
      sig: message.sig,
      tags: message.tags,
    }
  }
};

const parseLFKind6 = (message: NostrNoteContent) => {
  try {
    return JSON.parse(message.content);
  } catch (e) {
    return {
      kind: Kind.LongForm,
      content: '',
      id: message.id,
      created_at: message.created_at,
      pubkey: message.pubkey,
      sig: message.sig,
      tags: message.tags,
    }
  }
};

// const getNoteReferences = (message: NostrNoteContent) => {
//   const regex = /\#\[([0-9]*)\]/g;
//   let refs = [];
//   let match;

//   while((match = regex.exec(message.content)) !== null) {
//     refs.push(match[1]);
//   }

//   return refs.reduce<string[]>((acc, ref) => {
//     const tag = message.tags[parseInt(ref)] || [];

//     return tag[0] === 'e' ? [...acc, tag[1]] : acc;
//   }, []);
// };

// const getUserReferences = (message: NostrNoteContent) => {
//   const regex = /\#\[([0-9]*)\]/g;
//   let refs = [];
//   let match;

//   while((match = regex.exec(message.content)) !== null) {
//     refs.push(match[1]);
//   }

//   return refs.reduce<string[]>((acc, ref) => {
//     const tag: string[] = message.tags[parseInt(ref)] || [];

//     return tag[0] === 'p' ? [...acc, tag[1]] : acc;
//   }, []);
// };

type ConvertToNotes = (page: FeedPage | undefined, topZaps?: Record<string, TopZap[]>) => PrimalNote[];

const noActions = (id: string) => ({
  event_id: id,
  liked: false,
  replied: false,
  reposted: false,
  zapped: false,
});

export const generateNote = (
  noteEvent: NostrRelaySignedEvent,
  author: PrimalUser,
  meta: {
    userRefs: Record<string, PrimalUser>,
    noteRefs: Record<string, PrimalNote>,
    articleRefs: Record<string, PrimalArticle>,
    highlightRefs: Record<string, any>,
    relayHints: Record<string, string>,
  },
) => {
  const msg = noteEvent;

  let replyTo: string[] | undefined;
  const tgs = [...noteEvent.tags];

  // Determine parent by finding the `e` tag with `reply` then `root` as `marker`
  // If both fail return the last `e` tag
  for (let i=0; i<tgs.length; i++) {
    const tag = tgs[i];

    if (tag[0] !== 'e') continue;

    if (tag[3] === 'mention') continue;

    if (tag[3] === 'reply') {
      replyTo = [...tag];
      break;
    }

    if (tag[3] === 'root') {
      replyTo = [...tag];
      continue;
    }
  }

  if (!replyTo) {
    const eTags = tgs.filter(t => t[0] === 'e' && t[3] !== 'mention');

    if (eTags.length === 1) {
      replyTo = [...eTags[0]];
    }
    else if (eTags.length > 1){
      replyTo = [...eTags[eTags.length - 1]];
    }
  }

  return {
    user: { ...author },
    post: {
      id: msg.id,
      pubkey: msg.pubkey,
      created_at: msg.created_at || 0,
      tags: msg.tags,
      content: sanitize(msg.content),
      kind: msg.kind,
      sig: msg.sig,
      likes: 0,
      mentions: 0,
      reposts: 0,
      replies: 0,
      zaps: 0,
      score: 0,
      score24h: 0,
      satszapped: 0,
      noteId: nip19.noteEncode(msg.id),
      noteActions: noActions(msg.id),
      relayHints: meta.relayHints,
    },
    msg,
    mentionedNotes: meta.noteRefs,
    mentionedUsers: meta.userRefs,
    mentionedHighlights: meta.highlightRefs,
    mentionedArticles: meta.articleRefs,
    replyTo: replyTo && replyTo[1],
    tags: msg.tags,
    id: msg.id,
    noteId: nip19.noteEncode(msg.id),
    pubkey: msg.pubkey,
    topZaps: [],
    content: sanitize(msg.content),
    relayHints: meta.relayHints,
  };
}


export const convertToNotes: ConvertToNotes = (page, topZaps) => {

  if (page === undefined) {
    return [];
  }

  const mentions = page.mentions || {};

  const pageMessages = page.messages.filter(m => [Kind.Text, Kind.Repost].includes(m.kind));

  return  pageMessages.map((message) => {
    const msg: NostrNoteContent = message.kind === Kind.Repost ? parseKind6(message) : message;

    const user = page?.users[msg.pubkey];
    const stat = page?.postStats[msg.id];

    let userMeta: any = {};

    try {
      userMeta = JSON.parse(user?.content || '{}');
    } catch (e) {
      logError('Error in user meta JSON: ', e);
      userMeta = {};
    }

    const mentionIds = Object.keys(mentions) //message.tags.reduce((acc, t) => t[0] === 'e' ? [...acc, t[1]] : acc, []);
    let userMentionIds = msg.tags?.reduce((acc, t) => t[0] === 'p' ? [...acc, t[1]] : acc, []);

    const repost = message.kind === Kind.Repost ? getRepostInfo(page, message) : undefined;

    let replyTo: string[] | undefined;

    const tgs = msg.tags || [];

    // Determine parent by finding the `e` tag with `reply` then `root` as `marker`
    // If both fail return the last `e` tag
    for (let i=0; i<tgs.length; i++) {
      const tag = tgs[i];

      if (tag[0] !== 'e') continue;

      if (tag[3] === 'mention') continue;

      if (tag[3] === 'reply') {
        replyTo = [...tag];
        break;
      }

      if (tag[3] === 'root') {
        replyTo = [...tag];
        continue;
      }
    }

    if (!replyTo) {
      const eTags = tgs.filter(t => t[0] === 'e' && t[3] !== 'mention');

      if (eTags.length === 1) {
        replyTo = [...eTags[0]];
      }
      else if (eTags.length > 1){
        replyTo = [...eTags[eTags.length - 1]];
      }
    }

    let tz: TopZap[] = [];

    if (topZaps && topZaps[msg.id]) {
      tz = topZaps[msg.id] || [];

      for(let i=0; i<tz.length; i++) {
        if (userMentionIds.includes(tz[i].pubkey)) continue;

        userMentionIds.push(tz[i].pubkey);
      }
    }

    let mentionedNotes: Record<string, PrimalNote> = {};
    let mentionedUsers: Record<string, PrimalUser> = {};
    let mentionedHighlights: Record<string, any> = {};
    let mentionedArticles: Record<string, PrimalArticle> = {};

    if (mentionIds.length > 0) {
      for (let i = 0;i<mentionIds.length;i++) {
        let id = mentionIds[i];
        const m = mentions && mentions[id];

        if (!m) {
          continue;
        }

        for (let i = 0;i<m.tags.length;i++) {
          const t = m.tags[i];
          if (t[0] === 'p') {
            mentionedUsers[t[1]] = convertToUser(page.users[t[1]], t[1]);
          }
        }

        if ([Kind.Text].includes(m.kind)) {

          const mentionStat = page.postStats[id];

          const noteActions = (page.noteActions && page.noteActions[id]) ?? {
            event_id: id,
            liked: false,
            replied: false,
            reposted: false,
            zapped: false,
          };

          mentionedNotes[id] = {
            // @ts-ignore TODO: Investigate this typing
            post: {
              ...m,
              noteId: nip19.noteEncode(m.id),
              likes: mentionStat?.likes || 0,
              mentions: mentionStat?.mentions || 0,
              reposts: mentionStat?.reposts || 0,
              replies: mentionStat?.replies || 0,
              zaps: mentionStat?.zaps || 0,
              score: mentionStat?.score || 0,
              score24h: mentionStat?.score24h || 0,
              satszapped: mentionStat?.satszapped || 0,
              noteActions,
            },
            msg: {
              ...m,
            },
            content: m.content,
            user: convertToUser(page.users[m.pubkey], m.pubkey),
            mentionedUsers,
            pubkey: m.pubkey,
            id: m.id,
            noteId: nip19.noteEncode(m.id),
          };
        }

        if ([Kind.LongForm, Kind.LongFormShell].includes(m.kind)) {

          const mentionStat = page.postStats[id];

          const noteActions = (page.noteActions && page.noteActions[id]) ?? {
            event_id: id,
            liked: false,
            replied: false,
            reposted: false,
            zapped: false,
          };

          const identifier = (m.tags.find(t => t[0] === 'd') || [])[1];
          const pubkey = m.pubkey;
          const kind = Kind.LongForm;

          const wordCount = page.wordCount ? page.wordCount[m.id] || 0 : 0;

          let article: PrimalArticle = {
            id: m.id,
            pubkey: m.pubkey,
            title: '',
            summary: '',
            image: '',
            tags: [],
            published: m.created_at || 0,
            content: sanitize(m.content || ''),
            user: convertToUser(user, m.pubkey),
            topZaps: [...tz],
            naddr: nip19.naddrEncode({ identifier, pubkey, kind }),
            noteId: nip19.naddrEncode({ identifier, pubkey, kind }),
            coordinate: `${kind}:${pubkey}:${identifier}`,
            msg: m,
            mentionedNotes,
            mentionedUsers,
            wordCount,
            noteActions,
            likes: stat?.likes || 0,
            mentions: stat?.mentions || 0,
            reposts: stat?.reposts || 0,
            replies: stat?.replies || 0,
            zaps: stat?.zaps || 0,
            score: stat?.score || 0,
            score24h: stat?.score24h || 0,
            satszapped: stat?.satszapped || 0,
            relayHints: page.relayHints,
          };

          m.tags.forEach(tag => {
            switch (tag[0]) {
              case 't':
                article.tags.push(tag[1]);
                break;
              case 'title':
                article.title = tag[1];
                break;
              case 'summary':
                article.summary = tag[1];
                break;
              case 'image':
                article.image = tag[1];
                break;
              case 'published':
                article.published = parseInt(tag[1]);
                break;
              case 'client':
                article.client = tag[1];
                break;
              default:
                break;
            }
          });

          mentionedArticles[article.naddr] = { ...article };
        }

        if ([Kind.Highlight].includes(m.kind)) {
          mentionedHighlights[id] = {
            user: convertToUser(page.users[m.pubkey], m.pubkey),
            event: { ...m },
          }
        }

      }
    }

    if (userMentionIds && userMentionIds.length > 0) {
      for (let i = 0;i<userMentionIds.length;i++) {
        const id = userMentionIds[i];
        const m = page.users && page.users[id];

        mentionedUsers[id] = convertToUser(m, id);
      }
    }

    return {
      user: {
        id: user?.id || '',
        pubkey: user?.pubkey || msg.pubkey,
        npub: hexToNpub(user?.pubkey || msg.pubkey),
        name: (userMeta.name || user?.pubkey || '') as string,
        about: (userMeta.about || '') as string,
        picture: (userMeta.picture || '') as string,
        nip05: (userMeta.nip05 || '') as string,
        banner: (userMeta.banner || '') as string,
        displayName: (userMeta.display_name || '') as string,
        location: (userMeta.location || '') as string,
        lud06: (userMeta.lud06 || '') as string,
        lud16: (userMeta.lud16 || '') as string,
        website: (userMeta.website || '') as string,
        tags: user?.tags || [],
        msg: { ...user },
      },
      post: {
        id: msg.id,
        pubkey: msg.pubkey,
        created_at: msg.created_at || 0,
        tags: msg.tags,
        content: sanitize(msg.content),
        kind: msg.kind,
        sig: msg.sig,
        likes: stat?.likes || 0,
        mentions: stat?.mentions || 0,
        reposts: stat?.reposts || 0,
        replies: stat?.replies || 0,
        zaps: stat?.zaps || 0,
        score: stat?.score || 0,
        score24h: stat?.score24h || 0,
        satszapped: stat?.satszapped || 0,
        noteId: nip19.noteEncode(msg.id),
        noteActions: (page.noteActions && page.noteActions[msg.id]) ?? noActions(msg.id),
        relayHints: page.relayHints,
      },
      repost,
      msg,
      mentionedNotes,
      mentionedUsers,
      mentionedHighlights,
      mentionedArticles,
      replyTo: replyTo && replyTo[1],
      tags: msg.tags,
      id: msg.id,
      noteId: nip19.noteEncode(msg.id),
      pubkey: msg.pubkey,
      topZaps: [ ...tz ],
      content: sanitize(msg.content),
      relayHints: page.relayHints,
    };
  });
}


type ConvertToArticles = (page: FeedPage | undefined, topZaps?: Record<string, TopZap[]>) => PrimalArticle[];

export const convertToArticles: ConvertToArticles = (page, topZaps) => {

  if (page === undefined) {
    return [];
  }

  const mentions = page.mentions || {};
  const pageMessages = page.messages.filter(m => [Kind.LongForm, Kind.Repost, Kind.LongFormShell].includes(m.kind));

  return  pageMessages.map((message) => {

    const msg: NostrNoteContent = message.kind === Kind.Repost ? parseKind6(message, Kind.LongForm) : message;

    const pubkey = msg.pubkey;
    const identifier = (msg.tags.find(t => t[0] === 'd') || [])[1];
    const kind = Kind.LongForm;

    const naddr = nip19.naddrEncode({ identifier, pubkey, kind });

    const user = page?.users[msg.pubkey];
    const stat = page?.postStats[msg.id];

    const mentionIds = Object.keys(mentions)
    let userMentionIds = msg.tags?.reduce((acc, t) => t[0] === 'p' ? [...acc, t[1]] : acc, []);

    let tz: TopZap[] = [];

    if (topZaps && (topZaps[naddr] || topZaps[msg.id])) {
      tz = topZaps[naddr] || topZaps[msg.id] || [];

      for(let i=0; i<tz.length; i++) {
        if (userMentionIds.includes(tz[i].pubkey)) continue;

        userMentionIds.push(tz[i].pubkey);
      }
    }

    let mentionedNotes: Record<string, PrimalNote> = {};
    let mentionedUsers: Record<string, PrimalUser> = {};
    let mentionedHighlights: Record<string, any> = {};
    let mentionedArticles: Record<string, PrimalArticle> = {};

    if (mentionIds.length > 0) {
      for (let i = 0;i<mentionIds.length;i++) {
        let id = mentionIds[i];
        const m = mentions && mentions[id];

        if (!m) {
          continue;
        }

        for (let i = 0;i<m.tags.length;i++) {
          const t = m.tags[i];
          if (t[0] === 'p') {
            mentionedUsers[t[1]] = convertToUser(page.users[t[1]], t[1]);
          }
        }

        if ([Kind.Text].includes(m.kind)) {

          const mentionStat = page.postStats[id];

          const noteActions = (page.noteActions && page.noteActions[id]) ?? {
            event_id: id,
            liked: false,
            replied: false,
            reposted: false,
            zapped: false,
          };

          mentionedNotes[id] = {
            // @ts-ignore TODO: Investigate this typing
            post: {
              ...m,
              noteId: nip19.noteEncode(m.id),
              likes: mentionStat?.likes || 0,
              mentions: mentionStat?.mentions || 0,
              reposts: mentionStat?.reposts || 0,
              replies: mentionStat?.replies || 0,
              zaps: mentionStat?.zaps || 0,
              score: mentionStat?.score || 0,
              score24h: mentionStat?.score24h || 0,
              satszapped: mentionStat?.satszapped || 0,
              noteActions,
            },
            user: convertToUser(page.users[m.pubkey], m.pubkey),
            mentionedUsers,
            pubkey: m.pubkey,
            id: m.id,
            noteId: nip19.noteEncode(m.id),
          };
        }

        if ([Kind.LongForm, Kind.LongFormShell].includes(m.kind)) {

          const mentionStat = page.postStats[id];

          const noteActions = (page.noteActions && page.noteActions[id]) ?? {
            event_id: id,
            liked: false,
            replied: false,
            reposted: false,
            zapped: false,
          };

          const identifier = (m.tags.find(t => t[0] === 'd') || [])[1];
          const pubkey = m.pubkey;
          const kind = Kind.LongForm;

          const wordCount = page.wordCount ? page.wordCount[m.id] || 0 : 0;

          let article: PrimalArticle = {
            id: m.id,
            pubkey: m.pubkey,
            title: '',
            summary: '',
            image: '',
            tags: [],
            published: m.created_at || 0,
            content: sanitize(m.content || ''),
            user: convertToUser(user, m.pubkey),
            topZaps: [...tz],
            naddr: nip19.naddrEncode({ identifier, pubkey, kind }),
            noteId: nip19.naddrEncode({ identifier, pubkey, kind }),
            coordinate: `${kind}:${pubkey}:${identifier}`,
            msg: m,
            mentionedNotes,
            mentionedUsers,
            wordCount,
            noteActions,
            likes: stat?.likes || 0,
            mentions: stat?.mentions || 0,
            reposts: stat?.reposts || 0,
            replies: stat?.replies || 0,
            zaps: stat?.zaps || 0,
            score: stat?.score || 0,
            score24h: stat?.score24h || 0,
            satszapped: stat?.satszapped || 0,
            relayHints: page.relayHints,
          };

          m.tags.forEach(tag => {
            switch (tag[0]) {
              case 't':
                article.tags.push(tag[1]);
                break;
              case 'title':
                article.title = tag[1];
                break;
              case 'summary':
                article.summary = tag[1];
                break;
              case 'image':
                article.image = tag[1];
                break;
              case 'published':
                article.published = parseInt(tag[1]);
                break;
              case 'client':
                article.client = tag[1];
                break;
              default:
                break;
            }
          });

          mentionedArticles[article.naddr] = { ...article };
        }

        if ([Kind.Highlight].includes(m.kind)) {
          mentionedHighlights[id] = {
            user: convertToUser(page.users[m.pubkey], m.pubkey),
            event: { ...m },
          }
        }

      }
    }

    if (userMentionIds && userMentionIds.length > 0) {
      for (let i = 0;i<userMentionIds.length;i++) {
        const id = userMentionIds[i];
        const m = page.users && page.users[id];

        mentionedUsers[id] = convertToUser(m, id);
      }
    }

    const wordCount = page.wordCount ? page.wordCount[message.id] || 0 : 0;

    let article: PrimalArticle = {
      id: msg.id,
      pubkey: msg.pubkey,
      title: '',
      summary: '',
      image: '',
      tags: [],
      published: parseInt((msg.tags.find(t => t[0] === 'published_at') || [])[1] || `${msg.created_at}` || '0'),
      content: sanitize(msg.content || ''),
      user: convertToUser(user, msg.pubkey),
      topZaps: [...tz],
      naddr: nip19.naddrEncode({ identifier, pubkey, kind }),
      noteId: nip19.naddrEncode({ identifier, pubkey, kind }),
      coordinate: `${kind}:${pubkey}:${identifier}`,
      msg: {
        ...msg,
        kind,
      },
      mentionedNotes,
      mentionedUsers,
      mentionedHighlights,
      mentionedArticles,
      wordCount,
      noteActions: (page.noteActions && page.noteActions[msg.id]) ?? noActions(msg.id),
      likes: stat?.likes || 0,
      mentions: stat?.mentions || 0,
      reposts: stat?.reposts || 0,
      replies: stat?.replies || 0,
      zaps: stat?.zaps || 0,
      score: stat?.score || 0,
      score24h: stat?.score24h || 0,
      satszapped: stat?.satszapped || 0,
      relayHints: page.relayHints,
    };

    msg.tags.forEach(tag => {
      switch (tag[0]) {
        case 't':
          article.tags.push(tag[1]);
          break;
        case 'title':
          article.title = tag[1];
          break;
        case 'summary':
          article.summary = tag[1];
          break;
        case 'image':
          article.image = tag[1];
          break;
        case 'published':
          article.published = parseInt(tag[1]);
          break;
        case 'client':
          article.client = tag[1];
          break;
        default:
          break;
      }
    });

    return article;
  });
}

const sortBy = (a: PrimalNote, b: PrimalNote, property: string) => {

  const aData: Record<string, any> = a.repost ? a.repost.note : a.post;
  const bData: Record<string, any> = b.repost ? b.repost.note : b.post;

  return bData[property] - aData[property];
};

export const sortByRecency = (posts: PrimalNote[], reverse = false) => {
  return posts.sort((a: PrimalNote, b: PrimalNote) => {
    const order = sortBy(a, b, 'created_at');

    return reverse ? -1 * order : order;
  });
};

export const sortByScore24h = (posts: PrimalNote[], reverse = false) => {
  return posts.sort((a: PrimalNote, b: PrimalNote) => {
    const order = sortBy(a, b, 'score24h');

    return reverse ? -1 * order : order;
  });
};

export const sortByScore = (posts: PrimalNote[], reverse = false) => {
  return posts.sort((a: PrimalNote, b: PrimalNote) => {
    const order = sortBy(a, b, 'score');

    return reverse ? -1 * order : order;
  });
};

export const sortByZapped = (posts: PrimalNote[], reverse = false) => {
  return posts.sort((a: PrimalNote, b: PrimalNote) => {
    const order = sortBy(a, b, 'satszapped');

    return reverse ? -1 * order : order;
  });
};

export const sortingPlan = (topic: string = '') => {
  const sortingFunctions: Record<string, Function> = {
    trending: sortByScore24h,
    popular: sortByScore,
    latest: sortByRecency,
    mostzapped: sortByZapped,
    mostzapped4h: sortByZapped,
  }

  const plan = topic || 'latest';

  return sortingFunctions[plan] || sortingFunctions['latest'];
};


export const paginationPlan = (criteria: string) => {
  const pagCriteria: Record<string, string> = {
    trending: 'score24h',
    popular: 'score',
    latest: 'created_at',
    mostzapped: 'satszapped',
    mostzapped4h: 'satszapped',
  }

  const plan = criteria || 'latest';

  return pagCriteria[plan] || pagCriteria['latest'];
}

type NoteStore = {
  notes: PrimalNote[],
  page: FeedPage,
  lastNote: PrimalNote | undefined,
  reposts: Record<string, string> | undefined,
}

export const referencesToTags = (value: string, relayHints: Record<string, string>) => {
  const regexHashtag = /(?:\s|^)#[^\s!@#$%^&*(),.?":{}|<>]+/ig;
  const regexMention =
    /\bnostr:((note|npub|nevent|nprofile|naddr)1\w+)\b|#\[(\d+)\]/g;

  let refs: string[] = [];
  let tags: string[][] = [];
  let match;

  // Parse hashtags to add to tags
  while((match = regexHashtag.exec(value)) != null) {
    tags.push(['t', match[0].trim().slice(1)]);
  }

  // Parse mentions to add to tags
  while((match = regexMention.exec(value)) !== null) {
    refs.push(match[0]);
  }

  refs.forEach((ref) => {
    const decoded = nip19.decode(ref.split('nostr:')[1]);

    if (decoded.type === 'npub') {
      tags.push(['p', decoded.data, '', 'mention'])
      return;
    }

    if (decoded.type === 'nprofile') {
      const relay = decoded.data.relays ? (decoded.data.relays[0] || '') : '';
      tags.push(['p', decoded.data.pubkey, relay, 'mention']);
      return;
    }

    if (decoded.type === 'note') {
      tags.push(['e', decoded.data, relayHints ? (relayHints[decoded.data] || '') : '', 'mention']);
      return;
    }

    if (decoded.type === 'nevent') {
      const relay = decoded.data.relays ? (decoded.data.relays[0] || '') : '';
      tags.push(['e', decoded.data.id, relay, 'mention']);
      return;
    }

    if (decoded.type === 'naddr') {
      const relay = decoded.data.relays ? (decoded.data.relays[0] || '') : '';
      tags.push(['a', `${decoded.data.kind}:${decoded.data.pubkey}:${decoded.data.identifier}`, relay, 'mention']);
      return;
    }
  });

  return tags;

};
