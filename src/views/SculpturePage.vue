<template>
    <div class="w-full pl-9 pr-9">
        <HeaderView class="mb-28" />
        <template v-for="itemDetail in itemDetailList">
            <ContentDetailView :item-detail="itemDetail" class="mb-28" />
        </template>
        <FooterView class="mt-20" />
    </div>
</template>

<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import ContentDetailView from '../components/ContentDetailView.vue'
import detailJson from '../assets/sculpture/detail.json'
import { ref } from 'vue';


let itemDetailList = ref([])
itemDetailList = detailJson.items

</script>
