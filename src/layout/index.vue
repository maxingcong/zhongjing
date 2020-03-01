<template>
    <div class="vertical">
        <BodyHeader></BodyHeader>
        <BodyMain></BodyMain>
        <BodyFooter></BodyFooter>
    </div>
</template>
<script>
    import BodyHeader from './BodyHeader'
    import BodyFooter from './BodyFooter'
    import BodyMain from './BodyMain'

    export default {
        components: {BodyHeader, BodyFooter, BodyMain}
    }
</script>
<style>
    .vertical {
        min-width: 1200px;
        height: 100%;
    }
</style>