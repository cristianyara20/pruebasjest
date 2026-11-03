const { suma, resta } = require("./funciones");
describe("Pruebas unitarias de funciones matemáticas", () => {
    test("suma 6 + 3 debe ser 9", () => {
        expect(suma(6, 3)).toBe(9);
    });
    test("resta 6 - 3 debe ser 3", () => {
        expect(resta(6, 3)).toBe(3);
    });
});