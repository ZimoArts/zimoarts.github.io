<template>
    <div class="w-full">
        <div class="carousel rounded-box">
            <template v-for="image in imageList">
                <div class="carousel-item bg-white mr-6">
                    <img :src="image.Url" alt="" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
    images: Array
})
let imageList = ref([])
imageList = props.images

function AddImages(images) {
    imageList.push(images);
}

defineExpose({
    AddImages
})

</script>
