<template>
    <div class="w-full pt-9">
        <div v-if="contentType == 1">
            <ContentTypeOne :item-detail="item" />
        </div>
        <div v-if="contentType == 2">
            <ContentTypeTwo :item-detail="item" />
        </div>
        <div v-if="contentType == 3">
            <ContentTypeThree :item-detail="item" />
        </div>
        <div v-if="contentType == 4">
            <ContentTypeFour :item-detail="item" />
        </div>
        <div v-if="contentType == 5">
            <ContentTypeFive :item-detail="item" />
        </div>
        <div v-if="contentType == 6">
            <ContentTypeSix :item-detail="item" />
        </div>
        <div v-if="contentType == 7">
            <ContentTypeSeven :item-detail="item" />
        </div>
        <div v-if="contentType == 8">
            <ContentTypeEight :item-detail="item" />
        </div>
        <div v-if="contentType == 9">
            <ContentTypeNine :item-detail="item" />
        </div>
        <div v-if="contentType == 10">
            <ContentTypeTen :item-detail="item" />
        </div>
        <div v-if="contentType == 11">
            <ContentTypeEleven :item-detail="item" />
        </div>
        <div v-if="contentType == 12">
            <ContentTypeTwelve :item-detail="item" />
        </div>
        <div class="border-black border-b flex justify-end mt-28">
            <!-- <img class="w-28" src="../assets/black_zimoart.png" /> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ContentTypeOne from '../components/content_detail/ContentTypeOne.vue'
import ContentTypeTwo from '../components/content_detail/ContentTypeTwo.vue'
import ContentTypeThree from '../components/content_detail/ContentTypeThree.vue'
import ContentTypeFour from '../components/content_detail/ContentTypeFour.vue'
import ContentTypeFive from '../components/content_detail/ContentTypeFive.vue'
import ContentTypeSix from '../components/content_detail/ContentTypeSix.vue'
import ContentTypeSeven from '../components/content_detail/ContentTypeSeven.vue'
import ContentTypeEight from '../components/content_detail/ContentTypeEight.vue'
import ContentTypeNine from '../components/content_detail/ContentTypeNine.vue'
import ContentTypeTen from '../components/content_detail/ContentTypeTen.vue'
import ContentTypeEleven from '../components/content_detail/ContentTypeEleven.vue'
import ContentTypeTwelve from '../components/content_detail/ContentTypeTwelve.vue'

const props = defineProps({
    itemDetail: Object
})

const item = ref({})
item.value = props.itemDetail

const contentType = ref(0)
contentType.value = item.value.type

</script>

<style lang="scss" scoped></style>
