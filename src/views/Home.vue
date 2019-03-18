<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <!-- <errTips :errMsg = "msg"></errTips> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import errTips from '@/package/errTips.vue';

@Component({
  components: {
    HelloWorld,
    errTips
  },
})
export default class Home extends Vue {
  msg:String = 'tesRQtdaaDt'
  created(){
    this.$tips('hello',2000)
  }
}
</script>
