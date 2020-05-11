import { getPokemon } from '../pokemon';

describe('get a pokemon according to dolar currency', () => {
  it('should get cinccino pokemon', async () => {
    await getPokemon('5.73').then((pokemon) => {
      expect(pokemon.name).toEqual('cinccino');
    });
  });

  it('should get gothitelle pokemon', async () => {
    await getPokemon('5.76').then((pokemon) => {
      expect(pokemon.name).toEqual('gothitelle');
    });
  });
});
