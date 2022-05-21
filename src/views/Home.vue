<script setup>
import Button from 'primevue/button'
</script>

<template>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div class="text-700 text-center">
            <div class="text-900 font-bold text-5xl mb-3">RO PA SCI</div>
            <div class="text-700 text-2xl mb-5">rock - paper - scissors </div>
            
            <router-link :to="{name: 'Bot'}" custom v-slot="{ navigate }">
                <Button label="vs Bot" 
                icon="pi pi-caret-right" 
                class="mb-3 font-bold p-button-raised white-space-nowrap"
                @click="navigate"
                >
                </Button>
            </router-link>
            <br>
            <router-link :to="{name: 'Duel'}" custom v-slot="{ navigate }">
                <Button label="Duel with Player" 
                icon="pi pi-caret-right" 
                class="mb-5 font-bold p-button-raised white-space-nowrap"
                @click="navigate"
                >
                </Button>
            </router-link>
            <br>
            <Button label="Info" icon="pi pi-info" class="p-button-outlined white-space-nowrap"></Button>
        </div>
    </div>
</template>

<style>

</style>