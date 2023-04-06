<script setup>
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue'
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json'
import { ref, watch } from 'vue';
import { computed } from '@vue/reactivity';

const route = useRoute()

const quizId = parseInt(route.params.id)

const quiz = quizes.find(q => q.id === quizId)

const currentQuestionIndex = ref(0)

const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
})
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" />
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]" />
        </div>
    </div>
    <button @click="currentQuestionIndex++">Next Q</button>
</template>


<style scoped></style>