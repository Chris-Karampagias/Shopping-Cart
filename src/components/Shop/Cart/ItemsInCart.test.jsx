import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";
import ItemsInCart from "./ItemsInCart";

const cart = [
  { title: "jacket", image: "something", price: 45, quantity: 1, id: 1 },
];

const mockHandleDelete = vi.fn();

describe("functionality tests", () => {
  it("removes product from cart if user clicks on delete button", async () => {
    const user = userEvent.setup();

    render(<ItemsInCart cart={cart} handleDelete={mockHandleDelete} />);
    const deleteButton = screen.getByRole("button");
    await user.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalledOnce();
  });
});
