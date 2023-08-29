<template>
    <div class="flex justify-start relative mt-12">
        <div class="w-5/12">
            <div class="w-full h-full pr-9 flex items-center">
                <span v-html="item.description"></span>
            </div>
        </div>
        <div class="w-7/12 h-full">
            <div class="w-full mt-9 flex justify-end">
                <img @click="handleTapImage(item.topImageLeft)" class="w-1/2 object-contain hover:cursor-pointer"
                    :src="item.topImageLeft" />
                <img @click="handleTapImage(item.topImageRight)" class="w-1/2 object-contain hover:cursor-pointer"
                    :src="item.topImageRight" />
            </div>
        </div>
    </div>
    <div class="flex justify-start relative mt-12">
        <div class="w-6/12">
            <div class="w-full mt-6">
                <div class="flex justify-start">
                    <img @click="handleTapImage(item.bottomImageLeft)" class="w-9/12 object-contain hover:cursor-pointer"
                        :src="item.bottomImageLeft" />
                </div>
            </div>
            <div class="flex justify-start">
                <div class="mt-9">
                    <div class="w-64 text-sm font-bold">{{ item.leftBottomTitle }}</div>
                    <div class="w-64 text-sm">{{ item.leftSize }}</div>
                    <div class="text-sm">{{ item.leftMaterial }}</div>
                </div>
            </div>
        </div>
        <div class="w-6/12 ml-6 h-full">
            <div class="w-full mt-6">
                <div class="flex justify-end">
                    <img @click="handleTapImage(item.bottomImageRight)" class="w-9/12 object-contain hover:cursor-pointer"
                        :src="item.bottomImageRight" />
                </div>
            </div>
            <div class="flex justify-end">
                <div class="mt-9 w-9/12">
                    <div class="w-64 text-sm font-bold">{{ item.rightBottomTitle }}</div>
                    <div class="w-64 text-sm">{{ item.rightSize }}</div>
                    <div class="text-sm">{{ item.rightMaterial }}</div>
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
