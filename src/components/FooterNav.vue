<template>
  <div class="text-700 text-center">
        <router-link :to="{name: 'Home'}" custom v-slot="{ navigate }">
            <Button label="Back" 
            icon="pi pi-caret-left" 
            class="mt-5 mr-3 font-bold p-button-raised white-space-nowrap p-button-success"
            @click="navigate"
            >
            </Button>
        </router-link>
        <router-link :to="{name: 'Home'}" custom v-slot="{ navigate }">
            <Button label="Reset" 
            icon="pi pi-undo" 
            class="mt-5 font-bold p-button-raised white-space-nowrap p-button-warning"
            @click="navigate"
            >
            </Button>
        </router-link>
    </div>
</template>

<script setup>
name: 'FooterNav'
import Button from 'primevue/button'
</script>

<style>

</style>