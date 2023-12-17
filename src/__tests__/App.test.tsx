import App from "src/App.tsx";
import { render, screen, getByText, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("Add product to cart when I click added product", async () => {
    const user = userEvent.setup();
    render(<App />);
    const cart = screen.getByRole("button", { name: "cart" });
    const plus = screen.getByRole("button", { name: "+" });
    const addToCart = screen.getByRole("button", { name: "Add to cart" });

    await user.click(cart);
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();

    expect(screen.getByText(0)).toBeInTheDocument();
    await user.click(plus);
    expect(screen.getByText(1)).toBeInTheDocument();

    await user.click(addToCart);
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();

    const conteinerNav = document.querySelector(".wrapp-menu") as HTMLElement;
    expect(getByText(conteinerNav, "1")).toBeInTheDocument();
    expect(
      getByText(conteinerNav, /Fall Limited Edition Sneakers/i)
    ).toBeInTheDocument();
  });

  it("Add product to cart when I click added product", async () => {
    const user = userEvent.setup();
    render(<App />);
    const cart = screen.getByRole("button", { name: "cart" });
    const plus = screen.getByRole("button", { name: "+" });
    const addToCart = screen.getByRole("button", { name: "Add to cart" });

    await user.click(cart);
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();

    expect(screen.getByText(0)).toBeInTheDocument();
    await user.click(plus);
    expect(screen.getByText(1)).toBeInTheDocument();

    await user.click(addToCart);
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();

    const conteinerNav = document.querySelector(".wrapp-menu") as HTMLElement;

    expect(getByText(conteinerNav, "1")).toBeInTheDocument();
    expect(
      getByText(conteinerNav, /Fall Limited Edition Sneakers/i)
    ).toBeInTheDocument();

    const trash = getByRole(conteinerNav, "button", { name: "trash" });
    await user.click(trash);

    expect(getByText(conteinerNav, /Your cart is empty/i)).toBeInTheDocument();
  });
});
