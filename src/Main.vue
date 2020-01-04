<template>
    <div id="main">
        <Menu />
        <div class="content">
            <Header :title="title" :description="checkRouteName"></Header>

            <div class="search-wrapper">
                <input type="text" v-model="search" placeholder="Search for a planet.." />
            </div>

            <router-view :spaceData="planets" :search="search"></router-view>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import Menu from './components/base/Menu'
import Header from './components/base/Header'
// import Searchbar from './components/utils/Searchbar'
import data from '../data'

export default {
    name: 'main',
    components: {
        Menu,
        Header,
        // Searchbar,
    },
    data() {
        return {
            title: 'Welcome traveler',
            planetsDescription:
                'This is a list of all planets in our solar system',
            moonsDescription: 'All available moons are listed here',
            planets: data.bodies,
            search: '',
        }
    },
    // mounted() {
    //     axios
    //         .get(
    //             'https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc'
    //         )
    //         .then(response => (this.planets = response.data.bodies))
    // },
    computed: {
        checkRouteName() {
            if (this.$route.path == '/moons') {
                return this.moonsDescription
            } else {
                return this.planetsDescription
            }
        },
    },
}
</script>

<style lang="scss">
@import './assets/scss/components/colors.scss';
@import './assets/scss/main.scss';
@import './assets/scss/components/searchbar.scss';
</style>
