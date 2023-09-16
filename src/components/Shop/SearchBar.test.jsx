import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";
import { useState } from "react";

const MockSearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <form
      className="self-center mt-7 shadow-xl rounded-2xl"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="opacity-0 absolute left-[-1000px]" htmlFor="search">
        Search for items
      </label>
      <input
        className="text-4xl rounded-2xl p-2 focus:border-orange-500 border-[1px] outline-none cursor-pointer placeholder:text-gray-300"
        type="text"
        value={value}
        placeholder="Search for anything..."
        id="search"
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

describe("functionality tests for SearchBar", () => {
  it("displays the value the user typed in the search bar", async () => {
    const user = userEvent.setup();

    render(<MockSearchBar />);
    const searchBar = screen.getByPlaceholderText("Search for anything...");

    await user.type(searchBar, "men");

    screen.debug();
    expect(searchBar).toHaveValue("men");
  });
});
