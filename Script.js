function calcular(){
  peso=inputPeso.value
  altura=inputAltura.value.replace(",",".").substr(0,4)
  imc=peso.substr(0,3).replace(",",".")/(altura*altura)


  if(imc<17){
    texto.innerHTML="IMC= "+ imc.toFixed(2)+ " = Muito abaixo do peso"}
  if(18.4>imc && imc>17){
    texto.innerHTML="IMC= "+ imc.toFixed(2)+ " = Abaixo do peso"}
  if(imc>18.5 && imc<24.9){
    texto.innerHTML="IMC= "+ imc.toFixed(2)+ " = Peso Normal"}
  if(imc>25 && imc<29.9){
     texto.innerHTML="IMC= "+ imc.toFixed(2)+ " = Acima do Peso"}
  if(imc>30 && imc<34.9){
     texto.innerHTML="IMC= "+ imc.toFixed(2)+ " = Obesidade I"}
  if(imc>35){
     texto.innerHTML="IMC= "+ imc.toFixed(2)+ " = Obesidade II"}
}
