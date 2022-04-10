<script setup lang="ts">
import Greeting from '@/components/GreetingComponent.vue'
import {ref} from "vue";

const msg = ref("Hi Hello World")
</script>

<template>
  <h2>HelloWorldPage.</h2>
  <Greeting :msg="msg"/>
</template>

