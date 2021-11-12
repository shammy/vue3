<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template v-slot:title> {{ pokemon.name }} #{{ pokemon.id }}</template>
      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">{{ type }}</div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  emits: ['pokemonSelected'],
  components: {
    Card,
  },
  methods: {
    click(pokemon) {
      this.$emit('pokemonSelected', pokemon);
    },
  },
  props: {
    pokemons: {
      type: Array,
      default: [],
    },
    selectedId: {
      type: Number,
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}
.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
</style>
