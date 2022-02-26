import actionTypes from "../../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it is called with an empty currentToken and the getLoginAction", () => {
    test("Then it should return the user as a new state", () => {
      const currentToken = {};
      const user = {
        user: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZWR1IiwiaWQiOiI2MjE5MmIyMTE2YzM3NDA2OGRkMzhmMjAiLCJpYXQiOjE2NDU4MzA4Nzh9.lQwXbM8i49QjZAwnD8xx6_rl6P7UkuE-JLfm2O7OvVA",
      };

      const action = {
        type: actionTypes.login,
        user,
      };

      const expectedNewToken = userReducer(currentToken, action);
      expect(expectedNewToken).toEqual(user);
    });
  });

  describe("When it doesn't receives an action", () => {
    test("Then it should return the same object", () => {
      const currentToken = {};

      const expectedNewToken = userReducer(currentToken);

      expect(expectedNewToken).toEqual(currentToken);
    });
  });

  describe("When it render", () => {
    test("Then it should return equal", () => {
      const expectedNewToken = userReducer();

      expect(expectedNewToken).toEqual(expectedNewToken);
    });
  });
});
