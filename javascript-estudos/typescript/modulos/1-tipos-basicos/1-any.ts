
/**
 * O tipo any aceita qualquer tipo, deve ser evitado o maximo possivel
 */

function messagem(msg: any){
    console.log(msg);
}

messagem("Hello World");
messagem(1234);