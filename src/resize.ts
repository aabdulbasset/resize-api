import sharp from 'sharp'
function main(fileName:string,dimensions:number[]):void{
        sharp(`${__dirname}/../images/full/${fileName}.jpg`)
            .resize(dimensions[0],dimensions[1])
            .toFile(`${__dirname}/../images/thumb/${fileName}_${dimensions[0]}x${dimensions[1]}.jpg`)
    
}
export default main