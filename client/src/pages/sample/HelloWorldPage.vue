<script setup lang="ts">
import HelloWorld from '@/components/HelloWorldComponent.vue'
import {onMounted, ref} from "vue";

const msg = ref("")
onMounted(()=>{
  msg.value = "Hi"
})
</script>

<template>
  <HelloWorld :msg="msg"/>
</template>

