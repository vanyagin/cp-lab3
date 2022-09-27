import {Cache} from "../src/cache";
const cache = new Cache()

test('stat test', () => {
    const c = new Cache();
    c.add("c", "[c, 100]", 100)
    expect(c.stat("c")).toBe("key: c; value: [c, 100]; access: 100");
});

test('statistic test', () => {
    const c = new Cache();
    c.add("c", "[c, 100]", 100)
    c.add("c2", "[c2, 100]", 100)
    expect(c.statistic()[0]).toBe("key: c; value: [c, 100]; access: 100");
    expect(c.statistic()[1]).toBe("key: c2; value: [c2, 100]; access: 100");
});

test('get test', () => {
    const c = new Cache();
    c.add("c", "[c, 100]", 100)
    c.add("c2", "[c2, 100]", 100)
    c.add("c0", "null", 1)
    c.add("n", null, 1337)
    c.add("n0")
    expect(c.get("c")[0]).toBe("[c, 100]");
    expect(c.get("c")[1]).toBe(98);
    expect(c.get("c0")[0]).toBe("null");
    expect(c.get("c0")).toBe(null);
    expect(c.get("n")).toBe(null);
    expect(c.get("n0")).toBe(null);
});

