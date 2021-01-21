// __tests__/user-test.js
jest.mock("../request");

import * as user from "../users";

// async/await pode ser usado.
it("funciona com async/await", async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toEqual("Mark");
});

// async/await também pode ser usado com `.resolves`.
it("funciona com async/await e resolves", async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual("Paul");
});
