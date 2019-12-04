//静态资源的加载
const koa=require('koa');
const app=new koa();
const serve=require('koa-static');
const path=require('path');
const main=serve(path.join(__dirname));
//console.log(__dirname);
// /Users/zmn/test/testNode/node-koa2/demo
// http://localhost:3000/hello.html 可以访问
app.use(main);
app.listen(3000);