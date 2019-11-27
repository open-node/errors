const Errors = require("../../");

describe("Errors", () => {
  it("case1", () => {
    const defines = [
      ["key1", "message1"],
      ["key2", "message2 %d, %s"],
      ["key3", "message3 %s"]
    ];

    const errors = Errors(defines);
    expect(Object.keys(errors).length).toBe(3);
    expect(errors.key1().message).toBe("message1");
    expect(errors.key2().message).toBe("message2 %d, %s");
    expect(errors.key3().message).toBe("message3 %s");

    expect(errors.key2("20", "good").message).toBe("message2 20, good");

    // world string be appened at the tail
    expect(errors.key3("hello", "world").message).toBe("message3 hello world");
  });
});
