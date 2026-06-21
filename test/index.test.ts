import { expect, it } from "vitest";
import { foo } from "../src/index.js";

it("should work", () => {
  expect(foo).toBe("bar");
});
