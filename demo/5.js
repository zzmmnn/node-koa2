const koa=require('koa');
const app=new koa();
// 原生路由
const main=(ctx)=>{
    if(ctx.request.path=='/'){
        ctx.response.type='html';
        ctx.response.body='<a href="/about">Index page</a>'
    }else{
        ctx.response.body='hello world';
    }
}
app.use(main);
app.listen(3000)