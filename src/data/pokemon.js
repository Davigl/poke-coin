import pokemonApi from '~/services/pokemon-api';

const getPokemon = async (currency) => {
  let pokemonId = currency.replace('.', '');

  let { data } = await pokemonApi.get(
    `pokemon/${pokemonId}`
  );

  return data;
};

export { getPokemon };
