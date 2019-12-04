## 说明
本文介绍了koa模块使用的范例

# require('koa')
### ctx 
#### ctx.response
ctx.response.body='hello world'  响应浏览器内容
ctx.response.type='xml'           响应浏览器类型
#### ctx.request
ctx.request.accepts('xml')  请求接收类型
ctx.request.path=='/'
ctx.request.method
ctx.request.url
# require('fs')
## fs.createReadStream('./demo/hello.html') 读取html的文档ß

# require('koa-route')
route.get('/',/about); 路由跳转

# require('koa-static') 静态资源的加载
http://localhost:3000/hello.html 可以访问




