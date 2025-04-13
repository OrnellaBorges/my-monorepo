import { render, screen } from "@testing-library/react";

describe("Exemple de test", () => {
  it("affiche un message", () => {
    render(<h1>Hello Ornella !</h1>);
    expect(screen.getByText(/hello ornella/i)).toBeInTheDocument();
  });
});
