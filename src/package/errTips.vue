<template>
    <div class="mod_tips" v-show="errMsg ? true : false">
        {{errMsg}}
    </div>
</template>

<script lang="ts">
import {CreateElement} from 'vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class errTips extends Vue {
    // @Prop({default: ''})
    // errMsg: String vscode不友好
    @Prop()//提示信息
    private errMsg!: string

    @Prop()//持续时间
    private duration!: number

    handleHide(){
        setTimeout(()=>{
            this.errMsg = ''
        }, this.duration * 1000)
    }
}
</script>
<style scoped>
   .mod_tips {
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    z-index: 501;
    padding: 15px 20px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    min-width: 50%;
    word-break: break-word;
    white-space: normal;
}
</style>

