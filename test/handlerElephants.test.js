const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se Count dá 4', () => {
    expect(handlerElephants('count')).toBe(4)
  })
  it('Verifica se o (names) não retorna um array vazio', () => {
    expect(handlerElephants('names')).not.toEqual([]);
  })
  it('Verifica se os nomes correspondem ao names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  })
  it('Verifica se Elephants o id corresponde ao mesmo', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  })
  it('Verifica se a popularidade não é igual a 1', () => {
    expect(handlerElephants('popularity')).not.toEqual(1);
  })
  it('Verifica se a popularidade é igual a 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  })
  it('Verifica se a availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('availability')).not.toEqual(['Wednesday','Monday']);
  })
  it('Verifica se a localizacao corresponde ao local certo', () => {
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('location')).not.toEqual('N');
  })
  it('Verifica se idade media dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  })
  it('Verifica se Elephants recebe parâmetro null', () => {
    expect(handlerElephants('tamanhoDaOrelha')).toEqual(null);
  })
  it('Verifica se Elephants recebe undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  })
  it('Verifica se Elephants recebe array vazio e retorna mensagem de parâmetro invalido', () => {
    expect(handlerElephants([])).toEqual("Parâmetro inválido, é necessário uma string");
  })
});
