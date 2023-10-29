<template>
    <div class="flex justify-start relative mt-12">
        <div class="w-2/5">
            <div class="w-full">
                <div class="flex justify-end h-80">
                    <VideoPlayerComponent :v-url="item.videoUrl" />
                </div>
            </div>
            <div class="mt-9">
                <div class="w-64 text-xs font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-xs">{{ item.size }}</div>
                <div class="text-xs">{{ item.material }}</div>
            </div>
        </div>
        <div class="w-3/5 ml-6 h-80">
            <div class="w-full h-full flex items-center">
                <span v-html="item.description"></span>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import VideoPlayerComponent from '../VideoPlayerComponent.vue';

const props = defineProps({
    itemDetail: Object
})

let item = ref({})
item = props.itemDetail

</script>
