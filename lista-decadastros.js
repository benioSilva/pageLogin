var preencherListaId = "preencherLista"
var dadosKey = "dadosCadastrados"
var loginKey = "loginAprovado"
function getElementById(id) {
    return document.getElementById(id)
}
function getUserAprovado(){
    const storageAprovados = localStorage.getItem(loginKey)
    return JSON.parse(storageAprovados) || []
}
function getDadosStorage() {
    const storageCadastro = localStorage.getItem(dadosKey)
    return JSON.parse(storageCadastro) || []
}
preenchendoLista()
function preenchendoLista() {
    getElementById(preencherListaId).innerHTML = ""
    const realocandoStorage = getDadosStorage()
    realocandoStorage.forEach(function (element, index) {
        getElementById(preencherListaId).innerHTML += '<tr>' +
            '<th scope="row">' + (index + 1) + '</th>' +
            '<td>' + element.username + '</td>' +
            '<td>' + element.email + '</td>' +
            '<td>' + element.status + '</td>' +
            '<td><button onclick ="onClickTrocarStatus('+index+')">Alterar Status</button><button onclick="onClickExcluir(' + index + ')">Excluir</button></td>' +
            '<tr>'
    });
}

function onClickExcluir(para) {
    let realocandoStorage = getDadosStorage()
    realocandoStorage = realocandoStorage.filter(function (element, index) {
        return para != index
    })
    localStorage.setItem(dadosKey, JSON.stringify(realocandoStorage))
    preenchendoLista()
}

function onClickTrocarStatus(index) {
    let realocandoStorage = getDadosStorage()
    if(realocandoStorage[index].status == "Desativado"){
        realocandoStorage[index].status = "Ativo"
    } else {
        realocandoStorage[index].status = "Desativado"
    }
    localStorage.setItem(dadosKey, JSON.stringify(realocandoStorage))
    preenchendoLista()
    validacaoDeCadastro(index)

}

function validacaoDeCadastro(indexParam){
    let realocandoStorage = getDadosStorage() 
    if(realocandoStorage[indexParam].status == "Desativado"){
        let storageAprovadosRealocado = getUserAprovado()
        storageAprovadosRealocado = storageAprovadosRealocado.filter(function(element, index){
            return indexParam != index
        })
        localStorage.setItem(loginKey, JSON.stringify(storageAprovadosRealocado))
        preenchendoLista()
        
    } else if (realocandoStorage[indexParam].status == "Ativo"){
        let dadosLogin = {
        usernameAprovado: realocandoStorage[indexParam].username,
        passwordAprovado: realocandoStorage[indexParam].password
        }
        const storageAprovadosRealocado = getUserAprovado()
        storageAprovadosRealocado.push(dadosLogin)
        localStorage.setItem(loginKey, JSON.stringify(storageAprovadosRealocado))
        preenchendoLista()
    }

    

}