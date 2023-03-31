import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import { warpperEnv } from "./build";
import { getPluginsList } from "./build/plugins";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url))
//     }
//   }
// });
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION, VITE_PUBLIC_PATH } =
    warpperEnv(loadEnv(mode, root));
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: VITE_PORT,
      host: "0.0.0.0",
      // 本地跨域代理
      proxy: {
        // "/api": {
        //   target: "",
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, "")
        // }
      }
    },
    plugins: getPluginsList(command, VITE_CDN, VITE_COMPRESSION),
    build: {
      // 是否产出sourcemap.json
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve("index.html")
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
};
