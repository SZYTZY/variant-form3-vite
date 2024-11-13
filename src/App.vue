<template>
  <div id="app">
    <VFormDesigner ref="vfDesignerRef" :moduleTitle="moduleTitle" :global-dsv="globalDsv" @save="fnSave" @close="fnClose">
      <!--
      <template #customToolButtons>
        <el-button type="text" @click="doTest">测试btn</el-button>
      </template>
      -->
    </VFormDesigner>
  </div>
</template>

<script>
import VFormDesigner from './components/form-designer/index.vue'

export default {
  name: 'App',
  components: {
    VFormDesigner,
  },
  data() {
    return {
      //全局数据源变量
      globalDsv: {
        testApiHost: 'http://www.test.com/api',
        testPort: 8080,
      },
      moduleTitle: '表单设计器',
    }
  },
  computed: {
    //
  },
  methods: {
    doTest() {
      let fieldList = this.$refs.vfDesignerRef.getFieldWidgets(null, true)
      console.log('test', fieldList)
    },
    fnSave(json) {
      console.log('save', json)
    },
    fnClose() {
      console.log('close')
    },
  },
}
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
</style>
