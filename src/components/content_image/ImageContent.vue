<template>
    <div class="w-full flex justify-center">
        <div class="flex justify-start items-center mt-28">
            <div class="mr-5" v-for="imageInfo in imageInfoList">
                <img @click="handleTapImage(imageInfo.url)" class="w-96 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150" :src="imageInfo.url" alt="">
                <div class="flex justify-start ml-3">
                    <div v-html="imageInfo.title"></div>
                    <!-- <div v-html="imageInfo.text"></div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { v3ImgPreviewFn } from 'v3-img-preview'


const props = defineProps({
    imageInfos: Object
})

const imageInfoList = ref()
imageInfoList.value = props.imageInfos.imageInfos
console.log(imageInfoList.value)

function handleTapImage(url) {
    v3ImgPreviewFn(url)
}
</script>