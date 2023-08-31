<template>
    <div class="w-full p-9">
        <HeaderView />
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
