
import st from 'supertest'
import app from '../index'
describe("Endpoints check",()=>{
    it("should return 404 on wrong endpoint",function(){
        st(app)
        .get("/api")
        .expect(404)
        
    })
    it("should return 200 on correct endpoint",function(){
        st(app)
        .get("/api/images")
        .expect(200)
        
    })
})
