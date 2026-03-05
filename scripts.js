function inscrever() {
    alert("Matrícula Efetuada com Sucesso!");
}

const cepInput = document.getElementById("cep");

// quando o usuário sair do campo CEP
cepInput.addEventListener("blur", function() {

    let cep = cepInput.value.replace("-", "");

    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){

        // coloca os dados dentro dos inputs do HTML
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    })
    //Catch evitar que o site quebre caso algo dê errado ao buscar o CEP.
    .catch(function(){
        alert("Erro ao buscar CEP");
    });

});