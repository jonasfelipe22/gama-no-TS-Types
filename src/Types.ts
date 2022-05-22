//String//
let nome;

nome = "jonas";

function nomeCompleto(nome: string, sobrenome: string){
    return `${nome} ${sobrenome}`
}
nomeCompleto('Jonas',"Barros")
//numeCompleto("jonas",barros) //erro passado como var


//Number//

let idade :number;
function somaIdade(idadeInicial :number ,anosPassaram : number){
    return idadeInicial=anosPassaram;
}
 somaIdade(25,3)
 //somaIdade("25","1") //erro pois foi passado como string

 //Bollean//
 let estaAtivo: Boolean;
 estaAtivo= true
 function mapearStatusDoUsuario(status: Boolean){
 if (status){
     return "O Usuario esta ativo"}
     else{
     return "O usuario não esta ativo"}

 }
mapearStatusDoUsuario(true) ;

//Array//

let gatos: string[] = ["Miau", "mi"];

gatos.push("5");

function exibeGatos(gatos: string[]){
    return `Os gatos são" ${gatos.join(',')}`
}
console.log(exibeGatos(gatos));

