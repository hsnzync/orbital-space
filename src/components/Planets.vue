<template>
    <div class="planets">
        <div class="space-wrapper row">
            <div
                v-for="(planet, index) in cleanPlanets"
                :key="index"
                class="planet-wrapper col-xl-4"
            >
                <div class="planet-block card">
                    <div class="planet-block-info">
                        <div class="planet-block-details">
                            <img class="planet-block-title-image" :src="imgPreUrl(planet.id)" />

                            <h4 class="card-title">
                                {{ handlePlanetName(planet) }}
                                <span
                                    class="planet-block-info-planettype"
                                >{{ handlePlanetType(planet) }}</span>
                            </h4>
                            <p v-if="planet.description">{{ planet.description }}</p>
                        </div>
                        <div class="planet-block-extra" :class="{active: selected.includes(index)}">
                            <p v-if="planet.gravity">
                                <span class="planet-block-info-title">Gravity:</span>
                                {{ planet.gravity }} m/s²
                            </p>
                            <p v-if="planet.density">
                                <span class="planet-block-info-title">Density:</span>
                                {{ planet.density }} gm/cm3
                            </p>
                            <p v-if="planet.dimension">
                                <span class="planet-block-info-title">Dimension:</span>
                                {{ planet.dimension }}
                            </p>
                            <p v-if="planet.meanRadius">
                                <span class="planet-block-info-title">Radius:</span>
                                {{ planet.meanRadius }} km
                            </p>
                            <p v-if="planet.mass.massValue">
                                <span class="planet-block-info-title">Mass:</span>
                                {{ planet.mass.massValue }} ×1023 kg
                            </p>
                            <p v-if="planet.inclination">
                                <span class="planet-block-info-title">Inclination:</span>
                                {{ planet.inclination }}°
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-dark"
                        @click.prevent="showDetails(index)"
                    >{{ handleButtonLabel(index) }}</button>
                    <p class="moons-count">
                        <router-link to="/moons" v-if="planet.moons">
                            <span class="planet-block-info-title">Moons:</span>
                            {{ countMoons(planet) }}
                        </router-link>

                        <a to="#" v-else>
                            <span class="planet-block-info-title">Moons:</span>
                            {{ countMoons(planet) }}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MORE_INFO, LESS_INFO } from '../constants/planets'

export default {
    name: 'Planets',
    props: {
        spaceData: {
            type: Array,
            required: false,
            default: () => [],
        },
        search: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            selected: [],
        }
    },
    methods: {
        imgPreUrl(planet) {
            return require('../assets/img/' + planet + '.png')
        },
        handlePlanetName(planet) {
            return planet.englishName.replace(/\d+/g, '')
        },
        handlePlanetType(planet) {
            if (
                planet.id == 'ceres' ||
                planet.id == 'haumea' ||
                planet.id == 'eris' ||
                planet.id == 'makemake' ||
                planet.id == 'pluton'
            ) {
                return 'Dwarfplanet'
            } else {
                return 'Planet'
            }
        },
        showDetails(index) {
            if (this.selected.includes(index)) {
                this.selected.splice(-1, index)
            } else {
                this.selected.push(index)
            }
        },
        handleButtonLabel(index) {
            if (this.selected.includes(index)) {
                return LESS_INFO
            } else {
                return MORE_INFO
            }
        },
        countMoons(planet) {
            if (planet.moons == null) {
                return 0
            }

            return planet.moons.length
        },
    },
    computed: {
        cleanPlanets() {
            return this.spaceData.filter(planet => {
                // check if valid planets instead of moons
                if (planet.isPlanet) {
                    return planet.englishName
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                }
            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/components/colors.scss';
</style>
