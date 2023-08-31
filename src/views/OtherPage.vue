<template>
    <div class="w-full p-9">
        <HeaderView />
        <template v-for="itemDetail in itemDetailList">
            <ContentDetailView :item-detail="itemDetail" class="mt-28" />
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
import ContentDetailView from '../components/ContentDetailView.vue'
import detailJson from '../assets/others/detail.json'
import { ref } from 'vue';


let itemDetailList = ref([])
itemDetailList = detailJson.items

</script>
