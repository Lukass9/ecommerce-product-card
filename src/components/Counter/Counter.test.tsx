import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  const handleUpdateCount = vi.fn();

  it("increments count when plus button is clicked", () => {
    render(<Counter handleUpdateCount={handleUpdateCount} />);
    const plus = screen.getByRole("button", { name: "+" });
    expect(screen.getByText(0)).toBeInTheDocument();
    fireEvent.click(plus);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it("decrement count when minus button is clicked", () => {
    render(<Counter handleUpdateCount={handleUpdateCount} />);
    const plus = screen.getByRole("button", { name: "+" });
    const minus = screen.getByRole("button", { name: "-" });

    expect(screen.getByText(0)).toBeInTheDocument();
    fireEvent.click(plus);
    fireEvent.click(plus);
    expect(screen.getByText(2)).toBeInTheDocument();
    fireEvent.click(minus);
    expect(screen.getByText(1)).toBeInTheDocument();
  });
  it("decrement count when minus button is clicked", () => {
    render(<Counter handleUpdateCount={handleUpdateCount} />);
    const plus = screen.getByRole("button", { name: "+" });
    const minus = screen.getByRole("button", { name: "-" });

    expect(screen.getByText(0)).toBeInTheDocument();
    fireEvent.click(plus);
    fireEvent.click(plus);
    expect(screen.getByText(2)).toBeInTheDocument();
    fireEvent.click(minus);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it("does not decrement count when minus button is clicked if count equal 0", () => {
    render(<Counter handleUpdateCount={handleUpdateCount} />);
    const minus = screen.getByRole("button", { name: "-" });

    expect(screen.getByText(0)).toBeInTheDocument();
    fireEvent.click(minus);
    fireEvent.click(minus);
    expect(screen.getByText(0)).toBeInTheDocument();
  });
});
