import { loginAction } from "./actionCreator";

describe("Given a loginAction function", () => {
  describe("When it receives user", () => {
    test("Then it should return an action type sign-in", () => {
      const user = { username: "eya", password: "1234" };
      const expectedAction = {
        type: "sign-in",
        user,
      };

      const action = loginAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
