import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const routeSpy = vi.fn();

vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="browser-router">{children}</div>
  ),

  Routes: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="routes">{children}</div>
  ),

  Route: (props: any) => {
    routeSpy(props);
    return <div data-testid="route" />;
  }
}));

vi.mock("../interfaces/components/MoldeSystem", () => ({
  default: () => <div data-testid="molde-system" />
}));

vi.mock("../application/routes", () => ({
  pages: [
    {
      path: "/teste",
      element: <div data-testid="page-teste" />
    },
    {
      path: "/exemplo",
      element: <div data-testid="page-exemplo" />
    }
  ]
}));

import App from "../App";

describe("App (Routing composition)", () => {
  it("renderiza o router, o layout e registra todas as rotas", () => {
    render(<App />);

    expect(screen.getByTestId("browser-router")).toBeInTheDocument();
    expect(screen.getByTestId("routes")).toBeInTheDocument();

    expect(screen.getByTestId("molde-system")).toBeInTheDocument();

    expect(routeSpy).toHaveBeenCalledTimes(3);

    expect(routeSpy).toHaveBeenCalledWith(
      expect.objectContaining({ path: "/teste" })
    );

    expect(routeSpy).toHaveBeenCalledWith(
      expect.objectContaining({ path: "/exemplo" })
    );
  });
});
