<template>
    <div class="w-full">
        <div class="w-full carousel rounded-box">
            <template v-for="info in infoList">
                <div class="carousel-item bg-white mr-6" @click="handleTapImage(info.index)">
                    <div class="w-96">
                        <img class="w-full" :src="info.url" alt="" />
                        <div class="w-full mt-9">
                            <div class="w-64 text-sm font-bold">{{ info.title }}</div>
                            <div class="w-64 text-sm">{{ info.subTitle }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <fox-preview-image v-model="showPreview" :initial-index="previewIndex" :src="previewImageSrc" z-index="9000"></fox-preview-image>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue'

const props = defineProps({
    infos: Array
})

const imagePrevewConfig = reactive({
    "urlList": []
})

const infoList = ref([])
const showPreview = ref(false)
const previewImageSrc = ref('')
const previewIndex = ref(0)


onMounted(() => {
    infoList.value = props.infos
    for (let index = 0; index < infoList.value.length; index++) {
        infoList.value[index]['index'] = index
        imagePrevewConfig.urlList.push(infoList.value[index]['url'])
    }
    previewImageSrc.value = imagePrevewConfig.urlList
})


function handleTapImage(index) {
    previewIndex.value = index
    showPreview.value = true
}

</script>
