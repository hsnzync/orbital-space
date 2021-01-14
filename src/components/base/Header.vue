<template>
    <div class="main-header">
        <img class="main-header-icon" alt="astronaut-icon" src="../../assets/img/astronaut.png" />

        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        description: String,
    },
}
</script>