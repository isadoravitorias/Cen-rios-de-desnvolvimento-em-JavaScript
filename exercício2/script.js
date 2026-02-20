function calcular(){
    let p1 =
Number(document.getElementById("p1").value);
    let p2 =
Number(document.getElementById("p2").value);
    let p3 =
Number(document.getElementById("p3").value);
    let p4 =
Number(document.getElementById("p4").value);
    let p5 =
Number(document.getElementById("p5").value);
    if(p1 <=0 || p2<=0 || p3<=0 ||p4<=0 ||p5<=0){
        alert("Digite apenas números positivos!");
 }else {
    let total = p1 + p2 + p3 + p4 + p5;
document.getElementById("resultado").innerHTML=
    "Produto 1:" + p1 + "<br>" +  "Produto 2:" + p2 + "<br>" +  "Produto 3:" + p3 + "<br>" + "Produto 4:" + p4 + "<br>" +  "Produto 5:" + p5 + "<br>" + "Total em estoque:" + total;
 } 
}