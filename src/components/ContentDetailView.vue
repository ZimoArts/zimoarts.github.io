<template>
    <div class="w-full pl-9 pr-9 pt-9">
        <div class="w-64 text-lg font-bold">{{item.title}}</div>
        <div class="w-56">{{item.subTitle}}</div>
        <div class="flex justify-start mt-28">
            <div class="w-3/5 h-96 bg-gray-50"></div>
            <div class="w-2/5 ml-6">
                <div class="">{{item.description}}</div>
                <div class="flex justify-end mt-9">
                    <div class="w-3/4 h-96 bg-gray-50"></div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="w-64 text-sm font-bold">{{item.bottomTitle}}</div>
            <div class="w-64 text-sm">{{item.bottomSubTitle}}</div>
        </div>
        <div class="border-black border-b flex justify-end mt-4">
            <div class="text-2xl font-bold">ZIMOART</div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    itemDetail: Object
})

let item = ref({})
item = props.itemDetail

</script>

<style lang="scss" scoped></style>
