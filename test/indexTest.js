describe("index.js", () => {
    it("1. La variable edad es igual al numero 30", () => {
      expect(edad).to.equal(30);
    });

    it("2. Declara una variable llamada adulto y asigale el valor false", () => {
        expect(adulto).to.exist;
      });

    it("3. Si edad > 18, la variable adulto es true", () => {
        expect(adulto).to.equal(true);
    });

    it("4. La variable vidas es igual al numero 0", () => {
        expect(vidas).to.equal(0);
      });

    it("5. Declara una variable llamada perdiste y asignale el valor false", () => {
        expect(perdiste).to.exist;
    });
  
    it("6. Si vidas es menor o igual a zero, la variable perdiste es true", () => {
        expect(perdiste).to.equal(true);
      });

    it("7. La variable bottom es igual al numero 0", () => {
        expect(bottom).to.equal(0);
      });

    it("8. Declara una variable llamada colision y asignale el valor false", () => {
        expect(colision).to.exist;
    });
  
    it("9. Si bottom es igual a zero, la variable colision es true", () => {
        expect(colision).to.equal(true);
      });
  
  });