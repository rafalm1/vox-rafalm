import { expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import App from "../../App.vue";
import { mount } from "@vue/test-utils";
import { hexRegex } from "../../utils/hexRegex";

describe("App Component", () => {
  it("should add and remove Tile component", async () => {
    render(App);
    const tileBtn = screen.getByTestId("addTileBtn");
    await fireEvent.click(tileBtn);
    screen.getByTestId("tile-0");

    const removeBtn = screen.getByTestId("remove-0");
    await fireEvent.click(removeBtn);
    const tile = screen.queryByTestId("tile-0");
    expect(tile).toBeNull();
  });

  it("should check if hexRegex is matching input", () => {
    const validInput = "#333";
    const wrapper = mount(App);
    const input = wrapper.find("input");
    input.setValue(validInput);
    expect(input.element.value).toMatch(hexRegex);
  });

  it("should check if hexRegex is not matching input", () => {
    const invalidInput = "#3334445";
    const wrapper = mount(App);
    const input = wrapper.find("input");
    input.setValue(invalidInput);
    expect(input.element.value).not.toMatch(hexRegex);
  });
});
