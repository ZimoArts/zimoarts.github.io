<template>
    <!-- <AnimarionSplashView :class="fadeoutClass" v-on:image-click="AnimationSplashViewImageOnClick" /> -->
    <div class="w-full pl-9 pr-9" v-show="showSplashView">
        <div class="w-full flex justify-center">
            <div class="w-1/2">
                <div class="w-11/12 mt-9 h-36">
                    <img class="w-64" src="../assets/black_red_dot_zimoart.png" alt="">
                </div>
                <!-- dramatic -->
                <div class="w-11/12 flex h-36 mt-9">
                    <div class="w-full flex items-center">
                        <div class="w-full relative border-b border-black">
                            <div class="absolute bottom-0 left-0  w-dramatic transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                @click="toPage('/dramatic')">
                                <div class="text-lg text-left">Performance Art</div>
                                <div class="h-2 bg-black"></div>
                            </div>
                        </div>
                        <div class="flex items-center border border-black">
                            <!-- <Carousel :autoplay="true" :initIndex="0" :indicator="false" directionMode="hover">
                                <CarouselItem v-for="(item, index) in detailJson.navs.dramatic1.scrollItemList" :key="index"
                                    :idx="index">
                                    <VideoPlayerComponent style="height: 142px; width: 211px;"
                                        :v-url="item" />
                                </CarouselItem>
                            </Carousel> -->
                            <VideoPlayerComponent style="width: 280px; height: 172px;"
                                :v-url="detailJson.navs.dramatic1.scrollItemList[0]" />
                        </div>
                    </div>
                </div>
                <div class="w-11/12 flex h-36 mt-28">
                    <div class="w-full flex items-center">
                        <div class="w-full relative border-b border-black">
                            <div class="absolute bottom-0 left-0  w-interview transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                @click="toPage('/dramatic')">
                                <div class="text-lg text-left">Interview: The Dreamers & Influencer</div>
                                <div class="h-2 bg-black"></div>
                            </div>
                        </div>
                        <div class="flex items-center border border-black">
                            <!-- <Carousel :autoplay="true" :initIndex="0" :indicator="false" directionMode="hover">
                                <CarouselItem v-for="(item, index) in detailJson.navs.dramatic2.scrollItemList" :key="index"
                                    :idx="index">
                                    <VideoPlayerComponent class="border border-black mt-3"
                                        style="height: 408px; width: 680px;" :v-url="item" />
                                </CarouselItem>
                            </Carousel> -->
                            <VideoPlayerComponent style="width: 280px; height: 172px;"
                                :v-url="detailJson.navs.dramatic2.scrollItemList[0]" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 bg-white">
                <div class="mt-20">
                    <!-- sculpture -->
                    <div class="w-full flex h-36 relative">
                        <div class="w-full flex items-center">
                            <div class="flex items-center border border-black">
                                <Carousel style="width: 280px; height: 172px;" :autoplay="true" :initIndex="0"
                                    :indicator="false" directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.sculpture.scrollImageList"
                                        :key="index" :idx="index">
                                        <img :src="image" class="w-full hover:cursor-pointer object-contain" alt=""
                                            @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel>
                            </div>
                            <div class="w-full relative bottom-0 flex border-b border-black">
                                <div class="absolute bottom-0 right-0 w-sculpture transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/sculpture')">
                                    <div class="text-lg text-right">Sculpture</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- photography -->
                    <div class="w-full flex h-36 relative mt-28">
                        <div class="w-full flex items-center">
                            <div class="flex items-center border border-black">
                                <Carousel style="width: 280px; height: 172px;" :autoplay="true" :initIndex="0"
                                    :indicator="false" directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.photography.scrollImageList"
                                        :key="index" :idx="index">
                                        <img :src="image" class="hover:cursor-pointer object-contain" alt=""
                                            @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel>
                            </div>
                            <div class="w-full relative bottom-0 right-0 border-b border-black">
                                <div class="absolute bottom-0 right-0 w-photograpy transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/photography')">
                                    <div class="text-lg text-right">Photography</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- others -->
                    <div class="w-full flex h-36 relative mt-28">
                        <div class="w-full flex items-center">
                            <div class="flex items-center border border-black">
                                <!-- <Carousel style="width: 280px; height: 172px;" :autoplay="true" :initIndex="0"
                                    :indicator="false" directionMode="hover">
                                    <CarouselItem v-for="(image, index) in detailJson.navs.others.scrollImageList"
                                        :key="index" :idx="index">
                                        <img :src="image" class="w-full hover:cursor-pointer object-contain" alt=""
                                            @click="handleTapImage(image)" />
                                    </CarouselItem>
                                </Carousel> -->
                                <VideoPlayerComponent style="width: 280px; height: 172px;"
                                    :v-url="detailJson.navs.others.videoUrl" />

                            </div>
                            <div class="w-full relative bottom-0 right-0 border-b border-black">
                                <div class="absolute bottom-0 right-0 w-other transition-all duration-1000 ease-in-out hover:w-full hover:cursor-pointer"
                                    @click="toPage('/other')">
                                    <div class="text-lg text-right">Digital Design(&others)</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex mt-64">
            <div class="w-2/5 flex justify-center">
                <img @click="handleTapImage(detailJson.about.mainImageUrl)"
                    class="w-3/4 object-cover hover:cursor-pointer hover:scale-110 ease-in-out duration-300 delay-150"
                    :src="detailJson.about.mainImageUrl" />

            </div>
            <div class="w-3/5">
                <div class="w-full flex justify-center">
                    <p v-html="detailJson.about.description"></p>
                </div>
                <div class="w-full flex justify-end mt-16">
                    <div class="text-3xl">zimo</div>
                </div>
            </div>
        </div>
        <FooterView class="mt-24 pl-9 pr-9" />
    </div>
</template>

<script setup>
import FooterView from '../components/FooterView.vue'
// import AnimarionSplashView from '../components/AnimationSplashView.vue'
import detailJson from '../assets/home/detail.json'
import { useRouter } from 'vue-router';
import { v3ImgPreviewFn } from 'v3-img-preview'
import { ref } from 'vue';
import VideoPlayerComponent from '../components/VideoPlayerComponent.vue';

const router = useRouter()

const showSplashView = ref(true)
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
