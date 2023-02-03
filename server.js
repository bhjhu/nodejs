const http =require("http")

const server =http.createServer((req,res)=>{
 if(req.url=='/home'){
    res.write("welcome from home")
 }
 else if (req.url=='/contact'){
    res.write("weclome to contact")
 }
 else if (req.url=='/about'){
    res.write("welcome from about")
 }
    
 else{ 
    res.statusCode=404
    res.write("not found")
    
 }
    

 res.end()

})
server.listen(2000,()=>{console.log("aisha saad ")})
