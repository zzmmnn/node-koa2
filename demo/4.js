const koa=require('koa');
const app=new koa();
const fs=require('fs');
// 使用fs进行读取html文档
const main=(ctx)=>{
    ctx.response.type='html';
    ctx.response.body=fs.createReadStream('./demo/hello.html')
};
app.use(main);
app.listen(3000)