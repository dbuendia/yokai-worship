import { render, screen } from "@testing-library/react";
import Filters, { filterPhrase } from "./Filters.jsx";
import yokaiData from "../dataset/yokaiData";

describe("Filters Phrase Tests", () => {
  test("Phrase should be correct for the value: todos, todos, todos", () => {
    const expected = "Mostrando todos los Yokai.";
    const result = filterPhrase({
      type: "todos",
      habitat: "todos",
      appearence: "todos",
    });
    expect(result).toBe(expected);
  });

  test("Phrase should be correct for different valid values: type, habitat, appearence", () => {
    let yokaiToTest = yokaiData[0];
    const expected =
      "Mostrando Yokai de apariencia: Humana y habitat Acuático.";
    const result = filterPhrase({
      type: yokaiToTest.type,
      habitat: yokaiToTest.habitat,
      appearence: yokaiToTest.appearence,
    });
    expect(result).toBe(expected);
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
