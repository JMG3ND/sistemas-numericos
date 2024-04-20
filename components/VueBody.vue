<template>
    <div class="container">
        <div class="container__justify-content">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        &__justify-content{
            padding: 0 2rem;
            max-width: 1200px;
            height: 100%;
            margin: 0 auto;
        }
    }
</style>