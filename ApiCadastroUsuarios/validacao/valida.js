
function validaNome(nome) {
    const regexNome = /^[a-zA-ZÁ-ÿ\s\-']+$/;
    const isvalid= regexNome.test(nome) && nome.lenght >=2
    return isvalid
}
function validaEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isvalid = regexEmail.test(email)
    return isvalid
}

function validaTelefone(telefone) {
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    const isvalid = regexTelefone.test(telefone)
    return isvalid
}

export function validaUsuario2(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido =  validaEmail(email);
    const telefoneValido = validaTelefone(telefone);
    const usuarioValido = nomeValido && emailValido && telefoneValido

    if (usuarioValido)  {
        return {status: true, mensagem:''}

        
    }else{
        return {status: false, mensagem:'Nome e/ou E-mail invalido(s).'}
    }
}

export function validaUsuario(nome, email, telefone) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    const nomeRegex = /^.{2,}$/
    if (((typeof nome != 'undefined' && nomeRegex.test(nome))) &&
        ((typeof email == 'undefined' || emailRegex.test(email))) &&
        ((typeof telefone == 'undefined' || telefoneRegex.test(telefone)))) {

        return true
    } else {
        return false

    }
}

