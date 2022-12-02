自己用的工具库

## 安装

`npm i yuxuannnn_utils`

## 使用

图片

```ts
import { getImageSize } from 'yuxuannnn_utils';
getImageSize(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp149704739.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672539028&t=68d096afa3bd661f6c31acbc55411b09',
).then((imageSize) => {
  console.log(imageSize);
});
```

事件总线

```ts
import { EventBus } from 'yuxuannnn_utils';
const eventBus = new EventBus();
```
