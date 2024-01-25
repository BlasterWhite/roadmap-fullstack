<template>
  <h1>Home</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
</template>
<script setup>
import { useGlobalStore } from "../stores/globalStore.js";
import { storeToRefs } from "pinia";

const store = useGlobalStore();
const { count } = storeToRefs(store);
const { increment } = store;
</script>
