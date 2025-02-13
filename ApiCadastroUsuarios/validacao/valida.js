
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

