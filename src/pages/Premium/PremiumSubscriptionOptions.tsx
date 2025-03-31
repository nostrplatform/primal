import { useIntl } from '@cookbook/solid-intl';
import { A } from '@solidjs/router';
import { Component, createEffect, For, onMount, Show } from 'solid-js';
import ButtonFlip from '../../components/Buttons/ButtonFlip';
import ButtonLink from '../../components/Buttons/ButtonLink';
import TransactionAmount from '../../components/TransactionAmount/TransactionAmount';

import { premium as t } from '../../translations';
import { PremiumStore } from './Premium';

import styles from './Premium.module.scss';

export type PremiumOption = {
  id: string,
  price: 'm7' | 'm6',
  duration: 'm3' | 'm12',
};

const PremiumSubscriptionOptions: Component<{
  options: PremiumOption[],
  selectedOption: PremiumOption,
  data: PremiumStore,
  onSelect: (option: PremiumOption) => void,
  openPromoCode: () => void,
  promoCode?: string,
  dark?: boolean,
}> = (props) => {
  const intl = useIntl();

  return (
    <div class={styles.subOptions}>
      <div class={styles.totalPrice}>
        <TransactionAmount
          amountUSD={props.data.subscriptions[props.selectedOption.id]?.amounts.usd || 0}
          amountSats={Math.round(props.data.subscriptions[props.selectedOption.id]?.amounts.sats || 0)}
        />
      </div>
      <div class={styles.subOptionsSelections}>
        <For each={props.options}>
          {option =>
            <ButtonFlip
              when={props.selectedOption.id !== option.id}
              onClick={() => props.onSelect(option)}
              dark={props.dark}
            >
              <div class={styles.selectedOption}>
                <div class={styles.price}>
                  {intl.formatMessage(t.subOptions.prices[option.price])}
                </div>

                <div class={`${styles.duration} ${props.selectedOption.id !== option.id ? styles.hot : ''}`}>
                {intl.formatMessage(t.subOptions.durations[option.duration])}
                </div>
              </div>
            </ButtonFlip>
          }
        </For>
      </div>

      {/* <div class={styles.promoCodeLink}>
        <Show
          when={props.promoCode && props.promoCode.length > 0}
          fallback={
            <ButtonLink
              onClick={props.openPromoCode}
            >
              have promo code?
            </ButtonLink>
          }
        >
          <ButtonLink
            onClick={props.openPromoCode}
          >
            promo code applied
          </ButtonLink>
        </Show>
      </div> */}
    </div>
  );
}

export default PremiumSubscriptionOptions;
