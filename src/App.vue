<template>
  <div>
    <v-header></v-header>
      <div class="tab border-1px">
        <div class="tab-item">
          <router-link :to="'AccountList'"> AccountList </router-link>
        </div>

      <!--  <div class="tab-item">
          <router-link="{path:'/analyse'}">Analyse</>
        </div>-->
      </div>
    <router-view></router-view>
    <div>
    <img src="./assets/bank.jpg">
    </div>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
// border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex: 1
    text-align: center
</style>
