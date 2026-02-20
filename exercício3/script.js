function podeAssistir(idade){
    if(idade >=16){
        return true;
    }else{
        return false;
    }
}
function verificar(){
    let resultado = "";
    let imagem = document.getElementById("imagem");
    imagem.className = "";
    for (let i = 1; i<=4; i++){
        let idade =
Number(document.getElementById("i"+ i).value);
     if(isNaN(idade)|| idade < 0){
        alert ("Idade inválida.");
        return;
     }
        if(podeAssistir(idade)){
        resultado += " Pessoa " + i + " :Pode assistir<br>";
        }else{
            resultado += " Pessoa " + i + ":Não pode assistir<br>";
            imagem.className = "proibido";
        }

    }
document.getElementById("resultado").innerHTML = resultado;
}