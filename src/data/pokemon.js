import currencyApi from '~/services/currency-api';
import pokemonApi from '~/services/pokemon-api';

const getCurrency = async (async) => {
  const { data } = await currencyApi.get('USD-BRL');

  const formatDolar = parseFloat(data.USD.ask).toFixed(2);

  return formatDolar;
};

const getPokemon = async (currency) => {
  let pokemonId = currency.replace('.', '');

  let { data } = await pokemonApi.get(
    `pokemon/${pokemonId}`
  );

  data.thumbnail = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;

  return data;
};

export { getPokemon };
