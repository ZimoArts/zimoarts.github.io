<template>
    <iframe style="border: none;" class="w-full h-full" :src="videoUrl" allowfullscreen></iframe>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
    vUrl: String
});

const videoUrl = ref('')
videoUrl.value = props.vUrl

const formatVideoUrl = () => {
    if (videoUrl.value !== undefined && videoUrl.value !== null && (videoUrl.value.includes('youtube') || videoUrl.value.includes('youtu'))) {
        let urlArray = videoUrl.value.split('/embed/')
        let surl = urlArray[1]
        let loopParam = "&playlist=" + surl
        videoUrl.value = videoUrl.value + "?autoplay=1&mute=1&loop=1" + loopParam
    }
}

formatVideoUrl()
console.log(videoUrl.value)


</script>
