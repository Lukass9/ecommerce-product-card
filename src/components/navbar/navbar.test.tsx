import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "./Navbar.tsx";

describe("Navbar", () => {
  it("renders list items for navigation", () => {
    render(<Navbar />);
    const navItems = ["Collections", "Men", "Women", "About", "Contact"];

    const listItems = screen.getAllByRole("listitem");
    listItems.map((item, i) => {
      expect(item.textContent).toBe(navItems[i]);
    });
    expect(listItems).toHaveLength(navItems.length);
    expect(screen.getByText(/collections/i)).toBeInTheDocument();
  });

  it("renders SVG element name cart for navigation", () => {
    render(<Navbar />);
    // screen.debug();
    const cart = screen.getByRole("button", { name: "cart" });
    expect(cart).toBeInTheDocument();
  });

  it("renders cart wrap component when I click cart button", () => {
    render(<Navbar />);
    const cart = screen.getByRole("button", { name: "cart" });
    fireEvent.click(cart);
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    // screen.debug();
  });
});
