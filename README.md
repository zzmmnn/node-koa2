## 说明
本文介绍了koa模块使用的范例

# require('koa')
### ctx 
#### ctx.response
ctx.response.body='hello world'  响应浏览器内容
ctx.response.type='xml'           响应浏览器类型
#### ctx.request
ctx.request.accepts('xml')  请求接收类型