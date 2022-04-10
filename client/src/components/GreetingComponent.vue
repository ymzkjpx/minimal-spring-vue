<script setup lang="ts">

interface Props{
  msg: string
}
const props = defineProps<Props>()
</script>

<template>
 <h1>HelloWorldPage</h1>
  <p>{{props.msg}}</p>
</template>
