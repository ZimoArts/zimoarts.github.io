<template>
    <div class="flex justify-start relative mt-12">
        <div class="w-8/12">
            <div class="mt-9">
                <div class="w-full h-36 pr-9 flex items-center">
                    <span v-html="item.description"></span>
                </div>
            </div>
        </div>
        <div class="w-4/12 ml-6 h-full">
            <div class="w-full mt-6">
                <div class="flex justify-end">
                    <img @click="handleTapImage(item.topImage)" class="w-full object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.topImage" />
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-start relative mt-12">
        <div class="w-9/12">
            <div class="w-full mt-6">
                <div class="flex justify-start">
                    <img @click="handleTapImage(item.bottomImage)" class="w-full object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.bottomImage" />
                </div>
            </div>
            <div class="mt-2">
                <div class="w-64 text-xs font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-xs">{{ item.size }}</div>
                <div class="text-xs">{{ item.material }}</div>
            </div>
        </div>
        <div class="w-3/12 ml-6 h-full">
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
