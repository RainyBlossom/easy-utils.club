<template>
  <v-footer
      padless
  >
    <v-card
        flat
        tile
        width="100%"
        class="text-center"
    >
      <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.id"
            class="mx-4"
            icon
            :href="icon.url"
            target="_blank"
          >
          <v-icon size="35px" class="blue-grey--text">
            {{ icon.value }}
          </v-icon>
        </v-btn>

      </v-card-text>

      <v-card-text class="pt-0 v-size--x-small">
        {{needToKnow}}
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="pt-0 v-size--x-small">
        <a href="https://beian.miit.gov.cn">蒙ICP备16000384号-5</a> <br/>
        2020 - {{ new Date().getFullYear() }} © East Utils All Right Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {
        id:1,
        value:'mdi-github',
        url: 'https://github.com/aegean-next'
      },
      {
        id:2,
        value:'mdi-file-document-outline',
        url: 'https://www.yuque.com/aegean-next'
      },
    ],
    needToKnow : 'Aegean Next 遵循「 Apache 2.0 」开源协议，在使用、发行、衍生项目代码时需遵守相关的开源协定，本项目作者及相关开源贡献者不承担任何法定义务和责任。'
  }),
  methods :{
  }
}
</script>

<style scoped>

</style>