<template>
    <div class="mt-12">
        <div class="w-64 text-lg font-bold">{{ item.title }}</div>
        <div class="w-56">{{ item.subTitle }}</div>
    </div>
    <div class="flex justify-start relative">
        <div class="w-2/5">
            <div class="mt-9">
                <template v-for="mainImage in item.mainImageList">
                    <img @click="handleTapImage(mainImage)" class="w-full mb-4 object-contain hover:cursor-pointer"
                        :src="mainImage" alt="">
                </template>
            </div>
        </div>
        <div class="w-3/5 ml-6 h-full">
            <div class="flex justify-end mt-6 mr-44">
                <img @click="handleTapImage(item.topImage)" class="w-44 ml-9 object-contain hover:cursor-pointer"
                    :src="item.topImage" />
            </div>
            <div class="flex">
                <div class="flex justify-start w-3/4 items-center">
                    <div class="mt-9 text-xs">{{ item.description }}</div>
                </div>
                <div class="flex justify-end w-52">
                    <img @click="handleTapImage(item.midImage)" class="w-44 ml-9 object-contain hover:cursor-pointer"
                        :src="item.midImage" />
                </div>
            </div>
            <div class="flex justify-end mr-44">
                <img @click="handleTapImage(item.bottomImage)" class="w-44 ml-9 object-contain hover:cursor-pointer"
                    :src="item.bottomImage" />
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

function handleTapImage(url) {
    v3ImgPreviewFn(url)
}


</script>
