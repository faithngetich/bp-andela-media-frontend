<template>
  <div class="login-image">
    <div class="french-rose">
      <div>
        <p class="andela-media">Andela Media</p>
        <div>
          <button class="login-btn">LOGIN WITH GOOGLE</button>
        </div>
        <div>
          <img src="../../assets/andela.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
<style scoped>
html {
  margin: 0;
  overflow-y: hidden;
}
body::-webkit-scrollbar {
  display: none;
}
.login-image {
  background: url("../../assets/home.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
}
.andela-media {
  height: 79px;
  width: 370px;
  color: #ffffff;
  font-family: DINPro;
  font-size: 56px;
  letter-spacing: 1.63px;
  line-height: 72px;
}
.french-rose {
  height: 750px;
  width: 1232px;
  /* background: linear-gradient(157.35deg, #e64c4c 0%, #ef32fb 100%); */
  background: linear-gradient(
    157.35deg,
    rgba(255, 80, 80, 0.8),
    rgba(239, 50, 251, 0)
  );
  margin: 120px 178px 124px 204px;
}
.login-btn {
  height: 52px;
  width: 300px;
  border-radius: 8px;
  background-color: #f44336;
  color: #ffffff;
  font-family: DINPro;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
}
</style>