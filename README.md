# csv

> 利用javaScript 在客户端把数据转换成csv格式并导出到本地
>
> 非本人写的js，只是一个简单教程，还请多多指教。

demo地址：[CSV demo](https://liangxiaoxin.github.io/csv/)

#### csv格式

第一行为头部，其他为数据部分，数据与数据之间用逗号隔开，换行为一组数据

```
"id","number","string","smile"
"11","111","ssd","嘿嘿"
"22","222","kk","哈哈"
"33","333","sf","呵呵"
```

#### 步骤

##### 第一步：把数据转义成csv格式

我使用了其他人写的js来生成csv格式，具体使用方法可参考： [https://github.com/knrz/CSV.js](https://github.com/knrz/CSV.js)

如觉得太笨重，可自行生成。

##### 第二步：触发客户端生成csv文件并导出到本地

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
