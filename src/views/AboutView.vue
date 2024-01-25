<template>
  <h1>About</h1>
  <p>Count: {{ count }}</p>
</template>
<script setup>
import { useGlobalStore } from "../stores/globalStore.js";
import { storeToRefs } from "pinia";

const store = useGlobalStore();
const { count } = storeToRefs(store);
</script>
