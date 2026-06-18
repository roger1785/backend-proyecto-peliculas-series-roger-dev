import { expect } from "chai";
import { test } from "mocha";
import request from "supertest";
import app from "../app.js";

describe("CRUD Movies", function () {
  this.Timeout(5000);
before()

  test("debería traer un array de peliculas", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.status).to.equal(200);
    expect(response.body).to.be("array");
  });
});
