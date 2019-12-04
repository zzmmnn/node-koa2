// 使用路由插件koa-route
const koa=require('koa');
const app=new koa();
const route=require('koa-route');

const about=(ctx)=>{
    ctx.response.type='html';
    ctx.response.body='<a href="/"> about </a>'
}
const main=(ctx)=>{
    ctx.response.body='hello world';
}
app.use(route.get('/about',about));
app.use(route.get('/',main));
app.listen(3000)