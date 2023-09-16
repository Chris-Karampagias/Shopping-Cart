import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";
import Item from "./Item";

describe("functionality test for Item", () => {
  it("calls onClick when user click on an item", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();

    render(<Item title={null} image={null} price={0} onClick={mockOnClick} />);
    const item = screen.getByRole("button");
    await user.click(item);
    screen.debug();
    expect(mockOnClick).toHaveBeenCalledOnce();
  });
});
