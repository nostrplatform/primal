import { useIntl } from '@cookbook/solid-intl';
import { Dialog } from '@kobalte/core/dialog';
import { Component, Show } from 'solid-js';
import Avatar from '../../components/Avatar/Avatar';
import ButtonGreen from '../../components/Buttons/ButtonGreen';
import FeedbackCircle from '../../components/FeedbackCircle/FeedbackCircle';
import { nip05Verification, userName } from '../../stores/profile';
import { premium as t } from '../../translations';

import { PrimalUser } from '../../types/primal';
import { PremiumStore } from './Premium';

import styles from './Premium.module.scss';


const PremiumSuccessModal: Component<{
  profile?: PrimalUser,
  open?: boolean,
  setOpen: (v: boolean) => void,
  onClose: () => void,
  data: PremiumStore,
}> = (props) => {
  const intl = useIntl();

  const displayName = () => {
    if (props.data.name.length > 0) return props.data.name;

    return userName(props.profile);
  }

  return (
      <Dialog open={props.open} onOpenChange={props.setOpen} preventScroll={false}>
        <Dialog.Trigger class="hidden">
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay class={styles.successDialogOverlay} />
          <div class={styles.successDialog}>
            <Dialog.Content class={styles.dialogContent} >
              <div class={styles.successModal}>
                <div class={styles.dialogHeader}>
                  <Dialog.Title class={styles.userInfo}>
                    <div class={styles.avatar}>
                      <Avatar
                        size="sm"
                        user={props.profile}
                      />
                    </div>
                    <div class={styles.details}>
                      <div class={styles.name}>
                        {displayName()}
                        <div class={`${styles.orangeCheck} ${styles.small}`}></div>
                      </div>
                      <div class={styles.verification} title={props.profile?.nip05}>
                        <Show when={props.profile?.nip05}>
                          <span
                            class={styles.verifiedBy}
                            title={props.profile?.nip05}
                          >
                            {nip05Verification(props.profile)}
                          </span>
                        </Show>
                      </div>
                    </div>
                  </Dialog.Title>

                  <Dialog.CloseButton class={styles.dialogCloseButton}>
                    <div class={styles.excludeIcon}></div>
                  </Dialog.CloseButton>
                </div>

                <Dialog.Description class={styles.content}>
                  <FeedbackCircle success={true} />
                  <div class={styles.successCaption}>
                    {intl.formatMessage(t.subOptions.success.caption)}
                  </div>
                  <div class={styles.successDescription}>
                    {props.data.successMessage}
                  </div>
                  <ButtonGreen onClick={props.onClose}>
                    {intl.formatMessage(t.actions.done)}
                  </ButtonGreen>
                </Dialog.Description>
              </div>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog>
  );
}

export default PremiumSuccessModal
