<template>
    <div class="w-full p-9">
        <HeaderView />
        <div class="w-full flex justify-center mt-28">
            <div class="border border-black">
                <span v-html="detailJson.pageTitle" class="ml-9 mr-9 pt-4 pb-4"></span>
            </div>
        </div>
        <div class="w-full flex justify-center mt-16 pl-9 pr-9">
            <span v-html="detailJson.description" class="pl-9 pr-9"></span>
        </div>
        <div class="w-full flex justify-start mt-16 mb-9 pl-9 pr-9">
            <span class="pl-9 text-xs font-bold">2022 [ 30cm x 21cm ] x 24</span>
        </div>
        <template v-for="itemDetail in itemDetailList">
            <ImageContent :image-infos="itemDetail" />
        </template>
        <div class="border-black border-b flex justify-end mt-28">
            <img class="w-28" src="../assets/black_red_dot_zimoart.png" />
        </div>
        <FooterView class="mt-20" />
    </div>
</template>

<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import ImageContent from '../components/content_image/ImageContent.vue'
import detailJson from '../assets/photography/detail.json'
import { ref } from 'vue';


const itemDetailList = ref([])
itemDetailList.value = detailJson.items

</script>
