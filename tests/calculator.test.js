const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
} = require("../src/calculator");

describe("calculator", () => {
  describe("add", () => {
    test("suma dos enteros positivos", () => {
      expect(add(10, 5)).toBe(15);
    });

    test("suma números negativos", () => {
      expect(add(-4, -6)).toBe(-10);
    });

    test("lanza TypeError con tipos inválidos", () => {
      expect(() => add("1", 2)).toThrow(TypeError);
      expect(() => add("1", 2)).toThrow("Los argumentos deben ser números");
    });
  });

  describe("subtract", () => {
    test("resta dos números", () => {
      expect(subtract(9, 3)).toBe(6);
    });

    test("resta con resultado negativo", () => {
      expect(subtract(3, 9)).toBe(-6);
    });

    test("lanza TypeError con tipos inválidos", () => {
      expect(() => subtract(1, null)).toThrow(TypeError);
      expect(() => subtract(1, null)).toThrow("Los argumentos deben ser números");
    });
  });

  describe("multiply", () => {
    test("multiplica dos números", () => {
      expect(multiply(4, 7)).toBe(28);
    });

    test("multiplica por cero", () => {
      expect(multiply(15, 0)).toBe(0);
    });

    test("lanza TypeError con tipos inválidos", () => {
      expect(() => multiply(undefined, 2)).toThrow(TypeError);
      expect(() => multiply(undefined, 2)).toThrow("Los argumentos deben ser números");
    });
  });

  describe("divide", () => {
    test("divide dos números", () => {
      expect(divide(20, 4)).toBe(5);
    });

    test("divide números con decimal", () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test("lanza Error al dividir por cero", () => {
      expect(() => divide(10, 0)).toThrow(Error);
      expect(() => divide(10, 0)).toThrow("No se puede dividir entre cero");
    });

    test("lanza TypeError con tipos inválidos", () => {
      expect(() => divide("10", 2)).toThrow(TypeError);
      expect(() => divide("10", 2)).toThrow("Los argumentos deben ser números");
    });
  });

  describe("modulo", () => {
    test("calcula residuo correctamente", () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test("residuo de número negativo", () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test("lanza Error con divisor cero", () => {
      expect(() => modulo(10, 0)).toThrow(Error);
      expect(() => modulo(10, 0)).toThrow("No se puede calcular módulo con divisor cero");
    });

    test("lanza TypeError con tipos inválidos", () => {
      expect(() => modulo(10, "3")).toThrow(TypeError);
      expect(() => modulo(10, "3")).toThrow("Los argumentos deben ser números");
    });
  });

  describe("power", () => {
    test("calcula potencia positiva", () => {
      expect(power(2, 8)).toBe(256);
    });

    test("potencia con exponente cero", () => {
      expect(power(99, 0)).toBe(1);
    });

    test("potencia con exponente negativo", () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test("lanza TypeError con tipos inválidos", () => {
      expect(() => power(2, "3")).toThrow(TypeError);
      expect(() => power(2, "3")).toThrow("Los argumentos deben ser números");
    });
  });
});
