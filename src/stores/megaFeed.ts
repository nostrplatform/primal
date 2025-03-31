import { nip19 } from "nostr-tools";
import { Kind } from "../constants";
import { hexToNpub } from "../lib/keys";
import { sanitize } from "../lib/notes";
import { MegaFeedPage, MegaRepostInfo, NostrEvent, NostrNoteContent, PrimalArticle, PrimalNote, PrimalUser, TopZap, UserStats } from "../types/primal";
import { convertToUser } from "./profile";


export const noActions = (id: string) => ({
  event_id: id,
  liked: false,
  replied: false,
  reposted: false,
  zapped: false,
});

export const parseRepost = (message: NostrNoteContent, defaultKind = 1) => {
  try {
    return JSON.parse(message.content) as NostrNoteContent;
  } catch (e) {
    return {
      kind: defaultKind,
      content: '',
      id: message.id,
      created_at: message.created_at,
      pubkey: message.pubkey,
      sig: message.sig,
      tags: message.tags,
    } as NostrNoteContent;
  }
};

export const encodeCoordinate = (event: NostrNoteContent, forceKind?: Kind) => {

  const identifier = (event.tags.find(t => t[0] === 'd') || [])[1];
  const pubkey = event.pubkey;
  const kind = forceKind || event.kind;

  const coordinate =  `${kind}:${identifier}:${pubkey}`;
  const naddr = nip19.naddrEncode({ kind, pubkey, identifier });

  return { coordinate, naddr };
}

export const extractRepostInfo: MegaRepostInfo = (page, message) => {
  const user = page?.users[message.pubkey];
  const userMeta = JSON.parse(user?.content || '{}');
  const stat = page?.noteStats[message.id];

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

export const extractReplyTo = (tags: string[][]) => {
  let replyTo: string[] = [];

  // Determine parent by finding the `e` tag with `reply` then `root` as `marker`
  // If both fail return the last `e` tag
  for (let i=0; i<tags.length; i++) {
    const tag = tags[i];

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
    const eTags = tags.filter(t => t[0] === 'e' && t[3] !== 'mention');

    if (eTags.length === 1) {
      replyTo = [...eTags[0]];
    }
    else if (eTags.length > 1){
      replyTo = [...eTags[eTags.length - 1]];
    }
  }

  return replyTo;
}

export const extractMentions = (page: MegaFeedPage, note: NostrNoteContent) => {

  const mentionIds = Object.keys(page.mentions || {});
  const userMentionIds = note.tags.reduce((acc, t) => t[0] === 'p' ? [...acc, t[1]] : acc, []);
  const wordCounts = page.wordCount || {};
  const topZaps = page.topZaps[note.id] || [];

  let mentionedNotes: Record<string, PrimalNote> = {};
  let mentionedUsers: Record<string, PrimalUser> = {};
  let mentionedHighlights: Record<string, any> = {};
  let mentionedArticles: Record<string, PrimalArticle> = {};

  for (let i = 0;i<mentionIds.length;i++) {
    let mentionId = mentionIds[i];
    const mention = page.mentions && page.mentions[mentionId];

    if (!mention) {
      continue;
    }

    const stat = page.noteStats[mentionId];

    // Add mention author to mentioned users list
    mentionedUsers[mention.pubkey] = convertToUser(page.users[mention.pubkey], mention.pubkey);

    // Parse mention tags for more mentioned users
    for (let i=0;i<mention.tags.length;i++) {
      const t = mention.tags[i];
      if (t[0] !== 'p' || mentionedUsers[t[1]]) continue;

      mentionedUsers[t[1]] = convertToUser(page.users[t[1]], t[1]);
    }

    const mentionStat = page.noteStats[mentionId];

    const noteActions = (page.noteActions && page.noteActions[mentionId]) ?? noActions(mentionId);

    if ([Kind.Text].includes(mention.kind)) {

      mentionedNotes[mentionId] = {
        // @ts-ignore TODO: Investigate this typing
        post: {
          ...mention,
          noteId: nip19.noteEncode(mention.id),
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
          ...mention,
        },
        content: mention.content,
        user: mentionedUsers[mention.pubkey],
        mentionedUsers,
        pubkey: mention.pubkey,
        id: mention.id,
        noteId: nip19.noteEncode(mention.id),
      };
    }

    if ([Kind.LongForm, Kind.LongFormShell].includes(mention.kind)) {

      const { coordinate, naddr } = encodeCoordinate(mention, Kind.LongForm);

      const wordCount = wordCounts[mention.id] || 0;

      const published = mention.tags.reduce<number>((acc, t) => {
        if (t[0] !== 'published_at') return acc;

        const time = parseInt(t[1]);
        return time > acc ? time : acc;
      }, 0);

      let article: PrimalArticle = {
        id: mention.id,
        pubkey: mention.pubkey,
        title: '',
        summary: '',
        image: '',
        tags: [],
        published: published || mention.created_at || 0,
        content: sanitize(mention.content || ''),
        user: mentionedUsers[mention.pubkey],
        topZaps: page.topZaps[mention.id] || [],
        naddr,
        noteId: naddr,
        coordinate,
        msg: mention,
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

      mention.tags.forEach(tag => {
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

    if ([Kind.Highlight].includes(mention.kind)) {
      mentionedHighlights[mentionId] = {
        user: convertToUser(page.users[mention.pubkey], mention.pubkey),
        event: { ...mention },
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

  // include senders of top zaps into mentioned users
  for(let i=0; i<topZaps.length; i++) {
    const topZap = topZaps[i];
    if (mentionedUsers[topZap.pubkey]) continue;

    mentionedUsers[topZap.pubkey] = convertToUser(page.users[topZap.pubkey], topZap.pubkey);
  }

  return {
    mentionedNotes,
    mentionedArticles,
    mentionedUsers,
    mentionedHighlights,
  };
}

export const convertToUsersMega = (page: MegaFeedPage) => {

  if (page === undefined) {
    return [];
  }

  let stats = page.userStats || {};

  let pks = Object.keys(page.userFollowerCounts);

  if (pks.length > 0) {
    pks.forEach(pk => {
      if (stats[pk]) {
        stats[pk].followers_count = page.userFollowerCounts[pk];
      } else {
        stats[pk] = {
          pubkey: pk,
          followers_count: page.userFollowerCounts[pk],
          follows_count: 0,
          note_count: 0,
          reply_count: 0,
          time_joined: 0,
          total_zap_count: 0,
          total_satszapped: 0,
          relay_count: 0,
          media_count: 0,
          long_form_note_count: 0,
          followers_increase: {increase:0, ratio: 0, count: 0},
        }
      }
    })
  }

  pks = Object.keys(page.userFollowerIncrease);

  if (pks.length > 0) {
    pks.forEach(pk => {
      if (stats[pk]) {
        stats[pk].followers_increase = page.userFollowerIncrease[pk];
      } else {
        stats[pk] = {
          pubkey: pk,
          followers_count: 0,
          follows_count: 0,
          note_count: 0,
          reply_count: 0,
          time_joined: 0,
          total_zap_count: 0,
          total_satszapped: 0,
          relay_count: 0,
          media_count: 0,
          long_form_note_count: 0,
          followers_increase: page.userFollowerIncrease[pk],
        }
      }
    })
  }

  return Object.values(page.users).map(u => convertToUser(u, u.pubkey, stats));
};

export const convertToNotesMega = (page: MegaFeedPage) => {

  if (page === undefined) {
    return [];
  }

  let i = 0;

  let notes: PrimalNote[] = [];

  for (i=0;i<page.notes.length;i++) {
    const pageNote = page.notes[i];

    // If this is a repost, parse it for the originsl note.
    const note = pageNote.kind === Kind.Repost ? parseRepost(pageNote) : pageNote;

    // if this is a repost extract repost info
    const repost = pageNote.kind === Kind.Repost ? extractRepostInfo(page, pageNote) : undefined;

    const author = convertToUser(page.users[note.pubkey], note.pubkey);
    const stat = page.noteStats[note.id];
    const topZaps = page.topZaps[note.id] || [];

    const tags = note.tags || [];
    const replyTo = extractReplyTo(tags);

    // Parse mentions
    let {
      mentionedNotes,
      mentionedArticles,
      mentionedUsers,
      mentionedHighlights,
    } = extractMentions(page, note);

    const newNote: PrimalNote = {
      user: author,
      post: {
        id: note.id,
        pubkey: note.pubkey,
        created_at: note.created_at || 0,
        tags: note.tags,
        content: sanitize(note.content),
        kind: note.kind,
        sig: note.sig,
        likes: stat?.likes || 0,
        mentions: stat?.mentions || 0,
        reposts: stat?.reposts || 0,
        replies: stat?.replies || 0,
        zaps: stat?.zaps || 0,
        score: stat?.score || 0,
        score24h: stat?.score24h || 0,
        satszapped: stat?.satszapped || 0,
        noteId: nip19.noteEncode(note.id),
        noteActions: (page.noteActions && page.noteActions[note.id]) ?? noActions(note.id),
        relayHints: page.relayHints,
      },
      repost,
      msg: note,
      mentionedNotes,
      mentionedUsers,
      mentionedHighlights,
      mentionedArticles,
      replyTo: replyTo && replyTo[1],
      tags: note.tags,
      id: note.id,
      noteId: nip19.noteEncode(note.id),
      pubkey: note.pubkey,
      topZaps,
      content: sanitize(note.content),
      relayHints: page.relayHints,
    };

    notes.push(newNote);
  }

  return notes;
};

export const convertToReadsMega = (page: MegaFeedPage) => {
  if (page === undefined) {
    return [];
  }

  let i = 0;

  let reads: PrimalArticle[] = [];

  for (i=0;i<page.reads.length;i++) {
    const read = page.reads[i];
    const author = convertToUser(page.users[read.pubkey], read.pubkey);
    const stat = page.noteStats[read.id];
    const topZaps = page.topZaps[read.id] || [];
    const wordCount = (page.wordCount || {})[read.id] || 0;

    const { coordinate, naddr } = encodeCoordinate(read, Kind.LongForm);


    const repost = read.kind === Kind.Repost ? extractRepostInfo(page, read) : undefined;
    const tags = read.tags || [];
    const userMentionIds = tags.reduce((acc, t) => t[0] === 'p' ? [...acc, t[1]] : acc, []);
    const replyTo = extractReplyTo(tags);

    // include senders of top zaps into mentioned users
    for(let i=0; i<topZaps.length; i++) {
      if (userMentionIds.includes(topZaps[i].pubkey)) continue;
      userMentionIds.push(topZaps[i].pubkey);
    }

    // Parse mentions
    const {
      mentionedNotes,
      mentionedArticles,
      mentionedUsers,
      mentionedHighlights,
    } = extractMentions(page, read);

    const published = read.tags.reduce<number>((acc, t) => {
      if (t[0] !== 'published_at') return acc;

      const time = parseInt(t[1]);
      return time > acc ? time : acc;
    }, 0);

    let newRead: PrimalArticle = {
      id: read.id,
      pubkey: read.pubkey,
      title: '',
      summary: '',
      image: '',
      tags: [],
      published: published || read.created_at || 0,
      content: sanitize(read.content || ''),
      user: author,
      topZaps,
      naddr,
      noteId: naddr,
      coordinate,
      msg: {
        ...read,
        kind: Kind.LongForm,
      },
      mentionedNotes,
      mentionedUsers,
      mentionedHighlights,
      mentionedArticles,
      wordCount,
      noteActions: (page.noteActions && page.noteActions[read.id]) ?? noActions(read.id),
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

    tags.forEach(tag => {
      switch (tag[0]) {
        case 't':
          newRead.tags.push(tag[1]);
          break;
        case 'title':
          newRead.title = tag[1];
          break;
        case 'summary':
          newRead.summary = tag[1];
          break;
        case 'image':
          newRead.image = tag[1];
          break;
        case 'published':
          newRead.published = parseInt(tag[1]);
          break;
        case 'client':
          newRead.client = tag[1];
          break;
        default:
          break;
      }
    });

    reads.push(newRead);
  }

  return reads;
};
