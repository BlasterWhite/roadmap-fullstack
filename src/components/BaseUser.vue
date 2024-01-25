<template>
  <div class="base-user flex align-middle gap-3 p-2">
    <img :src="image" alt="user" class="rounded-full w-12 h-12" />
    <div class="flex flex-col justify-center">
      <p class="text-slate-950 font-medium">{{ username }}</p>
      <p class="text-slate-950 text-sm">{{ email }}</p>
    </div>
  </div>
</template>
<script setup>
import defaultAvatar from "../assets/male_avatar.svg";
const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
});

const image = props.image || defaultAvatar;
</script>
<style scoped></style>
