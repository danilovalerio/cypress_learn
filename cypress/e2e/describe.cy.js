it.only("Meu teste externo", () => {});

describe("Grupo de testes...", () => {
  describe("Grupo de testes mais específicos...", () => {
    it.skip("Um teste específico...", () => {});
  });

  describe("Grupo de testes mais específicos...", () => {
    it("Segundo teste específico...", () => {});
  });

  it.only("Meu útlimo teste interno", () => {});
});
