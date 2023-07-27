const { describe, it } = require('test')
const app = require('../../index')

const supertast= require('supertest')
const exp = require('../../controllers/house_controller')
const about = require('../../controllers/about_controller')


describe("testing about get,post,put,delete",()=>{
    //get

    it("get testing/ waa inuu so baxaa 200 statuscode", async() =>{
      const res = await supertast(about).get("/abouts");

      expect(res.statusCode).toBe(200)
    });
    // it("post testing route,expectedc 200 statuscode",async()=>{
    //     const posts = await supertast(about).post('/abouts').send({
    //         fahfaahin_yar:"minaaa",
    //         fahfaahin:"abdiii"
    //     })
    //     about_id=posts.body.about_id
    //     expect(posts.statusCode).toBe(200)
    // })
 })
