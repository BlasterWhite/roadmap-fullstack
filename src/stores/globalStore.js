import { ref } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const userName = ref("John Doe");
  const userEmail = ref("john.doe@atat.com");
  const userAvatar = ref(
    "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  );

  const isUserLoggedIn = ref(true);
  return { userName, userEmail, userAvatar, isUserLoggedIn };
});
