let a = 102;
let b = 51;
let c = 98;


// let ad=a+b;
// let sub=a-b;
// let mult=a*b;
// let div=a/b;
// let mod=a%b;


// if (a>b){
//   console.log (a);
// }
// else if (b>a){
//   console.log (b);
// }


// if (a>b & a>c) {
//   console.log (a);
// }
// else if (b>a & b>c) {
//   console.log (b);
// }
// else if (c>a & c>b) {
//   console.log (c);
// }


// if (a>0) {
//   console.log ("Positive");
// }
// else if (a<0) {
//   console.log ("Negative");
// }
// else if (a==0) {
//   console.log ("Zero");
// }


// const tri= a+b+c;
// if (tri==180) {
//   console.log ("true");
// }
// else if (tri>=0 & tri<180) {
//   console.log ("false");
// }
// else if (tri>=0 & tri>180) {
//   console.log ("false");
// }
// else if (tri < 0) {
//   console.log ("error");
// }


// switch (a.toLowerCase()) {
//   case 'rei':
//     console.log('rei-uma casa em qualquer direção');
//     break;
//   case 'rainha':
//     console.log('rainha-todas as casas em qualquer direção');
//     break;
//   case 'bispo':
//     console.log('bispo-todas as casas diagonais');
//     break;
//   case 'torre':
//     console.log('torre-todas as casas em linha reta');
//     break;
//   case 'cavalo':
//     console.log('cavalo-anda em L');
//     break;
//   case 'peao':
//     console.log('peao-uma casa pra frente');
//     break;        
// }


// if (a<0 | a>100){
//   console.log('error')
// }
// else if(a>=90){
//   console.log('A')
// }
// else if (a>=80){
//   console.log('B')
// }
// else if (a>=70){
//   console.log('C')
// }
// else if (a>=60){
//   console.log('D')
// }
// else if (a>=50){
//   console.log('E')
// }
// else if (a<50){
//   console.log('F')
// }


// let restA=a%2
// let restB=b%2
// let restC=c%2
// if (restA==0 | restB==0 | restC==0){
// console.log('true')
// }
// else{
//   console.log('false')
// }


// let restA=a%2
// let restB=b%2
// let restC=c%2
// if (restA!=0 | restB!=0 | restC!=0){
// console.log('true')
// }
// else{
//   console.log('false')
// }


// let valorCusto=50
// let valorDeVenda=20
// let impostoSobreOCusto=valorCusto*0.2
// let valorCustoTotal=valorCusto+impostoSobreOCusto
// let lucro=valorDeVenda-valorCustoTotal

// if (valorCusto<0 | valorDeVenda<0){
//   console.log('error')
// }
// else
//   console.log(lucro)

// let salarioBruto=6000
// let INSS=0
// let IR=0

// if (salarioBruto<=1556.94 & salarioBruto>0){
//   INSS=salarioBruto*0.08
// }
// else if (salarioBruto>=1556.95 &salarioBruto<=2594.92){
//   INSS=salarioBruto*0.09
// }
// else if (salarioBruto>=2594.93 &salarioBruto<=5189.82){
//   INSS=salarioBruto*0.11
// }
// else if (salarioBruto>5189.82){
//   INSS=570.88
// }
// else {
//   console.log('mas ta pagando pra trabalhar?')
// }

// let salarioBase=salarioBruto-INSS

// if (salarioBase<=1903.98){
//   IR=0 
// }
// else if(salarioBase>=1903.99 &salarioBase<=2826.65){
//   IR=salarioBase*0.075-142.80
// }
// else if(salarioBase>=2826.66 &salarioBase<=3751.05){
//   IR=salarioBase*0.15-354.80
// }
// else if(salarioBase>=3751.06 &salarioBase<=4664.68){
//   IR=salarioBase*0.225-636.13
// }
// else if (salarioBase>4664.68){
//   IR=salarioBase*0.275-869.36
// }
// let salarioLiquid=salarioBase-IR
// console.log(salarioLiquid)