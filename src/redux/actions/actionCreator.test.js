import { loginAction } from "./actionCreator";

describe("Given a loginAction function", () => {
  describe("When it receives token", () => {
    test("Then it should return an action type sign-in", () => {
      const token = { username: "eya", password: "1234" };
      const expectedAction = {
        type: "sign-in",
        token,
      };

      const action = loginAction(token);

      expect(action).toEqual(expectedAction);
    });
  });
});
