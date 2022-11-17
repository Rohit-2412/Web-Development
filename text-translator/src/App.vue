<template>
    <Heading id="heading" heading="OCR Recognition App" />
    <Heading id="sub-heading" heading="Convert Hindi to English" />
    <MainComponent />
</template>

<script>
import Heading from "./components/HeadingComp.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
    name: "App",
    components: {
        Heading,
        MainComponent,
    },
};
</script>

<style>
#app {
    margin-top: 10px;
    margin-bottom: 10px;
}

#heading {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    color: #081c15;
    font-size: 3rem;
    font-weight: bold;
}

#sub-heading {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    color: #9ef01a;
    font-size: 2rem;
}
</style>
