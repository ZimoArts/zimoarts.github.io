<template>
    <AnimarionSplashView :class="fadeoutClass" v-on:image-click="AnimationSplashViewImageOnClick" />
    <div class="w-full" v-show="showSplashView">
        <div class="w-full flex justify-center">
            <div class="w-2/5">

            </div>
            <div class="w-3/5 bg-white">
                <div class="mt-20 mr-9">

                    <div class="w-full flex h-36 relative">
                        <div class="w-full absolute bottom-0 flex mr-9 border-b border-black">
                            <div class="h-36 w-56 pt-1">
                                <Carousel class="w-full" :autoplay="true" :initIndex="0" :indicator="false"
                                    directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.sculpture.scrollImageList"
                                        :key="index" :idx="index">
                                        <img :src="image" class="w-full hover:cursor-pointer" alt=""
                                            @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel>
                            </div>
                            <div class="w-full h-36 relative">
                                <div class="absolute bottom-0 right-0 w-sculpture transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/sculpture')">
                                    <div class="text-lg text-right">SCULPTURE</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex h-36 relative mt-4">
                        <div class="w-4/5 absolute bottom-0 right-0 flex border-b border-black">
                            <div class="h-36 w-56 pt-2">
                                <Carousel class="w-full" :autoplay="true" :initIndex="0" :indicator="false"
                                    directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.sculpture.scrollImageList"
                                        :key="index" :idx="index">
                                            <img :src="image" class="w-full hover:cursor-pointer" alt=""
                                                @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel>
                            </div>
                            <div class="w-full h-36 relative">
                                <div class="absolute bottom-0 right-0 w-photograpy transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/photography')">
                                    <div class="text-lg text-right">PHOTOGRAPHIC</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex h-36 relative mt-4">
                        <div class="w-full absolute bottom-0 flex border-b border-black">
                            <div class="h-36 w-56 pt-1">
                                <Carousel class="w-full" :autoplay="true" :initIndex="0" :indicator="false"
                                    directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.sculpture.scrollImageList"
                                        :key="index" :idx="index">
                                            <img :src="image" class="w-full hover:cursor-pointer" alt=""
                                                @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel>
                            </div>
                            <div class="w-full h-36 relative">
                                <div class="absolute bottom-0 right-0 w-dramatic transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/dramatic')">
                                    <div class="text-lg text-right">THEATER</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex h-36 relative mt-4">
                        <div class="w-4/5 absolute bottom-0 right-0 flex border-b border-black">
                            <div class="h-36 w-56 pt-2">
                                <Carousel class="w-full" :autoplay="true" :initIndex="0" :indicator="false"
                                    directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.others.scrollImageList"
                                        :key="index" :idx="index">
                                            <img :src="image" class="w-full hover:cursor-pointer" alt=""
                                                @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel>
                            </div>
                            <div class="w-full h-36 relative">
                                <div class="absolute bottom-0 right-0 w-other transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/other')">
                                    <div class="text-lg text-right">DIGITAL DESIGN (& MORE)</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <FooterView class="mt-24" />
    </div>
</template>

<script setup>
import FooterView from '../components/FooterView.vue'
import AnimarionSplashView from '../components/AnimationSplashView.vue'
import detailJson from '../assets/splash/detail.json'
import { useRouter } from 'vue-router';
import { v3ImgPreviewFn } from 'v3-img-preview'
import { ref } from 'vue';

const router = useRouter()

const showSplashView = ref(false)
const fadeoutClass = ref("")

function AnimationSplashViewImageOnClick() {
    fadeoutClass.value = "fadeout"
    showSplashView.value = true
}

function toPage(routerStr) {
    router.push(routerStr)
}

function handleTapImage(url) {
    v3ImgPreviewFn(url)
}


</script>

<style>
.fadeout {
    -webkit-animation: fadeout 1s linear forwards;
    animation: fadeout 1s linear forwards;
}

@keyframes fadeout {

    50% {
        opacity: 0.5;
    }

    90% {
        opacity: 0;
        transform: scale(4, 4);
        visibility: hidden;
    }

    100% {
        transform: scale(1, 1);
        visibility: hidden;
    }
}
</style>
