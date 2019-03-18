import errTip from './errTips.vue';
const TIPS = {
    durationDefault: 3,
    install(Vue: any) {
        Vue.component('errTip', errTip);
        function initMsg(msg: string, duration?: number, callback?: object): void{
            let currDuration: number = duration ? duration : TIPS.durationDefault;
            let vueTips = Vue.extend({
                render(h: Vue.CreateElement) {
                    return h('errTip', {
                        props: {
                            errMsg: this.msg,
                            duration: currDuration,
                        },
                    });
                },
                data(){
                    return {
                        msg: msg
                    }
                }
            }); 
            let newTips = new vueTips();
            let vm = newTips.$mount();
            document.body.appendChild(vm.$el);
            console.log(vm.errMsg)
            let t1 = setTimeout(() => {
                clearTimeout(t1);
                vm.msg = '';
                newTips.$destroy();
                document.body.removeChild(vm.$el);
            }, currDuration);
        }
        Vue.prototype.$tips = (msg: string, duration: number) => {
           initMsg(msg, duration);
        };
        
        console.log(Vue)
       
    }
};
export default TIPS;
