import * as SparkMD5 from 'spark-md5';
/**
 * 获取兆的字节数
 * @param n
 * @returns
 */
export const getMegabyte = (n: number) => {
  return n * 1024 * 1024;
};

/**
 * 将File对象转换成base64 可以进行不用上传到服务器也能进行图片预览
 * @param file
 */
export const changeFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      if (e.target?.result) {
        resolve(e.target.result as string);
      } else {
        reject('e.target.result is undefined');
      }
    };
    fileReader.readAsDataURL(file);
  });
};

/**
 * 获取文件的后缀
 */
export const getFileSuffix = (filename: string, defaultSuffix?: string) => {
  let suffix = '';
  const regExpExecArray = /\.([a-zA-Z0-9]+)$/.exec(filename);
  if (regExpExecArray) {
    suffix = regExpExecArray[1];
  }
  if (defaultSuffix && !suffix) {
    suffix = defaultSuffix;
  }
  return suffix;
};

export type TChangeBufferRet = {
  buffer: ArrayBuffer;
  /** 文件对应的hash */
  hash: string;
  /** 文件对应的后缀 例如 jpg png */
  suffix: string;
  /** 通过hash编译的文件名 */
  filename: string;
};

/**
 * 将文件进行解析生成唯一的hash
 * @param file
 * @returns
 */
export const changeBuffer = (file: File): Promise<TChangeBufferRet> => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (ev) => {
      let buffer = ev?.target?.result,
        spark = new SparkMD5.ArrayBuffer(),
        hash,
        suffix = getFileSuffix(file.name);

      if (!buffer) {
        reject('文件解析失败');
      }
      spark.append(buffer as ArrayBuffer);
      hash = spark.end();

      resolve({
        buffer: buffer as ArrayBuffer,
        hash,
        suffix,
        filename: `${hash}.${suffix}`,
      });
    };
  });
};
