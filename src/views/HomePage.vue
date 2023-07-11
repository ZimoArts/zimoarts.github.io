<template>
    <div class="w-full">
        <HeaderView />
        <HorizontalImageListView class="w-full mt-20" :infos="scrollImageList" />
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
