//Função para calcular o IMC
function calcularImc(){

    //Declaração das variaveis
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value / 100;
    let peso = document.getElementById('peso').value;

    if(nome !== '' && altura !== '' && peso !== ''){

        //Formula do IMC
        let imc = peso / (altura * altura);

        //Comando 'toFixed()' para descide quantas casas decimais meu número pode ter.

        if (imc < 18.5){

            document.getElementById('resultado').innerHTML = ("Ola "+nome+", seu IMC é: "+imc.toFixed(2)+"\n. Esta abaixo do peso ideal.");

        }else if(imc <= 24.9){
            
            document.getElementById('resultado').innerHTML = ("Ola "+nome+", seu IMC é: "+imc.toFixed(1)+"\n. Esta no peso ideal.");

        }else if(imc <= 29.9){

            document.getElementById('resultado').innerHTML = ("Ola "+nome+", seu IMC é: "+imc.toFixed(1)+"\n. Esta levimente acima do peso.");
            
        }else if(imc <= 34.9){

            document.getElementById('resultado').innerHTML = ("Ola "+nome+", seu IMC é: "+imc.toFixed(1)+"\n. Esta acima do peso.");
            
        }else if(imc <= 39.9){

            document.getElementById('resultado').innerHTML = ("Ola "+nome+", seu IMC é: "+imc.toFixed(1)+"\n. Esta com obesidade.");
            
        }else if(imc >= 40){

            document.getElementById('resultado').innerHTML = ("Ola "+nome+", seu IMC é: "+imc.toFixed(1)+"\n. Esta com obesidade mórbida.");
            
        }
    }
    else{

        //Alerta para caso deice de preencher algum campo
        window.alert('Por favor, preencha todos os campos')
    }
}