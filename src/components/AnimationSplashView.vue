<template>
    <div class="w-screen h-screen top-0 left-0 bg-black z-50 absolute flex">
        <div class="w-full md:w-1/4 m-auto">
            <img class="w-full hover:cursor-pointer" src="../assets/red_zimoart.png" alt="" @click="onImageClick">
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    onImageClick: Function
})

</script>
