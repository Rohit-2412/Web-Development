<template>
    <div id="app">
        <h1 class="text-success text-center display-4 my-3">Question 2</h1>

        <button
            @click="show = !show"
            class="btn btn-primary mx-auto d-block my-3"
        >
            Click to Invoke the transition
        </button>

        <transition name="shifting" v-show="show" @click="fun" id="anim">
            <p class="p-4 text-center text-danger display-4">Visual Studio</p>
        </transition>

        <transition
            name="rotating"
            v-show="show"
            @click="fun"
            id="anim2"
            class="d-none"
        >
            <p class="p-4 text-center text-danger display-4">Visual Studio</p>
        </transition>
    </div>
</template>

<script>
export default {
    name: "HW",
    data() {
        return {
            show: true,
        };
    },
    methods: {
        fun() {
            console.log("Click");
            let tag = document.getElementById("anim");
            let tag2 = document.getElementById("anim2");

            if (tag.classList.contains("d-none")) {
                tag.classList.remove("d-none");
                tag2.classList.add("d-none");
            } else {
                tag.classList.add("d-none");
                tag2.classList.remove("d-none");
            }
        },
    },
};
</script>

<style>
.shifting-enter-active,
.shifting-leave-active {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    /*move text from current pos to left then back to center */
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-300px);
    }
    50% {
        transform: translateX(0);
    }
    75% {
        transform: translateX(300px);
    }
    100% {
        transform: translateX(0);
    }
}

.rotating-enter-active,
.rotating-leave-active {
    animation: turn 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* rotate text 0 to 360deg infinite times*/
@keyframes turn {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(360deg);
    }
    50% {
        transform: rotate(720deg);
    }
    75% {
        transform: rotate(1080deg);
    }
    100% {
        transform: rotate(1440deg);
    }
}
</style>
