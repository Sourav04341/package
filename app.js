const server=require('express')
const app=server()
const path=require('path')
const pathfinder=path.join(__dirname,'public')

app.set('view engine','ejs')

app.use(server.static(path.join(__dirname,'public')))

app.get("/home",(req,res)=>{
    res.render('new1')
}).listen(6001)



