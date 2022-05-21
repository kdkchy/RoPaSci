<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import FooterNav from '@/components/FooterNav.vue'
import Ropasci from '@/components/Ropasci.vue'
import ProgressSpinner from 'primevue/progressspinner';

const reveal = ref(false)
const ropasciValue = ref([])

const getValueRoPaSci = (value) => {
    reveal.value = true
    ropasciValue.value = value.value
    // setTimeout(() => {
    //     reveal.value = false
    // }, "2000")
}


</script>

<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-700 text-center">
            <div class="text-900 font-bold text-5xl mb-3">vs BOT</div>
            <div class="text-700 text-2xl mb-5">rock - paper - scissors </div>
        </div>

        <div class="card mb-5" @click="reveal = false">
            <div class="flex flex-row flex-wrap align-items-center justify-content-center card-container ">
                <div v-if="!reveal" class="h-24rem w-24rem border-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
                    <div class="">
                        <ProgressSpinner 
                            style="width:50px;height:50px"
                            strokeWidth="8" 
                            fill="var(--surface-ground)" 
                            animationDuration=".5s"/>
                    </div>
                </div>

                <div v-if="reveal" class="h-24rem w-24rem border-500 surface-overlay border-3 border-round font-bold m-2 flex align-items-center justify-content-center flex align-items-center justify-content-center" style="min-width: 200px; min-height: 100px">
                    <div class="text-center">
                        <h3 class="mb-1">{{ ropasciValue.player }}</h3><span class="mb-1">vs</span><h3 class="mt-1">{{ ropasciValue.bot }}</h3>
                        <h1>{{ ropasciValue.status }}</h1>
                    </div>
                </div>
            </div>
        </div>

        <Ropasci @ropasciValue="getValueRoPaSci" :disableButton="reveal"></Ropasci>
        <FooterNav></FooterNav>
    </div>
</template>

<style>

</style>