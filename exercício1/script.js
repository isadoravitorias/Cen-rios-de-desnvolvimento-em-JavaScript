function calcular(){
     let n1,n2,n3;
     while(true){
        n1 =
Number(document.getElementById("nota1").value);
        n2 =
Number(document.getElementById("nota2").value);
        n3 =
Number(document.getElementById("nota3").value);
        if (n1<0 || n1>10){
            alert("Nota 1 inválida");
document.getElementById("nota1").className = "erro";
             break;
        }
        if (n2<0 || n2>10){
            alert("Nota 2 inválida");
document.getElementById("nota2").className = "erro";
             break;
     }
     if (n3<0 || n3>10){
            alert("Nota 3 inválida");
document.getElementById("nota3").className = "erro";
             break;
}
    let media = (n1+n2+n3)/3;
document.getElementById("resultado").innerHTML ="Parabéns! Média:" + media.toFixed(2);
     break;
}
}