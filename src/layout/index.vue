<template>
    <div class="vertical">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './Header'
    import Footer from './Footer'
    import Main from './Main'

    export default {
        components: {Header, Footer, Main}
    }
</script>
<style>
    .vertical {
        min-width: 1200px;
        height: 100%;
    }
</style>