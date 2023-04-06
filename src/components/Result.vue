<script setup>
import { RouterLink } from 'vue-router'
const { quizQuestionLength, numberOfCorrectAnswers } = defineProps(['quizQuestionLength', 'numberOfCorrectAnswers'])
</script>


<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
    </div>
    <RouterLink to="/" class="btn">Home</RouterLink>
</template>


<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 15px 30px;
    background-color: bisque;
    opacity: 0.7;
    border-radius: 10px;
    margin: 0 auto;
}
</style>