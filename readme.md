自己用的工具库

## 安装

`npm i yuxuannnn_utils`

## 使用

### 图片

```ts
import { getImageSize } from 'yuxuannnn_utils';
getImageSize(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp149704739.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672539028&t=68d096afa3bd661f6c31acbc55411b09',
).then((imageSize) => {
  console.log(imageSize);
});
```

```ts
import { loadImage } from 'yuxuannnn_utils';

loadImage(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2022%252F0902%252F15034aa2j00rhjnth000yc000hs00qog.jpg%26thumbnail%3D660x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672664938&t=53b76b53f947c93d292001b9a0a3ebaf',
  () => {
    console.log('图片加载完成');
  },
);
```

### 事件总线

```ts
import { EventBus } from 'yuxuannnn_utils';
const eventBus = new EventBus();
```

### 时间

```ts
import { formatDate } from 'yuxuannnn_utils';
formatDate(Date.now(), 'YYYY MM DD');
```

`format`参考[doc](https://dayjs.fenxianglu.cn/category/display.html)

### extend

```ts
import { inhert } from 'yuxuannnn_utils';
function Parent() {
  this.c = 2;
}
Parent.prototype.a = 1;
function Children() {
  Parent.call(this);
  this.b = 1;
}
inhert(Children, Parent);
const child = new Children();
console.log(child.a, child.b, child.c, Children.prototype);
```

### 数学

边界取值

```ts
import { boundaryMin, boundary, boundaryMax } from 'yuxuannnn_utils';
const a = boundaryMin(-1, 1); // 1
const b = boundary(101, 1, 100); // 100
const c = boundaryMax(101, 100); // 100
```

```ts
import { getRandomNumber, getRandomString } from 'yuxuannnn_utils';

console.log(getRandomNumber(1, 100)); // 生成一个随机整数，包括min不包括max
console.log(getRandomString(8)); // 生成一个随机的字符串
```

`findMaxInArray`

`findMinInArray`

### 对象

辨别对象和数组类型

```ts
import { getObjOrArrayType } from 'yuxuannnn_utils';
console.log(getObjOrArrayType([]), getObjOrArrayType({})); // array object
```

深度克隆

```ts
import { deepClone } from 'yuxuannnn_utils';

const a = 1;
console.log(deepClone(a));

const obj = { a: { b: { c: 1 } } };
const cloneObj = deepClone(obj);
cloneObj.a = 27;
console.log(obj, cloneObj);
```

### window

```ts
import { getScrollOffset, getViewportOffset } from 'yuxuannnn_utils';

onMounted(() => {
  document.addEventListener('scroll', () => {
    console.log(getScrollOffset()); // 获取滚动条信息
    console.log(getViewportOffset()); // 获取视口尺寸
  });
});
```

### file

`getMegabyte`获取兆的字节数

### util

`delay`延迟函数一般用于本地开发时模拟服务器延迟
