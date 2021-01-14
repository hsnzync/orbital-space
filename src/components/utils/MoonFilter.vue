<template>
  <div class="moon-filter">
    <button @click="handleFilter" class="btn btn-primary">
      <font-awesome-icon icon="filter" size="xs" /> Filters
    </button>
    <div v-if="isOpen" class="col-12">
      <div v-for="(planet, index) in planets" :key="index">
        <input
          type="radio"
          :id="planet"
          :value="planet"
          v-model="selectedPlanet"
        />
        <label :for="planet">{{ mapPlanetName(planet) }}</label>
      </div>
      <span @click="resetFilter">Reset filters</span>
    </div>
  </div>
</template>

<script>
import { EARTH, SATURN, PLUTO } from '@/constants/planets';
export default {
  name: 'MoonFilter',
  components: {},
  props: {},
  data() {
    return {
      isOpen: false,
      planets: [
        'terre',
        'saturne',
        'jupiter',
        'pluton',
        'uranus',
        'mars',
        'haumea',
        'eris',
        'makemake'
      ]
    };
  },
  methods: {
    mapPlanetName(planet) {
      if (planet == 'terre') {
        return EARTH;
      } else if (planet == 'saturne') {
        return SATURN;
      } else if (planet == 'pluton') {
        return PLUTO;
      }
      return planet.charAt(0).toUpperCase() + planet.slice(1);
    },
    handleFilter() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    }
  },
  computed: {}
};
</script>
