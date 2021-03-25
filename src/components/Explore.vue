<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet>
            <v-list>
              <v-list-item
                  v-for="item in guide"
                  :key="item.id"
                  link
                  @click="changeContent(item.content)"
              >
                <v-list-item-content>
                  <v-list-item-title class="brown--text">
                    <h5>{{ item.title }}</h5>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>


            </v-list>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet
              min-height="70vh"
              rounded="lg"
          >
            <div
                class="pt-16 pl-16 pr-16 brown--text text-sm-subtitle-1"
                v-html="content"
            >
            </div>

          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Explore",
  data: () => ({
    content: '',
    guide : [
      {
        id:1,
        title: '为什么要用「 Aegean Next 」？',
        content: "<p class='pt-16'>Aegean 译为爱琴海。爱琴海是希腊半岛东部的一个蓝色系海洋，南抵克里特岛，属地中海的一部分。在现实生活中，爱琴海往往代表着天长地久的爱情。我们希望 Aegean Next 框架是超乎时间的经典架构，能够一直秉承初心，以开源共创的态度，持续为电子商务领域提供前进动力。</p>" +
            "<p class='pt-6'>Aegean Next 的项目发起者拥有三年以上的电子商务官网研发经验，曾参与十余家国际知名服饰品牌、奢侈品品牌官网、小程序，以及品牌对接的第三方商家的技术研发项目，及其底层基础框架的维护与翻新。</p>" +
            "<p class='pt-6'>基于对过往业务的整理和思考，我们对 Aegean Next 的进行了重新设计，并针对真实的电子商务业务场景进行了回顾和总结，优化项目架构。</p>"
      },
      {
        id:2,
        title: '当前进展',
        content: "<p class='pt-16'><strong>2020.08</strong> 确定开源计划.</p>" +
            '<p><strong>2020.09</strong> 项目官网研发 & 上线，基于 Antd Landing Page.</p>' +
            '<p><strong>2020.10</strong> 项目方案制定.</p>' +
            '<p><strong>2020.12</strong> 架构方案调整和优化.</p>' +
            '<p><strong>2021.01</strong> 发布 Next Origin 和 Next Nirvana 快照包.</p>' +
            '<p><strong>2021.02</strong> Pioneer Member 模块 POC 验证.</p>' +
            '<p><strong>2021.03</strong> 项目官网翻站，基于 Vue.js & VuetifyJS.</p>'
      },
      {
        id:3,
        title: '下一步',
        content: "<p class='pt-16'><strong>1.</strong> 完善 Next Origin 模型</p>" +
            '<p><strong>2.</strong> 完善语雀开发文档.</p>'
      },
      {
        id:4,
        title: '食用方式',
        content: "<p class='pt-16'>待补充。</p>"
      },
    ]
  }),
  created() {
    this.$data.content = this.$data.guide[0].content;
  },
  methods : {
    changeContent : function (content){
      this.$data.content = content;
    }
  }
}
</script>

<style scoped>

</style>