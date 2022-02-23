import daysFromX from "./days-from-x";

test("2022-2-2, -7 return 2022-01-26", () => {
  const date = new Date("2022-2-2");
  expect(daysFromX(date, -7)).toBe("2022-01-26");
});

test("2022-1-1, -7 return 2021-12-25", () => {
  const date = new Date("2022-1-1");
  expect(daysFromX(date, -7)).toBe("2021-12-25");
});

test("2022-1-1, 10 returns future date 2022-01-11", () => {
  const date = new Date("2022-1-1");
  expect(daysFromX(date, 10)).toBe("2022-01-11");
});
