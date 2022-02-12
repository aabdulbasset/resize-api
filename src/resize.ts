import sharp from 'sharp'
function main(fileName:string,dimensions:number[]):void{
        sharp(`../images/full/${fileName}.jpg`)
            .resize(dimensions[0],dimensions[1])
            .toFile(`../images/thumb/${fileName}_${dimensions[0]}x${dimensions[1]}.jpg`)
    
}
export default main