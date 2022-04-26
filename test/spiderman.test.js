const Spiderman = require("../app/spiderman");

describe('Unit tests for Spiderman class', () => {
    test('1) Create an spiderman object', () => {
        //Instanciar un objeto Spiderman con esta información
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

        expect(andrewGarfield.nombre).toBe("Spiderman Sony");
        expect(andrewGarfield.edad).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.numeroPeliculas).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });

    test('2) Use the method getInfo()',() => {
      const tomHolland= new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
    
});

