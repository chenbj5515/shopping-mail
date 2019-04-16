<template>
  <div>
    <shoppingMail></shoppingMail>
    <div class="tabBar">
      <div class="span home" @click="homeClickHandle">
        <van-icon v-if="idx === 1" size="20px" name="shop"/>
        <van-icon v-else size="20px" name="shop-o"/>
        <p>商城</p>
      </div>
      <div class="span cart" @click="cartClickHandle">
        <van-icon v-if="idx === 3" size="20px" name="shopping-cart"/>
        <van-icon v-else size="20px" name="shopping-cart-o"/>
        <p>购物车</p>
      </div>
      <div class="span me" @click="meClickHandle">
        <van-icon v-if="idx === 4" size="20px" name="manager"/>
        <van-icon v-else size="20px" name="user-o"/>
        <p>个人</p>
      </div>
    </div>
  </div>
</template>

<script>
import shoppingMail from "@/components/shoppingMail";
export default {
  data() {
    return {
      idx: 1
    };
  },
  components: {
    shoppingMail
  },
  methods: {
    homeClickHandle() {
      if (this.idx !== 1) {
        this.idx = 1;
      }
    },
    classClickHandle() {
      this.idx = 2;
    },
    cartClickHandle() {
      this.idx = 3;
    },
    meClickHandle() {
      this.idx = 4;
    }
  },

  created() {}
};
</script>

<style scoped>
.tabBar {
  background: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 12px;
}
.span {
  width: 60px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
}
</style>
