<template>
  <div class="home">
    <img alt="Vue logo" :class="'jone'+(msg || 'fuck')" src="../assets/logo.png">
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
  msg:String = ''
  created(){
    this.$tips ('helloasdf',2000);
  }
  handleClick(){
    console.log('est')
  }
  mounted() {
    console.log(this)
  }
}
</script>
