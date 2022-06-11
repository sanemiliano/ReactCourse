//There are several ways to declare an use classes.
//const Rectangulo = class {

//}
class Rectangulo{

}
//Here javascript does hoisting, which means that takes the function
//and places it in the beginning of the file
function Cuadrado(){}
//console.log(Rectangulo, Cuadrado)
const r = new Rectangulo();
class Chancho {
    propiedad = 'mi propiedad';
    //private classes must be declared in the class.
    #hambre = false;
    static altura = 3;
    constructor(estado = 'feliz'){
        this.estado = estado;
    }
    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'Tengo mucha hambre': 'No tengo hambre'}`);
    }
    //This is a static method that belongs to the class not to the instance of the class.
    //this doesn't have access to the properties of the class since that belongs to
    //the instance, unless the property is static.
    static correr(){
        console.log('Estoy corriendo');
        console.log(this.altura);
        //console.log(this.propiedad);//This doesn't work
    }
}
const feliz = new Chancho('feliz');
console.log(feliz);
const triste = new Chancho('triste');
console.log(triste);
triste.hablar();
Chancho.correr();

