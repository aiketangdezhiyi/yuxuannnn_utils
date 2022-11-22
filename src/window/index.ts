/**
 * 获取滚动条状态
 * scroll 窗口滚动条
 * W3C
 * window.pageXOffset
 * IE
 * document.body.scrollLeft
 * document.documentElement.scrollTop 两个仅允许一个有值
 */
export function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

/**
 * 获取视口尺寸
 */
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    if (document.compatMode === 'BackCompat') {
      //怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}
