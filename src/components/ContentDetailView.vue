<template>
    <div class="w-full pl-9 pr-9 pt-9">
        <div class="w-64 text-lg font-bold">history student and artist, I’ve always been interested in using historica</div>
        <div class="w-56">history student and artist, I’ve always beenhistory student and artist, I’ve always been</div>
        <div class="flex justify-start mt-28">
            <div class="w-3/5 h-96 bg-gray-50"></div>
            <div class="w-2/5 ml-6">
                <div class="">
                    view every school like a different box. Students are forced to be placed into these boxes so
                    that schools can evaluate their success with various standards. For example, to put yourself into the
                    “Ivy” box, you need a good SAT score, a high GPA, good activities, and maybe a wealthy or successful
                    parent. Even if you have all that, you need some luck. However, most of the time, what’s written on the
                    resume or application of an applicant isn’t who one really is. There are additional unwritten qualities
                    in each person that makes them a separate and special individual. To me, education means more than just
                    putting oneself into boxes.
                </div>
                <div class="flex justify-end mt-9">
                    <div class="w-3/4 h-96 bg-gray-50"></div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="w-64 text-sm font-bold">ve seen my friends</div>
            <div class="w-64 text-sm">
                [ 20 in. x 10 in. ]
                I’ve seen my friends choosing
                to take the hardest AP 2022
            </div>
        </div>
        <div class="border-black border-b flex justify-end mt-4">
            <div class="text-2xl font-bold">ZIMOART</div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    mainImage: String,
    subImages: Array
})
let subImageList = ref([])
subImageList = props.subImageList
let mainImageStr = ref("")

</script>

<style lang="scss" scoped></style>
