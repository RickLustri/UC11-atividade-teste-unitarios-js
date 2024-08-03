let contacts = [];
let idCounter = 0;

function criarContato(nome, email, telefone) {
    if (nome.trim() === '') {
        return 'Nome é obrigatório';
    }

    if (email.trim() === '') {
        return 'E-mail é obrigatório';
    }

    if (telefone.trim() === '') {
        return 'Telefone é obrigatório';
    }
    
    const contact = {
        id: idCounter++,
        nome: nome,
        email: email,
        telefone: telefone
    };
    
    contacts.push(contact);

    return contact;
}

function removerContato(id) {
  var procurarContato = contacts.find(contact => contact.id === id);

  if(!procurarContato) {
    return 'Contato não encontrado';
  }

  contacts = contacts.filter(contact => contact.id !== id);

  return 'Contato removido com sucesso';
}

function listarContato() {
    if(contacts.length === 0) {
        return 'Lista está vazia';
    }

    return contacts;
}

module.exports = {
    criarContato,
    removerContato,
    listarContato
};