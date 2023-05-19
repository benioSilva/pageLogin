var usernameLoginId = "username-login"
var passwordLoginId = "password-login"
var btnLoginId = "btn-login"
var dadosKey = "dadosCadastrados"
var loginKey = "loginAprovado"
var dadosLoginTempKey = "dadosloginTemp"
function getElementById(id) {
    return document.getElementById(id)
}
function getUserAprovado() {
    const storageAprovados = localStorage.getItem(loginKey)
    return JSON.parse(storageAprovados) || []
}
function getTempDados() {
    const storagedadosTemp = localStorage.getItem(dadosLoginTempKey)
    return JSON.parse(storagedadosTemp) || []
}


function getDadosStorage() {
    const storageCadastro = localStorage.getItem(dadosKey)
    return JSON.parse(storageCadastro) || []
}

function dadosLogin() {

    if (!getElementById(usernameLoginId).value) {
        alert("preencher nome")
        return false
    }
    if (!getElementById(passwordLoginId).value) {
        alert("preencher senha")
        return false
    }

    return true
}

function compararLogin() {

    if (!dadosLogin()) {
        return
    }
    validarLogin()
    // loginTeporario()
    // consultarDadosAprovados()

}

// function consultarDadosAprovados(){
//     const tempDados = getTempDados()
//     let listaDeUsuariosAtivo = getUserAprovado()
//     for (let index = 0; index < listaDeUsuariosAtivo.length; index++) {
//         const element = listaDeUsuariosAtivo[index];

//         if (tempDados.userLogin == element.usernameAprovado) {

//         }
//         if (tempDados.passwordLogin == element.passwordAprovado) {

//         }

//     }

//  }

function loginTeporario() {
    let loginTemp = {
        userLogin: getElementById(usernameLoginId).value,
        passwordLogin: getElementById(passwordLoginId).value
    }
    localStorage.setItem(dadosLoginTempKey, JSON.stringify(loginTemp))

}
//return window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20de%20registro/lista-de-cadastros.html"
function validarLogin() {
    let loginAprovado = getUserAprovado()
    loginAprovado = loginAprovado.filter(function (element, index) {
       return element.usernameAprovado == getElementById(usernameLoginId).value
    })
    if (loginAprovado.length == 1){
        if(loginAprovado[0].passwordAprovado ==  getElementById(passwordLoginId).value){
            window.location.href = "file:///home/marcos/Desktop/ESTUDOS/site%20de%20registro/lista-de-cadastros.html"
            return 
        }
    } 
    alert("usuario ou senha invalido")
    console.log(loginAprovado)
    getElementById(usernameLoginId).value = ""
    getElementById(passwordLoginId).value = ""
}