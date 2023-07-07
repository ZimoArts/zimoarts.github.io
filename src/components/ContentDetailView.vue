<template>
    <div class="w-full pl-9 pr-9 pt-9">
        <template v-if="imageListCount == 1">
            <div class="w-64 text-lg font-bold">{{ item.title }}</div>
            <div class="w-56">{{ item.subTitle }}</div>
            <div class="flex justify-start mt-28">
                <div class="w-3/5">
                    <template v-for="mainImage in item.mainImageList">
                        <img class="w-full mb-4" :src="mainImage" alt="">
                    </template>
                </div>
                <div class="w-2/5 ml-6">
                    <div class="relative h-full">
                        <div class="">{{ item.description }}</div>
                        <div class="absolute bottom-4 right-0">
                            <div class="flex justify-end mt-9">
                                <template v-for="image in item.imageList">
                                    <img class="w-3/4 bg-gray-50" :src="image" />
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-9">
                <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-sm">{{ item.bottomSubTitle }}</div>
            </div>
        </template>
        <template v-if="imageListCount == 2">
            <div class="w-64 text-lg font-bold">{{ item.title }}</div>
            <div class="w-56">{{ item.subTitle }}</div>
            <div class="flex justify-start mt-28">
                <div class="w-3/5">
                    <template v-for="mainImage in item.mainImageList">
                        <img class="w-full mb-4" :src="mainImage" alt="">
                    </template>
                </div>
                <div class="w-2/5 ml-6">
                    <div class="relative h-full">
                        <div class="">{{ item.description }}</div>
                        <div class="absolute bottom-4 right-0">
                            <div class="flex justify-end mt-9">
                                <template v-for="image in item.imageList">
                                    <img class="w-64 ml-3" :src="image" />
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-9">
                <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-sm">{{ item.bottomSubTitle }}</div>
            </div>
        </template>
        <template v-if="imageListCount >= 3">
            <div class="w-64 text-lg font-bold">{{ item.title }}</div>
            <div class="w-56">{{ item.subTitle }}</div>
            <div class="flex justify-start mt-28">
                <div class="w-2/5">
                    <template v-for="mainImage in item.mainImageList">
                        <img class="w-full mb-4" :src="mainImage" alt="">
                    </template>
                </div>
                <div class="w-3/5 ml-6">
                    <div class="relative h-full">
                        <div class="">{{ item.description }}</div>
                        <div class="absolute bottom-4 right-0">
                            <div class="flex justify-end">
                                <template v-for="image in item.imageList">
                                    <img class="w-64 ml-3" :src="image" />
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-9">
                <div class="w-64 text-sm font-bold">{{ item.bottomTitle }}</div>
                <div class="w-64 text-sm">{{ item.bottomSubTitle }}</div>
            </div>
        </template>
        <div class="border-black border-b flex justify-end mt-4">
            <div class="text-2xl font-bold">ZIMOART</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    itemDetail: Object
})

let item = ref({})
let imageListCount = ref(0)
item = props.itemDetail
imageListCount = item.imageList.length

</script>

<style lang="scss" scoped></style>
