import Button from './components/utils/Button.vue'
import TButton from './components/custom/TButton.vue'
import Container from './components/utils/Container.vue'
import Icon from './components/utils/Icon.vue'
import Flex from './components/utils/Flex.vue'

export default {
   register(Vue) {
      Vue.component(Icon.name, Icon)
      Vue.component(Flex.name, Flex)
      Vue.component(Button.name, Button)
      Vue.component(TButton.name, TButton)
      Vue.component(Container.name, Container)
   }
}
