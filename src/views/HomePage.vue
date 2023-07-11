<template>
    <div class="w-full">
        <HeaderView />
        <div class="w-full mt-24">
            <HorizontalImageListView :infos="scrollImageList" />
        </div>
        <FooterView class="mt-20" />
    </div>
</template>

<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import HorizontalImageListView from '../components/HorizontalImageListView.vue';
import detailJson from '../assets/home/detail.json'
import { ref } from 'vue';


let scrollImageList = ref([])
scrollImageList = detailJson.scrollImageList


</script>
