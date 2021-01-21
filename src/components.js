import Button from './components/utils/Button.vue'
import Container from './components/utils/Container.vue'

export default {
   register(Vue) {
      Vue.component(Button.name, Button)
      Vue.component(Container.name, Container)
   }
}
