<template>
    <div class="mt-12 mb-16">
        <div class="flex relative">
            <div class="w-3/5">
                <div class="flex justify-start">
                    <template v-for="mainImage in item.mainImageList">
                        <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer"
                            :src="mainImage" alt="">
                    </template>
                </div>
            </div>
            <div class="w-2/5 flex items-center">
                <span class="ml-9" v-html="item.description"></span>
            </div>
        </div>
        <div class="flex">
            <div class="w-3/5 flex">
                <div class="mt-9 w-3/5">
                    <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
                    <div class="w-64 text-sm">{{ item.size }}</div>
                    <div class="w-full text-sm">{{ item.material }}</div>
                </div>
            </div>
            <div class="w-2/5">
                <div class="flex justify-end mt-9">
                    <img @click="handleTapImage(item.bottomRightImage)" class="w-96 object-contain hover:cursor-pointer"
                        :src="item.bottomRightImage" />
                </div>
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
