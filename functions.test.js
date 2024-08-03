var { criarContato, removerContato, listarContato } = require('./functions.js');

test("Deve verificar se a lista de contatos é vazia", () => {
  listarContato();
  expect(listarContato()).toBe('Lista está vazia');
})

test("Deve criar contato", () => {
  var contatos = criarContato("Henrique", "Henrique@gmail.com", "(99) 99999-9999");
  expect(contatos.nome).toBe("Henrique");
  expect(contatos.email).toBe("Henrique@gmail.com");
  expect(contatos.telefone).toBe("(99) 99999-9999");
})

test("Deve verificar se o campo nome é vazio", () => {
  var contatos = criarContato("", "Henrique@gmail.com", "(99) 99999-9999");
  expect(contatos).toBe('Nome é obrigatório');
})

test("Deve verificar se os campo email é vazio", () => {
  var contatos = criarContato("Henrique", "", "(99) 99999-9999");
  expect(contatos).toBe('E-mail é obrigatório');
})

test("Deve verificar se o campo telefone é vazio", () => {
  var contatos = criarContato("Henrique", "Henrique@gmail.com", "");
  expect(contatos).toBe('Telefone é obrigatório');
})

test("Deve remover contato", () => {
  var contatos = criarContato("Henrique", "Henrique@gmail.com", "(99) 99999-9999");
  removerContato(contatos.id);
  var listas = listarContato();
  expect(listas).not.toContain(contatos);
})

test("Deve verificar se o contato não foi encontrado", () => {
  removerContato();
  var listas = listarContato();
  expect(listas).not.toContain('Contato não encontrado');
})
