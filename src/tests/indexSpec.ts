
import st from 'supertest'
import app from '../index'
describe("Endpoints check",()=>{
    it("should return 404 on wrong endpoint",function():void{
        st(app)
        .get("/api")
        .expect(404)
        
    })
    it("should return 400 on no or wrong query",function():void{
        st(app)
        .get("/api/images")
        .expect(400)
        
    })
})

describe("Check for correct integers",()=>{
    it("should return 400 on 0",function():void{
        st(app)
        .get("/api/images?filename=test&width=0&height=100")
        .expect(400)
        
    })
    it("should return 400 on negative",function():void{
        st(app)
        .get("/api/images?filename=test&width=-10&height=100")
        .expect(400)
        
    })
    it("should return 400 on non numbers",function():void{
        st(app)
        .get("/api/images?filename=test&width=NaN&height=100")
        .expect(400)
        
    })
    it("should return 400 on fractions",function():void{
        st(app)
        .get("/api/images?filename=test&width=10.1&height=100")
        .expect(400)
        
    })
    it("should return 200 on correct integers",function():void{
        st(app)
        .get("/api/images?filename=test&width=100&height=100")
        .expect(200)
        
    })
})

describe("Check for correct files",()=>{
    it("Should return 400 on wrong filename",function():void{
        st(app)
        .get("/api/images?filename=nothing&width=100&height=100")
        .expect(400)
    })
    it("Should return 400 on filename with special characters",function():void{
        st(app)
        .get("/api/images?filename=nothi*ng&width=100&height=100")
        .expect(400)
    })
})