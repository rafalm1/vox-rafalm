import { expect, it } from "vitest";
import { randomHslColor } from "../../utils/randomHslColor";

it("should draw randomHslColor", () => {
  expect(randomHslColor().startsWith("hsl")).toBeTruthy();
});
