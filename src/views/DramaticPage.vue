<template>
    <div class="w-full">
        <HeaderView data-theme="light" />
        <div class="w-full" data-theme="black">
            <template v-for="itemDetail in itemDetailList">
                <ContentDetailView :item-detail="itemDetail" class="mb-28 pl-9 pr-9" />
            </template>
        </div>
        <FooterView class="mt-20" data-theme="light" />
    </div>
</template>

<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import ContentDetailView from '../components/ContentDetailView.vue'
import detailJson from '../assets/dramatic/detail.json'
import { ref } from 'vue';


let itemDetailList = ref([])
itemDetailList = detailJson.items

</script>
