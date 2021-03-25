<template>
  <v-app-bar
      app
      color="white"
  >
    <v-container class="py-0 fill-height">
      <img class="pl-15" style="height: 60px;" src="https://resource.rainyblossom.com/image/opensource/website/eu_logo-removebg-preview.png">

      <div style="position: fixed; right: 8%">
        <v-btn
            class="green--text"
            v-for="link in links"
            :key="link.id"
            text
            @click="navigateTo(link.url)"
        >
          {{ link.title }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    links: [
      {
        id:1,
        title:'首页 | Home',
        url:"/"
      },
      {
        id:2,
        title:"产品 | Product",
        url:'/explore'
      },
      {
        id:3,
        title:'关于 | About',
        url:'/about'
      },
    ],
  }),
  methods : {
    navigateTo : function (url){
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>

</style>