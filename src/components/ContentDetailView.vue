<template>
    <div class="w-full pt-9">
        <div v-if="contentType == 1">
            <ContentType1 :item-detail="item" />
        </div>
        <div v-if="contentType == 2">
            <ContentType2 :item-detail="item" />
        </div>
        <div v-if="contentType == 3">
            <ContentType3 :item-detail="item" />
        </div>
        <div v-if="contentType == 4">
            <ContentType4 :item-detail="item" />
        </div>
        <div v-if="contentType == 5">
            <ContentType5 :item-detail="item" />
        </div>
        <div v-if="contentType == 6">
            <ContentType6 :item-detail="item" />
        </div>
        <div v-if="contentType == 7">
            <ContentType7 :item-detail="item" />
        </div>
        <div v-if="contentType == 8">
            <ContentType8 :item-detail="item" />
        </div>
        <div v-if="contentType == 9">
            <ContentType9 :item-detail="item" />
        </div>
        <div v-if="contentType == 10">
            <ContentType10 :item-detail="item" />
        </div>
        <div v-if="contentType == 11">
            <ContentType11 :item-detail="item" />
        </div>
        <div v-if="contentType == 12">
            <ContentType12 :item-detail="item" />
        </div>
        <div v-if="contentType == 13">
            <ContentType13 :item-detail="item" />
        </div>
        <div v-if="contentType == 14">
            <ContentType14 :item-detail="item" />
        </div>
        <div v-if="contentType == 15">
            <ContentType15 :item-detail="item" />
        </div>
        <div v-if="contentType == 16">
            <ContentType16 :item-detail="item" />
        </div>
        <div v-if="contentType == 17">
            <ContentType17 :item-detail="item" />
        </div>
        <div v-if="contentType == 18">
            <ContentType18 :item-detail="item" />
        </div>
        <div v-if="contentType == 19">
            <ContentType19 :item-detail="item" />
        </div>
        <div v-if="contentType == 20">
            <ContentType20 :item-detail="item" />
        </div>
        <div v-if="contentType == 21">
            <ContentType21 :item-detail="item" />
        </div>
        <div v-if="contentType == 22">
            <ContentType22 :item-detail="item" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ContentType1 from '../components/content_detail/ContentType1.vue'
import ContentType2 from '../components/content_detail/ContentType2.vue'
import ContentType3 from '../components/content_detail/ContentType3.vue'
import ContentType4 from '../components/content_detail/ContentType4.vue'
import ContentType5 from '../components/content_detail/ContentType5.vue'
import ContentType6 from '../components/content_detail/ContentType6.vue'
import ContentType7 from '../components/content_detail/ContentType7.vue'
import ContentType8 from '../components/content_detail/ContentType8.vue'
import ContentType9 from '../components/content_detail/ContentType9.vue'
import ContentType10 from '../components/content_detail/ContentType10.vue'
import ContentType11 from '../components/content_detail/ContentType11.vue'
import ContentType12 from '../components/content_detail/ContentType12.vue'
import ContentType13 from '../components/content_detail/ContentType13.vue'
import ContentType14 from '../components/content_detail/ContentType14.vue'
import ContentType15 from '../components/content_detail/ContentType15.vue'
import ContentType16 from '../components/content_detail/ContentType16.vue'
import ContentType17 from '../components/content_detail/ContentType17.vue'
import ContentType18 from '../components/content_detail/ContentType18.vue'
import ContentType19 from '../components/content_detail/ContentType19.vue'
import ContentType20 from '../components/content_detail/ContentType20.vue'
import ContentType21 from '../components/content_detail/ContentType21.vue'
import ContentType22 from '../components/content_detail/ContentType22.vue'

const props = defineProps({
    itemDetail: Object
})

const item = ref({})
item.value = props.itemDetail

const contentType = ref(0)
contentType.value = item.value.type

</script>

<style lang="scss" scoped></style>
