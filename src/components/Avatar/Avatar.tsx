import { Component, createMemo, createSignal, Show } from 'solid-js';
import defaultAvatar from '../../assets/icons/default_avatar.svg';
import { useMediaContext } from '../../contexts/MediaContext';
import { hookForDev } from '../../lib/devTools';
import { getMediaUrl } from '../../lib/media';
import { MediaSize, PrimalUser } from '../../types/primal';
import NoteImage from '../NoteImage/NoteImage';
import VerificationCheck from '../VerificationCheck/VerificationCheck';

import styles from './Avatar.module.scss';
import { useAppContext } from '../../contexts/AppContext';
import { LegendCustomizationConfig } from '../../lib/premium';

const Avatar: Component<{
  src?: string | undefined,
  size?: "nano" | "micro" | "xxs" | "xss" | "xs" | "vvs" | "vs2" | "vs" | "sm" | "md" | "ml" | "mll" | "lg" | "xl" | "xxl",
  user?: PrimalUser,
  highlightBorder?: boolean,
  id?: string,
  showCheck?: boolean,
  zoomable?: boolean,
  showBorderRing?: boolean,
  legendConfig?: LegendCustomizationConfig,
}> = (props) => {

  const media = useMediaContext();
  const app = useAppContext();

  const [isCached, setIsCached] = createSignal(false);

  const selectedSize = props.size || 'sm';

  const avatarClass = {
    nano: styles.nanoAvatar,
    micro: styles.microAvatar,
    xxs: styles.xxsAvatar,
    xss: styles.xssAvatar,
    xs: styles.xsAvatar,
    vvs: styles.vvsAvatar,
    vs2: styles.vs2Avatar,
    vs: styles.vsAvatar,
    sm: styles.smallAvatar,
    md: styles.midAvatar,
    ml: styles.mlAvatar,
    mll: styles.mllAvatar,
    lg: styles.largeAvatar,
    xl: styles.extraLargeAvatar,
    xxl: styles.xxlAvatar,
  };

  const missingClass = {
    nano: styles.nanoMissing,
    micro: styles.microMissing,
    xxs: styles.xxsMissing,
    xss: styles.xssMissing,
    xs: styles.xsMissing,
    vvs: styles.vvsMissing,
    vs2: styles.vs2Missing,
    vs: styles.vsMissing,
    sm: styles.smallMissing,
    md: styles.midMissing,
    ml: styles.mlMissing,
    mll: styles.mllMissing,
    lg: styles.largeMissing,
    xl: styles.extraLargeMissing,
    xxl: styles.xxlMissing,
  };

  const imgError = (event: any) => {
    const image = event.target;

    let src: string = props.user?.picture || props.src || '';

    if (image.src === src || image.src.endsWith(src)) {
      src = defaultAvatar;
    }

    image.onerror = "";
    image.src = src;
    return true;
  }

  const legendClass = () => {
    if (props.user){
      const legendConfig = props.legendConfig || app?.legendCustomization[props.user?.pubkey];

      if (legendConfig) {
        return legendConfig.avatar_glow ? styles.legend : '';
      }
    }

    return '';

  }

  const highlightClass = () => {
    if (props.user){
      const legendConfig = props.legendConfig || app?.legendCustomization[props.user?.pubkey];

      if (legendConfig) {
        const style = legendConfig.style

        const showHighlight = style !== '' &&
          legendConfig.avatar_glow;

        const showGlow = style !== '' &&
          legendConfig.avatar_glow;

        let klass = '';

        if (showHighlight) {
          klass += `${styles.legend} ${styles[`legend_${style}`]}`;
        }

        if (showGlow) {
          klass += ` ${styles.legendGlow} ${styles[`legend_glow_${style}`]}`;
        }

        return klass;
      }
    }

    if (props.highlightBorder) {
      return styles.highlightBorder;
    }

    return '';
  };

  const imageSrc = createMemo(() => {
    let size: MediaSize = 'm';

    switch (selectedSize) {
      case 'nano':
      case 'micro':
      case 'xxs':
      case 'xss':
      case 'xs':
      case 'vvs':
      case 'vs2':
      case 'vs':
      case 'sm':
      case 'md':
      case 'ml':
      case 'mll':
      case 'lg':
        size = 's';
        break;
      default:
        size = 'm';
        break;
    };

    const src = props.user?.picture || props.src;


    if (!src) {
      return '';
    }

    const url = media?.actions.getMediaUrl(src, size, true);

    setIsCached(!!url);

    return url ?? src;
  });

  const notCachedFlag = () => {
    const dev = localStorage.getItem('devMode') === 'true';

    // @ts-ignore
    if (isCached() || !dev) {
      return '';
    }

    return styles.cacheFlag;
  }

  const imageMedia = () => {
    const src = props.user?.picture || props.src || defaultAvatar;

    return media?.actions.getMedia(src, 'o');
  };

  const imageThumb = () => {
    const src = props.user?.picture || props.src || defaultAvatar;

    return media?.actions.getMedia(src, 'm') || media?.actions.getMedia(src, 'o') || src;
  };

  return (
    <div
      id={props.id}
      class={`${avatarClass[selectedSize]} ${legendClass()} ${highlightClass()} ${props.showBorderRing ? styles.borderRing : ''}`}
      data-user={props.user?.pubkey}
    >
      <Show
        when={imageSrc()}
        fallback={
          <div class={styles.missingBack}>
            <div class={missingClass[selectedSize]}></div>
          </div>
        }
      >
        <div class={`${styles.missingBack} ${notCachedFlag()}`}>
          <Show when={props.zoomable} fallback={
            <img src={imageSrc()} alt="avatar" onerror={imgError}/>
          }>
            <NoteImage
              class={props.zoomable ? 'profile_image' : ''}
              media={imageMedia()}
              src={imageSrc()}
              altSrc={props.user?.picture || props.src}
              onError={imgError}
              mediaThumb={imageThumb()}
              ignoreRatio={true}
            />
          </Show>
        </div>
      </Show>
      <Show when={props.user && props.showCheck}>
        <div class={styles.iconBackground}>
          <VerificationCheck user={props.user} />
        </div>
      </Show>
    </div>
  )
}

export default hookForDev(Avatar);
