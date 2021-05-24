require("dotenv").config();

const axios = require("axios").default;
const api = "https://gorest.co.in/public-api";

const testEndpointSnapshot = (requestOptions, options = {}) =>
  // returns function, so you can pass it right into a test
  () => {
    // makes a request
    return axios.request(requestOptions).then((response) => {
      // expect the result to match a snapshot named after the url
      expect(response.data).toMatchSnapshot(
        requestOptions.method +
          " " +
          requestOptions.url +
          (options.snapShotName || "")
      );
    });
  };

const testEndpointRequest = (
  requestMethod,
  endpoint,
  request = {},
  options = {}
) => {
  return testEndpointSnapshot(
    {
      json: true,
      method: requestMethod,
      url: api + endpoint,
      data: request,
      headers: {
        Authorization: process.env.ACCESS_TOKEN,
      },
    },
    options
  );
};

// describe /users route

describe("/users", () => {
  it("should list all users", testEndpointRequest("GET", "/users"));

  it("should list Jane doe", testEndpointRequest("GET", "/users/28"));

  it(
    'should list users, who contains "varma"',
    testEndpointRequest("GET", "/users?name=varma")
  );

  it(
    "should create a new user",
    testEndpointRequest("POST", "/users", {
      // POST is always for creating a resource ( does not matter if it was duplicated )
      name: "Leila Warehouse",
      email: "leila.warehouse@testing.com",
      gender: "Female",
      status: "Active",
    })
  );

  it(
    'should update user "Jordan Dock"',
    testEndpointRequest("PATCH", "/users/2917", {
      // PATCH is always for update a resource
      name: "Jordan Dock",
      email: "jordan.dock1@testing.com",
      gender: "Male",
      status: "Active",
    })
  );

  it(
    'should update user "Jordan Dock',
    testEndpointRequest("PUT", "/users/2918", {
      // PUT is for checking if resource is exists then update , else create new resource
      name: "Meghan Forrest",
      email: "meghan.forrest@testing.com",
      gender: "Female",
      status: "Active",
    })
  );

  it(
    'should delete user "Shankar Reddy"',
    testEndpointRequest("DELETE", "/users/44")
  );
});
