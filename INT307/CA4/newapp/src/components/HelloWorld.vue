<template>
    <div id="app">
        <h1 class="text-success text-center display-4 my-3">Question 1</h1>
        <button
            @click="show = !show"
            class="btn btn-primary mx-auto d-block my-3"
        >
            Click to Invoke the transition
        </button>

        <!-- fade transition -->
        <transition name="fade" v-show="show">
            <p class="text-center text-danger display-4">
                Lovely Professional University
            </p>
        </transition>

        <!-- bounce transition -->
        <!-- <transition name="bounce">
            <p class="text-center text-danger display-4">
                Lovely Professional University
            </p>
        </transition> -->

        <!-- custom transition -->
        <!-- <transition
            name="rotating"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-show="show"
        >
            <p class="text-center text-danger display-4">
                Lovely Professional University
            </p>
        </transition> -->
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            // eslint-disable-next-line
            show: "true",
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* bounce transition */
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}

.rotating-enter-active,
.rotating-leave-active {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    /* rotate the text and move its axis */
    0% {
        transform: scale(0.8);
        rotate: 0deg;
    }

    50% {
        transform: scale(1.3);
        rotate: 180deg;
    }

    100% {
        transform: scale(0.8);
        rotate: 360deg;
    }
}
</style>
