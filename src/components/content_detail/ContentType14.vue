<template>
    <div class="flex justify-start relative mt-12">
        <div class="w-2/5">
            <div class="w-full h-full mt-32 flex pr-8">
                <span v-html="item.description"></span>
            </div>
        </div>
        <div class="w-3/5 h-full">
            <div class="w-full mt-6">
                <div class="flex justify-end">
                    <template v-for="mainImage in item.mainImageList">
                        <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                            :src="mainImage" alt="">
                    </template>
                </div>
            </div>
            <div class="mt-2">
                <div class="w-64 text-xs font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-xs">{{ item.size }}</div>
                <div class="text-xs">{{ item.material }}</div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import { v3ImgPreviewFn } from 'v3-img-preview'

const props = defineProps({
    itemDetail: Object
})

let item = ref({})
const contentType = ref(0)
item = props.itemDetail
contentType.value = item.type

const hasTitleImageImage = ref(false)
if (item.titleImage != "") {
    hasTitleImageImage.value = true
}

function handleTapImage(url) {
    v3ImgPreviewFn(url)
}


</script>
