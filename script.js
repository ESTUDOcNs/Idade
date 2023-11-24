function Idade(){
    var nome = document.getElementById("nome").value;
	var idade = parseInt(document.getElementById("idade").value);   
	document.getElementById("exibirIdade").innerHTML = nome + ", sua idade é " + idade + " anos! ";
}
Idade();
function Limpar(){
    document.getElementById("nome").value = ""
	document.getElementById("idade").value = ""
	document.getElementById("exibirIdade").innerHTML =""
}
Limpar();