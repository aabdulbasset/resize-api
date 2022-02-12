import express from 'express'
import fs from 'fs'
import resize from './resize'
import path from 'path'
let port = 3000
const app = express()
//start the app
app.listen(port,():void=>{
    console.log(`Server working on ${port}`)
})
//set static files to serve the image
app.use(express.static(__dirname + "/../images/thumb"));

app.get("/api/images",(req:express.Request ,res:express.Response):void=>{
    //Number returns NAN if not a number
    let filename = req.query.filename as string
    let width = Number(req.query.width)
    let height = Number(req.query.height)
    //data is formatted before being sent to "sanitize"
    let isValid = sanitize(filename ,width,height)
    if(isValid == -1){
        res.status(400).send("Invalid request")
        return
    }
    //check if the image exists in full size
    fs.stat(`${__dirname}/../images/full/${filename}.jpg`,function(err:NodeJS.ErrnoException | null):void{
        if(err != null){
            res.status(400).send("Image does not exist")

        }else{
            //check if it is already processed
            fs.stat(`${__dirname}/../images/thumb/${filename}_${width}x${height}.jpg`,function(err:NodeJS.ErrnoException | null):void{
                if(err==null){
                    void(0)
                    
                }else{
                    
                    resize(filename,[width,height])
                }
                setTimeout(()=>{
                    res.send(`<img style="margin:auto;display:block;position:relative;top:50%;transform:translate(0,-50%)" src=${req.protocol + '://' + req.get('host')}/${filename}_${width}x${height}.jpg></img>`)
                },200)
            })
        }
    })


})

function sanitize(filename:string,width:number,height:number):number{

    if(filename == undefined || filename == ""){
        return -1
    }
    if(filename.search('[^a-zA-Z0-9]')>=0){
        return -1
    }
    if(width <= 0 || isNaN(width) || height <= 0 || isNaN(height) || width > 2000 || height > 2000 || !Number.isInteger(width) || !Number.isInteger(height) ){
        return -1
    }
    return 0
}
export default app