<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import icon from "@/assets/logo.svg";
import { userList } from "@/api/modules/user";

console.log("运行的模式", import.meta.env.MODE);
console.log("部署应用时的基本url", import.meta.env.BASE_URL);
console.log("应用是否运行在生产环境", import.meta.env.PROD);
console.log("应用是否运行在开发环境", import.meta.env.DEV);
console.log("应用是否运行在server上", import.meta.env.SSR);
console.log("打包配置", import.meta.env.VITE_COMPRESSION);
console.log("变量", import.meta.env);
console.log("api地址", import.meta.env.VITE_API_URL);
// mock示例
userList({ pageNum: 1, pageSize: 10 }).then(res => {
  console.log("mock示例", res);
});
console.log(icon);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
