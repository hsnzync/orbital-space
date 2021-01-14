<template>
    <div class="main-menu">
        <ul>
            <li class="main-menu-header">
                Spaceue <font-awesome-icon icon="bars" size="xs" />
            </li>
            <div class="main-menu-items">
                <router-link to="/">
                    <li class="main-menu-item">Planets</li>
                </router-link>
                <router-link to="/moons">
                    <li class="main-menu-item">Moons</li>
                </router-link>
                <a
                    href="https://solarsystem.nasa.gov/planets/overview/"
                    target="_blank"
                    rel="noopener"
                >
                    <li class="main-menu-item">Learn more</li>
                </a>
            </div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/components/colors.scss';
@import '../../assets/scss/components/menu.scss';
</style>
