<template>
    <div class="w-full p-9">
        <HeaderView />
        <template v-for="itemDetail in itemDetailList">
            <ContentDetailView :item-detail="itemDetail" class="mt-28" />
        </template>
        <FooterView class="mt-20" />
    </div>
</template>

<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import ContentDetailView from '../components/ContentDetailView.vue'
import detailJson from '../assets/photography/detail.json'
import { ref } from 'vue';


let itemDetailList = ref([])
itemDetailList = detailJson.items

</script>
