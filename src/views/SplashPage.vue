<template>
    <div class="w-full">
        <div class="w-full flex justify-center">
            <div class="w-2/5">

            </div>
            <div class="w-3/5 bg-white">
                <div class="mt-20 mr-9">

                    <div class="w-full flex h-36 relative">
                        <div class="w-full absolute bottom-0 flex mr-9 border-b border-black">
                            <div class="h-28 w-56 bg-black">
                            </div>
                            <div class="w-full h-28 relative">
                                <div class="absolute bottom-0 right-0 hover:cursor-pointer" @click="toPage('/sculpture')">
                                    <div class="text-lg text-right">SCULPTURE</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex h-36 relative">
                        <div class="w-4/5 absolute bottom-0 right-0 flex border-b border-black">
                            <div class="h-28 w-56 bg-black">
                            </div>
                            <div class="w-full h-28 relative">
                                <div class="absolute bottom-0 right-0 hover:cursor-pointer" @click="toPage('/photography')">
                                    <div class="text-lg text-right">PHOTOGRAPHIC WORKS</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex h-36 relative">
                        <div class="w-full absolute bottom-0 flex border-b border-black">
                            <div class="h-28 w-56 bg-black">
                            </div>
                            <div class="w-full h-28 relative">
                                <div class="absolute bottom-0 right-0 hover:cursor-pointer" @click="toPage('/dramatic')">
                                    <div class="text-lg text-right">DRAMATIC WORK</div>
                                    <div class="h-2 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex h-36 relative">
                        <div class="w-4/5 absolute bottom-0 right-0 flex border-b border-black">
                            <div class="h-28 w-56 bg-black">
                            </div>
                            <div class="w-full h-28 relative">
                                <div class="absolute bottom-0 right-0 hover:cursor-pointer" @click="toPage('/other')">
                                    <div class="text-lg text-right">OTHERS</div>
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
import { useRouter } from 'vue-router';

const router = useRouter()


function toPage(routerStr) {
    router.push(routerStr)
}

</script>

