<template>
    <div class="w-screen h-screen top-0 left-0 bg-white z-50 absolute flex">
        <div class="w-full md:w-1/4 m-auto">
            <img class="w-full hover:cursor-pointer animate-bounce" src="../assets/header_icon.png" alt="" @click="onImageClick">
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    onImageClick: Function
})

</script>
