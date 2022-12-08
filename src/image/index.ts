export type ImageSize = {
  width: number;
  height: number;
};
/**
 * 加载图片，加载完成后调用回调,支持promise
 * @param src 需要加载的图片
 * @param cb 回调
 */
export const loadImage = (src: string, cb?: (src?: string) => void) => {
  const oImg = new Image();
  const pro = new Promise((resolve) => {
    oImg.onload = () => {
      typeof cb === 'function' && cb(src);
      resolve(src);
    };
  });

  oImg.src = src;

  return pro;
};

/**
 * 获取图片的原始尺寸 支持回调和promise
 * @param src
 * @param cb
 */
export const getImageSize = (
  src: string,
  cb?: (size: ImageSize) => void,
): Promise<ImageSize> => {
  const oImg = new Image();
  if (cb) {
    oImg.addEventListener('load', function () {
      typeof cb === 'function' &&
        cb({
          width: this.naturalWidth,
          height: this.naturalHeight,
        });
    });
  }

  // 返回一个promise
  const rePro = new Promise((resolve) => {
    oImg.addEventListener('load', function () {
      resolve({
        width: this.naturalWidth,
        height: this.naturalHeight,
      });
    });
  });

  oImg.src = src;
  return rePro;
};
