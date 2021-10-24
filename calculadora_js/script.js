function calcular(){
    //Pegando os campos de HTML e fazendo a manipulação dos dados
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    
    let operacao = [document.getElementById("soma").checked, document.getElementById("sub").checked, document.getElementById("mult").checked, document.getElementById("divi").checked]
    
    let res = document.getElementById("res")

    //Processando os dados
    if(n1 == "" || isNaN(n1) || n2 == "" || isNaN(n2)){
        alert("Por favor, adicione valores numericos aos campos.")

    }else if(operacao[0] == true){
        let adcao = n1 + n2
        res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é = <strong>${adcao}</strong>`
        res.style.background = "rgba(11, 2, 73, 0.863)"
        
    }else if(operacao[1] == true){
        let subtracao = n1 - n2
        res.innerHTML = `A subtração entre <strong>${n1}</strong> e <strong>${n2}</strong> é = <strong>${subtracao}</strong>`
        res.style.background = "rgba(11, 2, 73, 0.863)"

    }else if(operacao[2] == true){
        let multi = n1 * n2
        res.innerHTML = `A multiplicação entre <strong>${n1}</strong> e <strong>${n2}</strong> é = <strong>${multi}</strong>`
        res.style.background = "rgba(11, 2, 73, 0.863)"

    }else if(operacao[3] == true){
        let divi = n1 / n2
        res.innerHTML = `A divisão entre <strong>${n1}</strong> e <strong>${n2}</strong> é = <strong>${divi}</strong>`
        res.style.background = "rgba(11, 2, 73, 0.863)"
    }
}
document.getElementById("calcular").addEventListener('click', calcular)