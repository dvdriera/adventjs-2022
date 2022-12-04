import { wrapping, gifts } from ".";

test("should receipt the expected output", () => {
  const expectedWrapped = [
    "******\n*book*\n******",
    "******\n*game*\n******",
    "*******\n*socks*\n*******",
  ];
  expect(wrapping(gifts)).toEqual(expectedWrapped);
});
