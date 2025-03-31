import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import { PrimalNote } from '../../../types/primal';
import ParsedNote from '../../ParsedNote/ParsedNote';
import NoteFooter from '../NoteFooter/NoteFooter';

import styles from './NotificationNote.module.scss';
import { useThreadContext } from '../../../contexts/ThreadContext';
import { hookForDev } from '../../../lib/devTools';

const NotificationNote: Component<{ note: PrimalNote, id?: string }> = (props) => {

  const threadContext = useThreadContext();

  const navToThread = (note: PrimalNote) => {
    threadContext?.actions.setPrimaryNote(note);
  };

  return (
    <A
      id={props.id}
      class={styles.postLink}
      href={`/e/${props.note?.post.noteId}`}
      onClick={() => navToThread(props.note)}
      data-event={props.note.post.id}
      data-event-bech32={props.note.post.noteId}
    >
      <div class={styles.post}>
        <div class={styles.content}>
          <div class={styles.message}>
            <ParsedNote note={props.note} shorten={true} />
          </div>

          <div class={styles.footer}>
            <NoteFooter note={props.note} />
          </div>
        </div>
      </div>
    </A>
  )
}

export default hookForDev(NotificationNote);
