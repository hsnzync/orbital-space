<template>
    <div class="planets">
        <div class="space-wrapper row">
            <div v-for="(moon, index) in cleanMoons" :key="index" class="planet-wrapper col-xl-3">
                <div class="planet-block moon-block card">
                    <div class="planet-block-info">
                        <div class="planet-block-details">
                            <img class="planet-block-title-image" src="../assets/img/mercure.png" />

                            <h4 class="card-title">
                                {{ handleMoonName(moon) }}
                                <span
                                    class="planet-block-info-planettype"
                                >{{ handlePlanetName(moon) }}</span>
                            </h4>

                            <div class="planet-block-extra active">
                                <p v-if="moon.gravity">
                                    <span class="planet-block-info-title">Gravity:</span>
                                    {{ moon.gravity }} m/s²
                                </p>
                                <p v-if="moon.density">
                                    <span class="planet-block-info-title">Density:</span>
                                    {{ moon.density }} gm/cm3
                                </p>
                                <p v-if="moon.dimension">
                                    <span class="planet-block-info-title">Dimension:</span>
                                    {{ moon.dimension }}
                                </p>
                                <p v-if="moon.meanRadius">
                                    <span class="planet-block-info-title">Radius:</span>
                                    {{ moon.meanRadius }} km
                                </p>
                                <p v-if="moon.mass.massValue">
                                    <span class="planet-block-info-title">Mass:</span>
                                    {{ moon.mass.massValue }} ×1023 kg
                                </p>
                                <p v-if="moon.inclination">
                                    <span class="planet-block-info-title">Inclination:</span>
                                    {{ moon.inclination }}°
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Moons',
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
        handleMoonName(moon) {
            return moon.englishName.replace(/[^a-zA-Z]/g, '')
        },
        handlePlanetName(moon) {
            if (moon.aroundPlanet) {
                return (
                    moon.aroundPlanet.planet.charAt(0).toUpperCase() +
                    moon.aroundPlanet.planet.slice(1)
                )
            } else {
                return 'none'
            }
        },
        // handlePlanetHeader(moon) {
        //     if (moon.aroundPlanet.planet == 'saturne') {
        //         return 'Saturn'
        //     }
        // },
    },
    computed: {
        cleanMoons() {
            return this.spaceData.filter(moon => {
                // check if valid planets instead of moons
                if (!moon.isPlanet && moon.aroundPlanet) {
                    return moon.englishName
                        .toLowerCase()
                        .includes(this.search.toLowerCase())
                }
            })
        },
    },
}
</script>
