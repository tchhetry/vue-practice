<template>
    <button id="btn" @click="onClick()">Click me</button> <span>There have been {{ countNum }} clicks made.</span>
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