<template>
  <nav class="flex justify-between align-middle w-full">
    <div class="logo justify-self-start w-1/6"></div>
    <div class="p-2 flex row">
      <router-link to="/" class="link text-slate-950 font-medium p-2"
        >Home</router-link
      >
      <router-link to="/about" class="link text-slate-950 font-medium p-2"
        >About</router-link
      >
      <router-link to="/blog" class="link text-slate-950 font-medium p-2"
        >Blog</router-link
      >
    </div>
    <router-link
      to="/member"
      class="member p-2 link w-1/6 flex-row text-right text-slate-950"
    >
      <icon-person class="inline-block w-6 h-6" />
      Members
    </router-link>
  </nav>
</template>

<script setup>
import IconPerson from "./icons/IconPerson.vue";
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
nav {
  .link {
    transition: all 0.2s ease-in-out;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #ff5618;
      transition: width 0.2s ease-in-out;
    }

    &:hover:not(.member)::after {
      width: 100%;
    }

    &.router-link-exact-active::after {
      width: 100%;
    }
  }
}
</style>
