import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./routers";
import "@/mock";

import "./assets/main.css";
// 引入重置样式
import "./style/reset.scss";
// 引入elementPlus样式
import "element-plus/dist/index.css";
// 引入曙光sdk
import EventTracing from "@eventtracing/web";
// setry 引入
import * as Sentry from "@sentry/vue";

// 埋点示例查看：compontents/HomeView.vue
EventTracing.init({
  globalParams: { __test_global_param: "test" }, // 全局公参
  // isUseHeartbeat: true, // 心跳 _pd
  reportLogs: ({ logs }: any) => {
    console.log(`[日志上报]:`, logs);
    // 浏览器端日志上报方式，通过发送网络请求上报
    // fetch...
    // }
  }
});

const app = createApp(App);

// setry 初始化
Sentry.init({
  app,
  dsn: "https://c6d51aff5c724877adc321570b76160f@o4504492140003328.ingest.sentry.io/4504932171579392",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ["localhost", "my-site-url.com", /^\//]
    })
  ],
  tracesSampleRate: 1.0
});

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
