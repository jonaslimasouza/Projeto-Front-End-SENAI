function inscrever() {
    confirm("Deseja realmente se inscrever?")
    alert("Matrícula Efetuada com Sucesso!");
}

const cepInput = document.getElementById("cep");

// quando o usuário sair do campo CEP
cepInput.addEventListener("input", function() {

    let cep = cepInput.value.replace(/\D/g, "");

     // só busca quando tiver 8 números
     if (cep.length === 8) {

    let url = "https://viacep.com.br/ws/" + cep + "/json/";


    //fetch(): faz uma requisição para a API do ViaCEP e retorna os dados do endereço em JSON para preencher o formulário.
    
    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){


            // se o CEP não existir
            if(dados.erro){
                alert("CEP não encontrado");
                return;

    }

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

}

});  
