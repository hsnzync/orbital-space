<template>
    <div class="search-wrapper">
        <input type="text" v-model="searchValue" placeholder="Search for a planet.." />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: this.search,
        }
    },
    props: {
        search: {
            type: String,
            required: false,
            default: '',
        },
    },
    watch: {
        checkSearch() {
            if (this.search) {
                this.searchValue = this.search
            }
        },
        filterSearch() {
            this.$emit('searched', this.searchValue)
        },
    },
}
</script>