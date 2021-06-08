<template>
    <button id="btn" @click="onClick()">Click me</button> There have been {{ countNum }} clicks made.
</template>

<script>
export default {
    name: 'Counter',
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            countNum: this.count
        }
    },
    methods: {
        onClick() {
            this.countNum++
        }
    }
}
</script>