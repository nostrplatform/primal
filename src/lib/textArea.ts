  // Taken and slightly adapted from https://github.com/component/textarea-caret-position

  // We'll copy the properties below into the mirror div.
  // Note that some browsers, such as Firefox, do not concatenate properties
  // into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
  // so we have to list every single property explicitly.
  const properties = [
    'direction',  // RTL support
    'boxSizing',
    'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
    'height',
    'overflowX',
    'overflowY',  // copy the scrollbar for IE

    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',

    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',

    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',

    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',  // might not make a difference, but better be safe

    'letterSpacing',
    'wordSpacing',

    'tabSize',
    'MozTabSize'

  ];

  var isBrowser = (typeof window !== 'undefined');
  // @ts-ignore
  var isFirefox = (isBrowser && window.mozInnerScreenX != null);

  export const getCaretCoordinates = (element: HTMLTextAreaElement | HTMLInputElement, position: number) => {
    if (!isBrowser) {
      throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }

    // The mirror div will replicate the textarea's style
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);

    var style = div.style;
    // @ts-ignore
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9
    var isInput = element.nodeName === 'INPUT';

    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput)
      style.wordWrap = 'break-word';  // only for textarea-s

    // Position off-screen
    style.position = 'absolute';  // required to return coordinates properly

    // Transfer the element's properties to the div
    properties.forEach(function (prop) {
      if (isInput && prop === 'lineHeight') {
        // Special case for <input>s because text is rendered centered and line height may be != height
        if (computed.boxSizing === "border-box") {
          var height = parseInt(computed.height);
          var outerHeight =
            parseInt(computed.paddingTop) +
            parseInt(computed.paddingBottom) +
            parseInt(computed.borderTopWidth) +
            parseInt(computed.borderBottomWidth);
          var targetHeight = outerHeight + parseInt(computed.lineHeight);
          if (height > targetHeight) {
            style.lineHeight = height - outerHeight + "px";
          } else if (height === targetHeight) {
            style.lineHeight = computed.lineHeight;
          } else {
            style.lineHeight = '0';
          }
        } else {
          style.lineHeight = computed.height;
        }
      } else {
        // @ts-ignore
        style[prop] = computed[prop];
      }
    });

    if (isFirefox) {
      // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
      if (element.scrollHeight > parseInt(computed.height))
        style.overflowY = 'scroll';
    } else {
      style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }

    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput)
      div.textContent = div.textContent.replace(/\s/g, '\u00a0');

    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
    div.appendChild(span);

    var coordinates = {
      top: span.offsetTop + parseInt(computed['borderTopWidth']),
      left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
      height: parseInt(computed['lineHeight'])
    };

    document.body.removeChild(div);

    return coordinates;
  }
