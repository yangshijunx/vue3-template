import { createPinia, defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { GlobalState } from "./interface";

export const GlobalStore = defineStore({
  id: "GlobalState",
  state: (): GlobalState => ({
    // token
    token: "",
    // 用户信息
    userInfo: {}
  }),
  getters: {},
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token;
    },
    // setUserInfo
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig("GlobalState")
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;

// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment(num: number) {
//     count.value += num;
//   }

//   return { count, doubleCount, increment };
// });
