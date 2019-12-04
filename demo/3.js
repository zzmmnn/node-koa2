const koa=require('koa');
const app=new koa();
// 响应类型的判断
const main=(ctx)=>{
    if(ctx.request.accepts('xml')){
        ctx.response.type='xml';
        ctx.response.body='<data>hello world</data>'
    }else if(ctx.request.accepts('json')){
        ctx.response.type='json';
        ctx.response.body={data:'hello world'};
    }else if(ctx.request.accepts('html')){
        ctx.response.type='html';
        ctx.response.body='<p>hello word</p>'
    }else{
        ctx.response.type='text';
        ctx.response.body='hello world'
    }
}
app.use(main);
app.listen(3000);