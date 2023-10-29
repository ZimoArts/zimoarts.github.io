<template>
    <div class="flex justify-start relative mt-12">
        <div class="w-7/12">
            <div class="mt-9">
                <div class="w-full h-96 pr-9 flex items-center">
                    <span v-html="item.description"></span>
                </div>
            </div>
            <div class="w-full mt-6">
                <div class="flex justify-end">
                    <img @click="handleTapImage(item.leftImage)" class="w-full object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.leftImage" />
                </div>
            </div>
            <div class="pl-10 flex justify-start">
                <div class="mt-9">
                    <div class="w-64 text-xs font-bold">{{ item.leftBottomTitle }}</div>
                    <div class="w-64 text-xs">{{ item.leftSize }}</div>
                    <div class="text-xs">{{ item.leftMaterial }}</div>
                </div>
            </div>
        </div>
        <div class="w-5/12 pl-6 h-full">
            <template v-for="image in item.rightImageList">
                <img @click="handleTapImage(image)" class="w-full object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150" :src="image" />
            </template>
            <div class="pl-10 flex justify-start">
                <div class="mt-9">
                    <div class="w-64 text-xs font-bold">{{ item.rightBottomTitle }}</div>
                    <div class="w-64 text-xs">{{ item.rightSize }}</div>
                    <div class="text-xs">{{ item.rightMaterial }}</div>
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
