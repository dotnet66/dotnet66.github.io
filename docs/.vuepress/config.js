import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",

  title: "ASP.NET知识库",
  description: "ASP.NET开发人员必备技能知识库",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: ["/", "/get-started"],
  }),

  bundler: viteBundler(),
});
