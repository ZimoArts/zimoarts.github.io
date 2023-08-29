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
                    <img @click="handleTapImage(item.topRightImage)" class="w-full object-contain hover:cursor-pointer"
                        :src="item.topRightImage" />
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center relative mt-12">
        <div class="w-full flex justify-start relative mt-12">
            <div class="w-3/4">
                <img @click="handleTapImage(item.lineOneImageList[0].imageUrl)" class="object-contain hover:cursor-pointer"
                    :src="item.lineOneImageList[0].imageUrl" alt="">
                <div class="mt-1 ml-7">
                    <div class="text-sm font-bold">{{ item.lineOneImageList[0].title }}</div>
                    <div class="text-sm">{{ item.lineOneImageList[0].size }}</div>
                    <div class="text-sm">{{ item.lineOneImageList[0].material }}</div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center relative mt-12">
            <div class="w-3/4">
                <img @click="handleTapImage(item.lineOneImageList[1].imageUrl)" class="object-contain hover:cursor-pointer"
                    :src="item.lineOneImageList[1].imageUrl" alt="">
                <div class="mt-1 ml-7">
                    <div class="text-sm font-bold">{{ item.lineOneImageList[1].title }}</div>
                    <div class="text-sm">{{ item.lineOneImageList[1].size }}</div>
                    <div class="text-sm">{{ item.lineOneImageList[1].material }}</div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-end relative mt-12">
            <div class="w-3/4">
                <img @click="handleTapImage(item.lineOneImageList[2].imageUrl)" class="object-contain hover:cursor-pointer"
                    :src="item.lineOneImageList[2].imageUrl" alt="">
                <div class="mt-1 ml-7">
                    <div class="text-sm font-bold">{{ item.lineOneImageList[2].title }}</div>
                    <div class="text-sm">{{ item.lineOneImageList[2].size }}</div>
                    <div class="text-sm">{{ item.lineOneImageList[2].material }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center relative mt-12">
        <div class="w-full flex justify-start relative mt-12">
            <div class="w-3/4">
                <img @click="handleTapImage(item.lineTwoImageList[0].imageUrl)" class="object-contain hover:cursor-pointer"
                    :src="item.lineTwoImageList[0].imageUrl" alt="">
                <div class="mt-1 ml-7">
                    <div class="text-sm font-bold">{{ item.lineTwoImageList[0].title }}</div>
                    <div class="text-sm">{{ item.lineTwoImageList[0].size }}</div>
                    <div class="text-sm">{{ item.lineTwoImageList[0].material }}</div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center relative mt-12">
            <div class="w-3/4">
                <img @click="handleTapImage(item.lineTwoImageList[1].imageUrl)" class="object-contain hover:cursor-pointer"
                    :src="item.lineTwoImageList[1].imageUrl" alt="">
                <div class="mt-1 ml-7">
                    <div class="text-sm font-bold">{{ item.lineTwoImageList[1].title }}</div>
                    <div class="text-sm">{{ item.lineTwoImageList[1].size }}</div>
                    <div class="text-sm">{{ item.lineTwoImageList[1].material }}</div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-end relative mt-12">
            <div class="w-3/4">
                <img @click="handleTapImage(item.lineTwoImageList[2].imageUrl)" class="object-contain hover:cursor-pointer"
                    :src="item.lineTwoImageList[2].imageUrl" alt="">
                <div class="mt-1 ml-7">
                    <div class="text-sm font-bold">{{ item.lineTwoImageList[2].title }}</div>
                    <div class="text-sm">{{ item.lineTwoImageList[2].size }}</div>
                    <div class="text-sm">{{ item.lineTwoImageList[2].material }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full flex">
        <div class="w-6/12 flex justify-start">
            <div class="w-3/4 flex justify-start">
                <img @click="handleTapImage(item.bottomRightImage)" class="w-full object-contain hover:cursor-pointer"
                    :src="item.bottomRightImage" />
            </div>
        </div>
        <div class="w-6/12 flex justify-end">
            <div class="w-3/4 flex justify-end">
                <img @click="handleTapImage(item.bottomLeftImage)" class="w-full object-contain hover:cursor-pointer"
                    :src="item.bottomLeftImage" />
            </div>
        </div>
    </div>
    <div class="w-full flex justify-end">
        <div class="mt-1 mr-9">
            <div class="text-sm font-bold">{{ item.bottomTitle }}</div>
            <div class="text-sm">{{ item.bottomSize }}</div>
            <div class="text-sm">{{ item.bottomMaterial }}</div>
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
