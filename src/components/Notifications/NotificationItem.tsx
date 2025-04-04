import { useIntl } from '@cookbook/solid-intl';
import { A } from '@solidjs/router';
import { Component, createEffect, createMemo, createSignal, For, Show } from 'solid-js';
import { NotificationType } from '../../constants';
import { trimVerification } from '../../lib/profile';
import { truncateNpub, userName } from '../../stores/profile';
import { PrimalNote, PrimalNotifUser } from '../../types/primal';
import Avatar from '../Avatar/Avatar';

import styles from './NotificationItem.module.scss';

import userFollow from '../../assets/icons/notifications/user_followed.svg';
import userUnFollow from '../../assets/icons/notifications/user_unfollowed.svg';

import postZapped from '../../assets/icons/notifications/post_zapped.svg';
import postLiked from '../../assets/icons/notifications/post_liked.svg';
import postReposted from '../../assets/icons/notifications/post_reposted.svg';
import postReplied from '../../assets/icons/notifications/post_replied.svg';

import mention from '../../assets/icons/notifications/mention.svg';
import mentionedPost from '../../assets/icons/notifications/mentioned_post.svg';

import mentionZapped from '../../assets/icons/notifications/mention_zapped.svg';
import mentionLiked from '../../assets/icons/notifications/mention_liked.svg';
import mentionReposted from '../../assets/icons/notifications/mention_reposted.svg';
import mentionReplied from '../../assets/icons/notifications/mention_replied.svg';

import mentionedPostZapped from '../../assets/icons/notifications/mentioned_post_zapped.svg';
import mentionedPostLiked from '../../assets/icons/notifications/mentioned_post_liked.svg';
import mentionedPostReposted from '../../assets/icons/notifications/mentioned_post_reposted.svg';
import mentionedPostReplied from '../../assets/icons/notifications/mentioned_post_replied.svg';
import NotificationNote from '../Note/NotificationNote/NotificationNote';
import NotificationAvatar from '../NotificationAvatar/NotificationAvatar';
import { notificationsNew as t } from '../../translations';
import { hookForDev } from '../../lib/devTools';
import Note from '../Note/Note';
import { useAppContext } from '../../contexts/AppContext';

const typeIcons: Record<string, string> = {
  [NotificationType.NEW_USER_FOLLOWED_YOU]: userFollow,
  [NotificationType.USER_UNFOLLOWED_YOU]: userUnFollow,

  [NotificationType.YOUR_POST_WAS_ZAPPED]: postZapped,
  [NotificationType.YOUR_POST_WAS_LIKED]: postLiked,
  [NotificationType.YOUR_POST_WAS_REPOSTED]: postReposted,
  [NotificationType.YOUR_POST_WAS_REPLIED_TO]: postReplied,

  [NotificationType.YOU_WERE_MENTIONED_IN_POST]: mention,
  [NotificationType.YOUR_POST_WAS_MENTIONED_IN_POST]: mentionedPost,

  [NotificationType.POST_YOU_WERE_MENTIONED_IN_WAS_ZAPPED]: mentionZapped,
  [NotificationType.POST_YOU_WERE_MENTIONED_IN_WAS_LIKED]: mentionLiked,
  [NotificationType.POST_YOU_WERE_MENTIONED_IN_WAS_REPOSTED]: mentionReposted,
  [NotificationType.POST_YOU_WERE_MENTIONED_IN_WAS_REPLIED_TO]: mentionReplied,

  [NotificationType.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_ZAPPED]: mentionedPostZapped,
  [NotificationType.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_LIKED]: mentionedPostLiked,
  [NotificationType.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPOSTED]:mentionedPostReposted,
  [NotificationType.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPLIED_TO]: mentionedPostReplied,

}

type NotificationItemProps = {
  id?: string,
  type: NotificationType,
  users?: PrimalNotifUser[],
  note?: PrimalNote,
  iconInfo?: string,
  iconTooltip?: string,
};

const uniqueifyUsers = (users: PrimalNotifUser[]) => {
  return users.reduce<PrimalNotifUser[]>((acc, u) => {
    const found = acc.find(a => a.id === u.id);
    return found ? acc : [...acc, u];
  }, []);
}

const avatarDisplayLimit = 12;

const NotificationItem: Component<NotificationItemProps> = (props) => {

  const intl = useIntl();
  const app = useAppContext();

  const [typeIcon, setTypeIcon] = createSignal<string>('');

  const sortedUsers = createMemo(() => {
    if (!props.users || props.users.length === 0) {
      return [];
    }

    const users = uniqueifyUsers(props.users);

    return users.sort((a, b) => b.followers_count - a.followers_count);
  });

  const displayedUsers = createMemo(() => {
    const limited = sortedUsers().slice(0, avatarDisplayLimit);

    return limited;
  });

  const numberOfUsers = createMemo(() => sortedUsers().length);

  const remainingUsers = createMemo(() => {
    const remainder = numberOfUsers() - displayedUsers().length;

    return remainder > 99 ? 99 : remainder;
  });


  const firstUserName = createMemo(() => {
    const firstUser = sortedUsers()[0];

    if (!firstUser) {
      return '';
    }

    return firstUser.displayName ||
      firstUser.name ||
      truncateNpub(firstUser.npub);
  });

  const firstUserVerification = createMemo(() => {
    const firstUser = sortedUsers()[0];

    if (!firstUser || !firstUser.nip05) {
      return null;
    }

    return trimVerification(firstUser.nip05);

  });

  const typeDescription = () => {

    return intl.formatMessage(t[props.type], {
      number: numberOfUsers() - 1,
    });

  }

  createEffect(() => {
    setTypeIcon(typeIcons[props.type])
  });

  return (
    <div id={props.id} class={styles.notifItem}>
      <div class={styles.newBubble}></div>
      <div class={styles.notifType}>
        <img src={typeIcon()} alt="notification icon" />
        <div class={styles.iconInfo} title={props.iconTooltip}>
          {props.iconInfo}
        </div>
      </div>
      <div class={styles.notifContent}>
        <div class={styles.avatars}>
          <Show when={numberOfUsers() > 0}>
            <For each={displayedUsers()}>
              {(user) => (
                <A
                  href={app?.actions.profileLink(user.npub) || ''} class={styles.avatar}
                  title={userName(user)}
                >
                  <Avatar user={user} size="xs" />
                </A>
              )}
            </For>
          </Show>
          <Show when={numberOfUsers() > avatarDisplayLimit - 1}>
            <NotificationAvatar number={remainingUsers()} size="xs" />
          </Show>
        </div>
        <div class={styles.description}>
          <div class={styles.firstUser}>
            <span class={styles.firstUserName}>{firstUserName()}</span>
            <Show when={firstUserVerification()}>
              <span class={styles.verifiedIcon} />
            </Show>
          </div>
          <div class={styles.restUsers}>{typeDescription()}</div>
        </div>
        <Show
          when={![NotificationType.NEW_USER_FOLLOWED_YOU, NotificationType.USER_UNFOLLOWED_YOU].includes(props.type)}
        >
          <div class={styles.reference}>
            <Show when={props.note}>
              <Note
                // @ts-ignore
                note={props.note}
                noteType="notification"
              />
            </Show>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default hookForDev(NotificationItem);
