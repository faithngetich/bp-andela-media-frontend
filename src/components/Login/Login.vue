<template>
  <div class="login-image">
    <div class="french-rose">
      
    </div>
    <div class="square-top-left"></div>
    <div class="square-top-right"></div>
    <div class="square-bottom-right"></div>
    <div class="square-bottom-left"></div>
    <v-content>
      <div class="homepage-text"> 
        <img class="lens-icon" src="../../../static/images/lens-icon.svg"><br><br>
        <p class="andela-media">Andela Media</p>
       <div class="login-button">
         <div class="icon-wrapper">
          <img class="google-icon" src="../../../static/images/google.png">
        </div>
        <button class="login-btn" @click="login">LOGIN WITH GOOGLE</button>
       </div><!-- end homepage text -->
      <div class="home-borad-group">
        <div class="home-borad"></div>
        <div class="home-borad-white"></div>
        <div class="home-borad-white"></div>
      </div>
    </div><!-- end homepage text -->
    </v-content>
    <div class="andela-logo">
      <img src="../../../static/images/andela.png">
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  methods: {
    login() {
      window.location.href = 'https://api-prod.andela.com/login?redirect_url=http://localhost:8080'
    }
  }
};

</script>
<style lang="scss" scoped>
  @import "../../assets/components/login.scss";
</style>
