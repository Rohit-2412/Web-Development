<template>
    <div id="trans_2" style="text-align: center">
        <h1 class="text-center text-primary">Automatic transition</h1>
        <transition
            appear
            appear-class="custom-appear-class"
            appear-active-class="animated bounceIn"
        >
            <div class="container mt-3">
                <!-- display random image -->
                <img
                    class="mx-4 border border-2 border-danger"
                    src="https://picsum.photos/150/150"
                />
                <br />
                <!-- caption -->
                <span class="text-danger">Random Image</span>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
