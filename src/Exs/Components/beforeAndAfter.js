/* eslint-disable no-undef */
//Se você tem algum trabalho que você precisa fazer repetidamente por muitos testes, você pode usar beforeEach e afterEach.

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

//Caso vc precise de um before que seja usado em TODOS os testes, Jest fornece beforeAll e afterAll para lidar com essa situação.
//To run only one test with Jest, temporarily change that test command to a test.only:

