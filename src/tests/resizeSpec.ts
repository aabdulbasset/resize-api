import main from '../resize'
describe("Check for correct inputs",()=>{
    it("Should return -1 on invalid filename",function(done){
        main("testt",[10,10]).then(
            (result)=>{
                expect(result).toBe(-1)
                done()
            }
        )
    })
    it("Should return -1 on invalid dimensions",(done)=>{
        main("test",[-10,10]).then(
            (result)=>{
                expect(result).toBe(-1)
                done()
            }
        )
    })
    it("Should return 0 on correct dimensions and filename",(done)=>{
        main("test",[10,10]).then(
            (result)=>{
                expect(result).toBe(0)
                done()
            }
        )
    })
})