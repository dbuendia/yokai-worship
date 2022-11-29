import { render, screen } from "@testing-library/react";
import Filters, { filterPhrase } from "./Filters.jsx";

describe("Filters Phrase Tests", () => {
  test("Component should render a filter phrase on the screen", () => {
    const result = filterPhrase({
      type: "todos",
      habitat: "todos",
      appearence: "todos",
    });

    expect(result).toBeInTheDocument;
  });

  test("Phrase should be correct for the value: todos, todos, todos", () => {
    const result = filterPhrase({
      type: "todos",
      habitat: "todos",
      appearence: "todos",
    });
    expect(result).toBe("Mostrando todos los Yokai.");
  });

  test("Phrase should be correct for different valid values: type, habitat, appearence", () => {
    const result = filterPhrase({
      type: "Yokai",
      habitat: "Montañoso",
      appearence: "Monstruo",
    });
    expect(result).toBe(
      "Mostrando Yokai de apariencia: Monstruo y habitat Montañoso."
    );
  });

  test("Phrase should be correct for mix of all and specific values:", () => {
    const result = filterPhrase({
      type: "Henge-Yokai",
      habitat: "todos",
      appearence: "Humana",
    });
    expect(result).toBe(
      "Mostrando Henge-Yokai de apariencia: Humana y todos los habitats."
    );
  });
});
