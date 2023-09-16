/* eslint-disable react/prop-types */
import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";

const Shop = ({ filteredProducts, selectedItem, error, loading }) => {
  return (
    <main
      className={
        Object.keys(selectedItem).length === 0
          ? "flex flex-col gap-5 min-h-screen bg-gradient-to-br from-orange-100 from-10% via-white to-orange-300"
          : " min-h-screen bg-gradient-to-br from-orange-100 from-10% via-white to-orange-300"
      }
    >
      {(loading && (
        <h1 className="text-7xl text-center mt-20 mb-[2000px]">Loading...</h1>
      )) ||
        (error && <h1>Error</h1>) ||
        (filteredProducts.length === 0 &&
          Object.keys(selectedItem).length === 0 && (
            <>
              <h1>Items</h1>
            </>
          )) ||
        (filteredProducts.length > 0 &&
          Object.keys(selectedItem).length === 0 && (
            <>
              <h1>Filtered items</h1>
            </>
          )) ||
        (Object.keys(selectedItem).length > 0 && (
          <>
            <h1>Full item</h1>
          </>
        ))}
    </main>
  );
};

describe.only("Shop functionality tests", () => {
  it("shows a loading message while images are being fetched and nothing else", () => {
    render(
      <Shop
        filteredProducts={[]}
        selectedItem={{}}
        error={null}
        loading={true}
      />
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("Error")).not.toBeInTheDocument();
    expect(screen.queryByText("Items")).not.toBeInTheDocument();
    expect(screen.queryByText("Filtered items")).not.toBeInTheDocument();
    expect(screen.queryByText("Full item")).not.toBeInTheDocument();
  });

  it("shows an error message if fetching went bad and nothing else", () => {
    render(
      <Shop
        filteredProducts={[]}
        selectedItem={{}}
        error={"Whoops"}
        loading={false}
      />
    );

    expect(screen.queryByText("Error")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Items")).not.toBeInTheDocument();
    expect(screen.queryByText("Filtered items")).not.toBeInTheDocument();
    expect(screen.queryByText("Full item")).not.toBeInTheDocument();
  });

  it("displays the products if fetching is completed", () => {
    render(
      <Shop
        filteredProducts={[]}
        selectedItem={{}}
        error={null}
        loading={false}
      />
    );

    expect(screen.queryByText("Error")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Items")).toBeInTheDocument();
    expect(screen.queryByText("Filtered items")).not.toBeInTheDocument();
    expect(screen.queryByText("Full item")).not.toBeInTheDocument();
  });

  it("displays the filtered products if user typed in search bar", () => {
    render(
      <Shop
        filteredProducts={[""]}
        selectedItem={{}}
        error={null}
        loading={false}
      />
    );

    expect(screen.queryByText("Error")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Items")).not.toBeInTheDocument();
    expect(screen.queryByText("Filtered items")).toBeInTheDocument();
    expect(screen.queryByText("Full item")).not.toBeInTheDocument();
  });

  it("displays the full item if user clicked on an item and nothing else", () => {
    render(
      <Shop
        filteredProducts={[]}
        selectedItem={{ item: "whoo" }}
        error={null}
        loading={false}
      />
    );

    expect(screen.queryByText("Error")).not.toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.queryByText("Items")).not.toBeInTheDocument();
    expect(screen.queryByText("Filtered items")).not.toBeInTheDocument();
    expect(screen.queryByText("Full item")).toBeInTheDocument();
  });
});
