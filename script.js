var usernameId = "username"
var emailId = "email"
var passwordId = "password"
var repeatPasswordId = "repeat-password"
var btnCadastrarId = "btn-cadastrar"
var dadosKey = "dadosCadastrados"

function getElementById(id) {
    return document.getElementById(id)
}

function getDadosStorage() {
    const storageCadastro = localStorage.getItem(dadosKey)
    return JSON.parse(storageCadastro) || []
}

function verificarCampo() {
    if (!getElementById(usernameId).value) {
        alert("Preencher campo username")
        return false
    }
    if (!getElementById(emailId).value) {
        alert("Preencher campo email")
        return false
    }
    if (!getElementById(passwordId).value) {
        alert("Preencher campo username")
        return false
    }
    if (!getElementById(repeatPasswordId).value) {
        alert("Preencher campo repeat-password")
        return false
    }
    return true
}

getElementById(btnCadastrarId).addEventListener('click', function (event) {
    event.preventDefault();
    if (!verificarCampo()) {
        return
    } 
    if (getElementById(passwordId).value != getElementById(repeatPasswordId).value) {
        alert("senha não confere")
        
    } else {
        let dadosEnviados = {
            username: getElementById(usernameId).value,
            email: getElementById(emailId).value,
            status: "Desativado",
            password: getElementById(passwordId).value
        }

        const cadastro = getDadosStorage()
        cadastro.push(dadosEnviados)
        localStorage.setItem(dadosKey, JSON.stringify(cadastro))
        getElementById(usernameId).value = ""
        getElementById(emailId).value = ""
        getElementById(passwordId).value = ""
        getElementById(repeatPasswordId).value = ""
    }
  
})
