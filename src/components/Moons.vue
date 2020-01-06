<template>
    <div class="planets">
        <div class="moon-filter">
            <h4 @click="showFilters">Filters →</h4>
            <div v-if="isOpen">
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
        <div class="space-wrapper row">
            <div
                v-for="(moon, index) in cleanMoons"
                :key="index"
                class="planet-wrapper col-xl-3"
            >
                <div class="planet-block moon-block card">
                    <div class="planet-block-info">
                        <div class="planet-block-details">
                            <img
                                class="planet-block-title-image"
                                src="../assets/img/mercure.png"
                            />

                            <h4 class="card-title">
                                {{ handleMoonName(moon) }}
                                <span class="planet-block-info-planettype">{{
                                    mapPlanetName(moon.aroundPlanet.planet)
                                }}</span>
                            </h4>

                            <div class="planet-block-extra active">
                                <p v-if="moon.gravity">
                                    <span class="planet-block-info-title"
                                        >Gravity:</span
                                    >
                                    {{ moon.gravity }} m/s²
                                </p>
                                <p v-if="moon.density">
                                    <span class="planet-block-info-title"
                                        >Density:</span
                                    >
                                    {{ moon.density }} gm/cm3
                                </p>
                                <p v-if="moon.dimension">
                                    <span class="planet-block-info-title"
                                        >Dimension:</span
                                    >
                                    {{ moon.dimension }}
                                </p>
                                <p v-if="moon.meanRadius">
                                    <span class="planet-block-info-title"
                                        >Radius:</span
                                    >
                                    {{ moon.meanRadius }} km
                                </p>
                                <p v-if="moon.mass.massValue">
                                    <span class="planet-block-info-title"
                                        >Mass:</span
                                    >
                                    {{ moon.mass.massValue }} ×1023 kg
                                </p>
                                <p v-if="moon.inclination">
                                    <span class="planet-block-info-title"
                                        >Inclination:</span
                                    >
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
    name: "Moons",
    props: {
        spaceData: {
            type: Array,
            required: false,
            default: () => []
        },
        search: {
            type: String,
            required: false,
            default: ""
        }
    },
    data() {
        return {
            isOpen: false,
            selected: [],
            selectedPlanet: "",
            planets: [
                "terre",
                "saturne",
                "jupiter",
                "pluton",
                "uranus",
                "mars",
                "haumea",
                "eris",
                "makemake"
            ]
        };
    },
    methods: {
        handleMoonName(moon) {
            return moon.englishName.replace(/[^a-zA-Z]/g, "");
        },
        mapPlanetName(planet) {
            if (planet == "terre") {
                return "Earth";
            } else if (planet == "saturne") {
                return "Saturn";
            } else if (planet == "pluton") {
                return "Pluto";
            }
            return planet.charAt(0).toUpperCase() + planet.slice(1);
        },
        resetFilter() {
            this.selectedPlanet = "";
        },
        showFilters() {
            if (this.isOpen) {
                this.isOpen = false;
            } else {
                this.isOpen = true;
            }
        }
        // handlePlanetHeader(moon) {
        //     if (moon.aroundPlanet.planet == 'saturne') {
        //         return 'Saturn'
        //     }
        // },
    },
    computed: {
        cleanMoons() {
            // let url = new URL(window.location.href);

            return this.spaceData.filter(moon => {
                // check if valid planets instead of moons
                if (!moon.isPlanet && moon.aroundPlanet) {
                    if (this.selectedPlanet != "") {
                        return moon.aroundPlanet.planet
                            .toLowerCase()
                            .includes(this.selectedPlanet);
                    }
                    return moon.englishName
                        .toLowerCase()
                        .includes(this.search.toLowerCase());
                }
            });
        }
    }
};
</script>
