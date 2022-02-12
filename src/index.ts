import express from 'express'
import fs from 'fs'
import resize from './resize'
import path from 'path'
let port = 3000
const app = express()
app.listen(port,():void=>{
    console.log(`Server working on ${port}`)
})
app.use(express.static(path.resolve("../images/thumb")));
app.get("/api/images",(req ,res):void=>{
    
    let filename = req.query.filename as string
    let width = Number(req.query.width)
    let height = Number(req.query.height)
    let isValid = sanitize(filename ,width,height)
    if(isValid == -1){
        res.send("Invalid request").status(400)
        return
    }
    fs.stat(`../images/full/${filename}.jpg`,function(err){
        if(err != null){
            res.send("Image does not exist").status(400)

        }else{
            fs.stat(`../images/thumb/${filename}_${width}x${height}.jpg`,function(err,stat){
                if(err==null){
                    console.log("sending cache")
                    
                }else{
                    console.log("Resizing")
                    resize(filename,[width,height])
                }
                setTimeout(()=>{
                    res.send(`<img style="margin:auto;display:block;position:relative;top:50%;transform:translate(0,-50%)" src=${req.protocol + '://' + req.get('host')}/${filename}_${width}x${height}.jpg></img>`)
                },200)
            })
        }
    })


})

function sanitize(filename:string,width:number,height:number){
    if(filename == undefined){
        return -1
    }
    if(width == 0 || isNaN(width) || height == 0 || isNaN(height)){
        return -1
    }
    return 0
}
export default app