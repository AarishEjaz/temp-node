const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to home ")

    }
    if(req.url === '/about'){
        res.end("hello this is about")
    }
    res.end(`gaand mara lo apni`)
     

})

server.listen(5000)