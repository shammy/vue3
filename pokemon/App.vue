<template>
  <pokemon-cards :pokemons="pokemons" @pokemonSelected="fetchEvolutions" :selectedId="selectedId" />
  <pokemon-cards :pokemons="evolutions" />
</template>

<script>
import PokemonCards from './PokemonCards.vue';
const api = 'https://pokeapi.co/api/v2/pokemon';
// const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const IDS = [1, 4, 7, 10];
export default {
  components: {
    PokemonCards,
  },
  data() {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null,
    };
  },
  async created() {
    this.pokemons = await this.fetchData(IDS);
  },
  methods: {
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
      this.selectedId = pokemon.id;
    },

    async fetchData(ids) {
      const responses = await Promise.all(ids.map((id) => window.fetch(`${api}/${id}`)));
      const json = await Promise.all(responses.map((data) => data.json()));

      return json.map((datum) => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map((type) => type.type.name),
      }));
    },
  },
};
</script>

<style scoped></style>
