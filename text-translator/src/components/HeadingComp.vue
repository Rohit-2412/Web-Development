<template>
    <div>
        <span>{{ heading }}</span>
    </div>
</template>

<script>
export default {
    name: "HeadingComp",
    props: {
        heading: String,
    },
};
</script>
