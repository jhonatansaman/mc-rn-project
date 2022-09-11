import { toReturnCardID } from "../card";

describe("Utils", () => {
  describe("Card", () => {
    it("function toReturnCardID should return card id", () => {
      const cardID = toReturnCardID("Chicken Hamburguer", 2);

      expect(cardID).toBe("chicken_hamburguer_2");
    });
  });
});
