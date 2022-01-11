import axios from 'axios'

import VFormDesigner from '@/components/form-designer/index.vue'
import VFormRender from '@/components/form-render/index.vue'

import Draggable from '@/../lib/vuedraggable/dist/vuedraggable.umd.js'
import SvgIcon from '@/components/svg-icon'  //svg组件
import 'virtual:svg-icons-register'

import ContainerWidgets from '@/components/form-designer/form-widget/container-widget/index'
import ContainerItems from '@/components/form-render/container-item/index'

import { addDirective } from '@/utils/directive'
import { installI18n } from '@/utils/i18n'
import { loadExtension } from '@/extension/extension-loader'


VFormDesigner.install = function (app) {
  addDirective(app)
  installI18n(app)
  loadExtension(app)

  app.use(ContainerWidgets)
  app.use(ContainerItems)

  app.component('draggable', Draggable)
  app.component('svg-icon', SvgIcon)
  app.component(VFormDesigner.name, VFormDesigner)
}

VFormRender.install = function (app) {
  installI18n(app)
  loadExtension(app)

  app.use(ContainerItems)

  app.component('svg-icon', SvgIcon)
  app.component(VFormRender.name, VFormRender)
}

const components = [
  VFormDesigner,
  VFormRender
]

const install = (app) => {
  addDirective(app)
  installI18n(app)
  loadExtension(app)

  app.use(ContainerWidgets)
  app.use(ContainerItems)

  app.component('draggable', Draggable)
  app.component('svg-icon', SvgIcon)

  components.forEach(component => {
    app.component(component.name, component)
  })
}

// if (typeof window !== 'undefined' && window.Vue) { /* script方式引入时主动调用install方法！！ */
//   window.axios = axios
//   install(window.Vue);
// }

export default {
  install,
  VFormDesigner,
  VFormRender
}