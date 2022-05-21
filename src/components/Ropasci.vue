<script setup>
import { reactive, ref } from 'vue'
import Button from 'primevue/button'

const emit = defineEmits(['ropasciValue'])
const props = defineProps(['disableButton'])
const ropasci = reactive(['rock', 'papper', 'scissors'])
const ropasciValue = ref([])

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const selectValue = (id) => {
    let randomBot = getRandomInt(3)
    let bot = ropasci[randomBot]
    let player = ropasci[id]
    let status = ''
    let winner = ''

    if( bot === player ){
        winner = 'no winner decided';
        status = 'draw';
    } else if ( bot === 'rock' && player === 'papper') {
        winner = 'player';
        status = 'player win';
    } else if (bot === 'rock' && player === 'scissors') {
        winner = 'bot';
        status = 'bot win';
    } else if (bot === 'papper' && player === 'rock') {
        winner = 'bot';
        status = 'bot win';
    } else if (bot === 'papper' && player === 'scissors') {
        winner = 'player';
        status = 'player win';
    } else if (bot === 'scissors' && player === 'rock') {
        winner = 'player';
        status = 'player win';
    } else if (bot === 'scissors' && player === 'papper') {
        winner = 'bot';
        status = 'bot win';
    }

    ropasciValue.value = {
        'bot': bot,
        'player' : player,
        'winner' : winner,
        'status' : status
    }
    emit('ropasciValue', ropasciValue)
}


</script>

<template>
    <div class="text-700 text-center">
        <Button 
            @click="selectValue(0)"
            label="Rock" 
            class="mr-2 p-button-raised white-space-nowrap" :disabled="props.disableButton" ></Button>
        <Button 
            @click="selectValue(1)"
            label="Papper" 
            class="mr-2 p-button-raised hite-space-nowrap" :disabled="props.disableButton" ></Button>
        <Button 
            @click="selectValue(2)"
            label="Scissor" 
            class="p-button-raised white-space-nowrap" :disabled="props.disableButton" ></Button>
    </div>
</template>

<style>

</style>