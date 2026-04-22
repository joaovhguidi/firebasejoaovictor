const ref = db.ref("Fornecedores");

$("#salvar").click(function () {
let nome = $("#nome").val();
let cnpj = $("#cnpj").val();
let email = $("#email").val();
let estado = $('input[name="opcao"]:checked').val();

if(nome ===  "" || email === ""  || cnpj === "" || !estado)  {
    alert('Preencha todos os campos');
    return;

}


ref.push({ nome, email, cnpj, estado });
limpar();
}) ;

function limpar() {
    $("#nome").val(""); 
    $("#cnpj").val(""); 
    $("#email").val("");
    $('input[name="opcao"]').prop('checked', false);
    $("#nome").focus(); 
}

