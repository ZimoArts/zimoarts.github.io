<template>
    <div class="w-full h-36 flex justify-start border-b border-black">
        <div class="relative w-full mb-2">
            <div class="absolute bottom-0 left-9 text-lg">ZIMOART</div>
            <div class="absolute bottom-0 right-9 text-2xl flex justify-end items-center">
                <router-link to="/sculpture" class="pr-6 h-8 hover:cursor-pointer">SCULPTURE</router-link>
                <div class="w-1.5 h-6 bg-black mr-6"></div>
                <router-link to="/photography" class="pr-6 h-8 hover:cursor-pointer">PHOTOGRAPHIC WORKS</router-link>
                <div class="w-1.5 h-6 bg-black mr-6"></div>
                <router-link to="/dramatic" class="pr-6 h-8 hover:cursor-pointer">DRAMATIC WORK</router-link>
                <div class="w-1.5 h-6 bg-black mr-6"></div>
                <router-link to="/other" class="pr-6 h-8 hover:cursor-pointer">OTHER</router-link>
            </div>
        </div>
    </div>
</template>

