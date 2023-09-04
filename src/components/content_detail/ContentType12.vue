<template>
    <div class="mt-12 mb-9">
        <div class="text-lg font-bold">{{ item.title }}</div>
        <div class="w-72">{{ item.subTitle }}</div>
    </div>
    <div class="flex justify-start relative mt-12">
        <div class="w-2/5">
            <div class="mt-9">
                <template v-for="mainImage in item.mainImageList">
                    <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                        :src="mainImage" alt="">
                </template>
            </div>
        </div>
        <div class="w-3/5 ml-6 flex">
            <div class="w-3/5 mt-6 flex items-center">
                <span v-html="item.description"></span>
            </div>
            <div class="w-2/5">
                <div class="w-full mt-6">
                    <div class="flex justify-end">
                        <img @click="handleTapImage(item.topImage)" class="w-64 ml-9 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                            :src="item.topImage" />
                    </div>
                </div>
                <div class="w-full mb-4">
                    <div class="absolute bottom-0 right-0 flex">
                        <img @click="handleTapImage(item.bottomImage)" class="w-64 ml-9 object-contain hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                            :src="item.bottomImage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-9">
        <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
        <div class="w-64 text-sm">{{ item.size }}</div>
        <div class="w-2/5 text-sm">{{ item.material }}</div>
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
