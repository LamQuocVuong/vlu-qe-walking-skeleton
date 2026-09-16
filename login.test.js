const login = require("./login");

test("Login successfully with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Login failed with incorrect password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("Login failed with incorrect username", () => {
    expect(login("user", "123")).toBe(false);
});
