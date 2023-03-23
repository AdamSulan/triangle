//első teszt
describe("A calcTriangleArea() függvény tesztje", () => {
    it('Input 30,35, elvárt 525',() => {
        let actual = calcTriangleArea(30,35);
        expect(actual).toBe(525);
    });
    it('Input 40,45, elvárt 900',() => {
        let actual = calcTriangleArea(40,45);
        expect(actual).toBe(900);
    });
    it('Input 1,45, elvárt 22,5',() => {
        let actual = calcTriangleArea(1,45);
        expect(actual).toBe(22.5);
    });
    it('Ha az alap 0 kivételt várunk',() => {
        expect(() => calcTriangleArea(0,45)).toThrow();
    });
    it('Ha az alap 0 kivételt kapunk',() => {
        expect(() => calcTriangleArea(0,45)).toThrow(new Error('Hiba! A paraméter nem megfelelő.'));
    });
    it('Ha a magasság 0 kivételt kapunk',() => {
        expect(() => calcTriangleArea(30,0)).toThrow(new Error('Hiba! A paraméter nem megfelelő.'));
    });
})
describe('A checkInput tesztjei',()=>{
    it('Szám az input?',()=>{
        let actual=checkInput('22');
        expect(actual).toBe(true);
    });
    it('Ha nem szám a bemenet, akkor false-ot kapunk?',()=>{
        let actual=checkInput('aa');
        expect(actual).toBe(false);
    });
})