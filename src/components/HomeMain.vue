<template>
  <v-main>
    <v-container>
      <div class="mx-auto" style="padding-top: 150px; margin: 0 auto 64px; text-align: center; font-weight: 500;">
        <h1>{{title}}</h1>
        <p class="pt-5 grey--text">{{subTitle}}</p>
      </div>
      <v-row>
        <v-col
            v-for="model in models"
            :key="model.id"
            text
            cols="4">
          <v-row>
            <v-col cols="3">
              <v-icon size="65" class="pl-5 pt-5 light-green--text">{{model.icon}}</v-icon>
            </v-col>
            <v-col cols="8">
              <v-card
                  class="mx-auto"
                  flat
                  :href="model.url"
                  target="_blank"
              >
                <v-card-title class="light-green--text">{{model.name}}</v-card-title>
                <v-card-subtitle>{{model.desc}}</v-card-subtitle>
              </v-card>

            </v-col>
          </v-row>
        </v-col>

      </v-row>

    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: "HomeMain",
    data: () => ({
      title: 'Easy Utils | 易用工具系列',
      subTitle: '一款优雅的商业工具集，致力于推动接口标准化以及代码复用原则.',
      models : [
        {
          id: 1,
          name: 'Easy WeProgram',
          icon: 'mdi-wechat',
          desc: '基于微信小程序公共文档的封装 SDK',
          url:'https://github.com/aegean-next/aegean-next-origin'
        },
        {
          id: 2,
          name: 'Easy RedBook',
          icon: 'mdi-book',
          desc: '基于小红书大学公共文档的封装 SDK',
          url: 'https://github.com/aegean-next/aegean-next-nirvana'
        },
        {
          id: 3,
          name: 'Easy ExPress',
          icon: 'mdi-car',
          desc: '基于各类物流商开放文档的封装 SDK',
          url: '#'
        },
      ]
    }),
  }
</script>

<style scoped>

</style>