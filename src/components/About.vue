<template>
  <v-main>
    <v-container>
      <v-card class="mx-auto pt-8"
              max-width="800"
              flat>
        <v-card-title class="text-left">什么是 Easy Utils ?</v-card-title>
        <v-card-text class="pt-5">
          <p>Easy Utils 易用工具包系列，提供了电子商务相关领域内，基于各产品官方文档的基础封装包，开发人员可以通过简单地引用来实现产品的快速接入，帮助加速软件功能开发进程，避免重复且无意义的工作。</p>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title class="text-left">是谁发起了这个项目？</v-card-title>
        <v-card-text class="pt-5">
          <p>项目发起者 <strong>「 胖虎 」</strong> 是一个坐标魔都的 CRUD 员，在过去三年的电子商务官网实施工作中积累了一定的项目和框架经验。作者希望能够通过这个项目来沉淀以往的工作，并且能够实现一些在工作中由于某些原因，明明知道这样不对但是又没办法改变的东西。</p>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title class="text-left">如何加入这个开源共建计划 ?</v-card-title>
        <v-card-text class="pt-5">
          <p>进入 <a href="https://github.com/orgs/easy-utils/teams/public-team">团队首页</a>，并申请加入团队。</p>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title class="text-left">捐赠和建议</v-card-title>
        <v-card-text class="pt-5">
          <span>Easy Utils 目前是非营利性项目，如果您有捐赠项目的意愿，请扫描下方二维码支持。</span>
          <v-row
              class="mx-auto text-center"
          >
            <v-col cols="3">
              <v-img eager gradient width="200" height="200" src="https://resource.rainyblossom.com/image/opensource/website/reward-wechat.jpg"/>
              <span>微信</span>
            </v-col>
            <v-col cols="3">
              <v-img eager gradient width="200" height="200" src="https://resource.rainyblossom.com/image/opensource/website/reward-alipay.jpg"/>
              <span>支付宝</span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="pt-5">
          如果您对本项目有任何疑问或建议，请 <a href="mailto:rainyblossom@163.com">发送邮件</a> 给我。
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title class="text-left">鸣谢</v-card-title>
        <v-card-text class="pt-5 pb-16">
          <p>* 网站建设基于 <a href="https://cn.vuejs.org" target="_blank">Vue.js</a> 和 <a href="https://vuetifyjs.com" target="_blank">Vuetify JS</a>.</p>
          <p>* 框架建设基于 <a href="https://spring.io" target="_blank">Spring Framework</a>.</p>
          <p>* 感谢 <a href="https://vercel.com" target="_blank">Vercel</a> 提供免费构建构建与应用环境.</p>
          <p>* 感谢 <a href="https://www.jetbrains.com" target="_blank">JetBrains Open Source Support Program</a> 提供免费 IDE 授权许可.</p>
        </v-card-text>

      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>