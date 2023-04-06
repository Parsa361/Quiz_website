<script setup>
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue'
import Result from '../components/Result.vue'
import { useRoute } from 'vue-router';
import quizes from '../data/quizes.json'
import { ref } from 'vue';
import { computed } from '@vue/reactivity';

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)
const showResults = ref(false)

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)

const onOptionSelected = (isCorrect) => {
    if (isCorrect && numberOfCorrectAnswers.value < 3) {
        numberOfCorrectAnswers.value++
    }
    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true
    }
    currentQuestionIndex.value++
}
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" @selectOption="onOptionSelected"
                :question="quiz.questions[currentQuestionIndex]" />
            <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
        </div>
    </div>
</template>


<style scoped></style>