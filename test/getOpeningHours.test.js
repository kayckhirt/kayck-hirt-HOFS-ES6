const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica os horarios', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('Verifica se está fechado na Segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se está aberto na Terça', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se está aceitando Maiúsculas', () => {
    expect(getOpeningHours('TUESDAY', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se está fechado na Quarta depois das 21', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se está lançando a exceção', () => {
    expect(() => {
      getOpeningHours('Thue', '09:00-AM');
    }).toThrowError('The day must be valid. Example: Monday');
  });
  it('Verifica se está lançando a exceção para erros com horários PM / AM', () => {
    expect(() => {
      getOpeningHours('Friday', '10:00-ZM');
    }).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se está colocando letras no lugar do horários', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrowError('The hour should represent a number');
  });
  it('Verifica se está colocando letras no lugar do horários', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrowError('The minutes should represent a number');
  });
  it('Verifica se os minutos passam de 59', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:61-AM');
    }).toThrowError('The minutes must be between 0 and 59');
  });
  it('Testando se a função receber hora maior que 12', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrowError('The hour must be between 0 and 12');
  });
});
