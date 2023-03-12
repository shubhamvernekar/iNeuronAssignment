// const request = require("supertest");
// const app = require("./index");


// describe("POST /profile", () => {
//   describe("given a user name & emailId", () => {

//     test("should respond with a 201 status code", async () => {
//       const response = await request(app).post("/profile").send({
//         name: "Shubham",
//         emailId: "demo@gmail.com"
//       })
//       expect(response.statusCode).toBe(201)
//     })
//     test("should specify json in the content type header", async () => {
//       const response = await request(app).post("/profile").send({
//         name: "Shubham",
//         emailId: "demo@gmail.com"
//       })
//       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//     })
//     test("response has _id", async () => {
//       const response = await request(app).post("/profile").send({
//         name: "Shubham",
//         emailId: "demo@gmail.com"
//       })
//       expect(response.body._id).toBeDefined()
//     })
//   })

//   describe("when the username and password is missing", () => {
//     test("should respond with a status code of 400", async () => {
//       const bodyData = [
//         {username: "username"},
//         {password: "password"},
//         {}
//       ]
//       for (const body of bodyData) {
//         const response = await request(app).post("/users").send(body)
//         expect(response.statusCode).toBe(400)
//       }
//     })
//   })

// })

const request = require("supertest");
const app = require("./index");


// describe("Test app.ts", () => {
//   test("Catch-all route", async () => {
//     const res = await request(app).get("/");
//     expect(res.body).toEqual({ message: "Allo! Catch-all route." });
//   });
// });

// test('should return false given external link', () => {
//   expect(app('https://google.com')).toBe(false)
// })

// test('should return true given internal link', () => {
//   expect(app('/some-page')).toBe(true)
// })



describe("POST /profile", () => {
  describe("given a user name and emailId", () => {

    test("should respond with a 201 status code", async () => {
      const response = await request(app).post("/profile").send({
        name: "shubham",
        emailId: "demo@gamil.com"
      })
      expect(response.statusCode).toBe(201)
    })
    // test("should specify json in the content type header", async () => {
    //   const response = await request(app).post("/users").send({
    //     username: "username",
    //     password: "password"
    //   })
    //   expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    // })
    // test("response has userId", async () => {
    //   const response = await request(app).post("/users").send({
    //     username: "username",
    //     password: "password"
    //   })
    //   expect(response.body.userId).toBeDefined()
    // })
  })

  // describe("when the username and password is missing", () => {
  //   test("should respond with a status code of 400", async () => {
  //     const bodyData = [
  //       {username: "username"},
  //       {password: "password"},
  //       {}
  //     ]
  //     for (const body of bodyData) {
  //       const response = await request(app).post("/users").send(body)
  //       expect(response.statusCode).toBe(400)
  //     }
  //   })
  // })

})