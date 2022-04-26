class spiderman {
    constructor(nombre, edad, actor, numeroPeliculas, studio) {
        this.nombre = nombre;
        this.edad = edad;
        this.actor = actor;
        this.numeroPeliculas = numeroPeliculas;
        this.studio = studio;
    }  

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.studio} studio`;
    } 
}

module.exports = spiderman;