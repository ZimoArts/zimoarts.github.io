<template>
    <div class="w-full h-44 flex justify-start border-b border-black">
        <div class="relative w-full mb-2">
            <router-link to="/" class="absolute -bottom-2 left-9 text-lg hover:cursor-pointer">
                <img class="w-96" src="../assets/header_icon.png" alt="">
            </router-link>
            <div class="absolute bottom-0 right-9 text-2xl flex justify-end items-center">
                <router-link to="/sculpture" class="pr-6 h-8 hover:cursor-pointer">SCULPTURE</router-link>
                <div class="w-1.5 h-6 bg-black mr-6"></div>
                <router-link to="/photography" class="pr-6 h-8 hover:cursor-pointer">PHOTOGRAPHY WORK</router-link>
                <div class="w-1.5 h-6 bg-black mr-6"></div>
                <router-link to="/dramatic" class="pr-6 h-8 hover:cursor-pointer">PERFORMANCE ART</router-link>
                <div class="w-1.5 h-6 bg-black mr-6"></div>
                <router-link to="/other" class="pr-6 h-8 hover:cursor-pointer">MORE</router-link>
            </div>
        </div>
    </div>
    <FixHeaderMenu v-show="showBottomMenu" class="sticky top-0" />
</template>

<script setup>
import { ref } from 'vue';
import FixHeaderMenu from './FixHeaderMenu.vue';


let showBottomMenu = ref(false)
const handlerScroll = (_event) => {
    const offSetY = window.pageYOffset
    if (offSetY >= 216) {
        showBottomMenu.value = true
    } else {
        showBottomMenu.value = false
    }
}

window.addEventListener("scroll", handlerScroll, true)


</script>
