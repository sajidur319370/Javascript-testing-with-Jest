/* const sum = require("./sum");
test("Add 1+2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("Add 5+2 = 7", () => {
  expect(sum(5, 2)).toBe(7);
}); */

/* test("Object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
}); */

/* test("Null is falsy", () => {
  const data = null;

  expect(data).toBeFalsy();
});
test("Zero is falsy", () => {
  const data = 0;

  expect(data).toBeFalsy();
});
 */

/* const myFunction = require("./sum");
test("Throw on invalid input", () => {
  expect(() => {
    myFunction("sajid");
  }).toThrow();
}); */

/* const fetchData = require("./sum");
test("Test Call back  data is Sajidur Rahman", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Sajidur Rahman");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
}); */

/* const fetchPromise = require("./sum");
test("Test Promise data is SAJIDUR RAHMAN", () => {
  return expect(fetchPromise()).resolves.toBe("SAJIDUR RAHMAN");
});
test("Fails with an error", () => {
  return expect(fetchPromise()).rejects.toThrow("error");
});
 */

/* const fetchPromise = require("./sum");
test("Test async function data is SAJIDUR RAHMAN", async () => {
  const data = await fetchPromise();
  expect(data).toBe("SAJIDUR RAHMAN");
}); */

/* test("Mock implementation of a Basic function", () => {
  const mockCallback = jest.fn((x) => x + 42);
  expect(mockCallback(12)).toBe(54);
  expect(mockCallback).toHaveBeenCalledWith(12);
});
 */

test("Spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play");
  video.play();
  expect(spy).toHaveBeenCalledWith();
  spy.mockRestore();
});
