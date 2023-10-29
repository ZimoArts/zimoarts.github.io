<template>
    <div class="mt-12">
        <div class="w-full mt-6">
            <div class="flex justify-end">
                <img @click="handleTapImage(item.topImage)" class="w-96 object-contain hover:cursor-pointer"
                    :src="item.topImage" />
            </div>
        </div>
        <div class="w-full flex items-end">
            <div class="w-5/12">
                <div class="border border-black">
                    <img @click="handleTapImage(item.mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="item.mainImage" alt="">
                </div>
            </div>
            <div class="w-7/12 ml-14">
                <div class="w-full h-72 pl-9 pr-9 pb-9 flex items-center">
                    <span v-html="item.description"></span>
                </div>
                <div class="flex pl-9 pr-9">
                    <div class="w-3/5 flex justify-start">
                        <img @click="handleTapImage(item.mainImage)" class="w-80 border border-black object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                            :src="item.mainImage" alt="">
                    </div>
                    <div class="w-2/5 flex justify-end items-end">
                        <img @click="handleTapImage(item.mainImage)" class="w-64 border border-black object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                            :src="item.mainImage" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-9">
        <div class="w-64 text-xs font-bold">{{ item.bottomTitle }}</div>
        <div class="w-64 text-xs">{{ item.size }}</div>
        <div class="text-xs">{{ item.material }}</div>
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
