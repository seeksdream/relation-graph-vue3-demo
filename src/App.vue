<template>
  <div>
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px);width: 100%;">
      <relation-graph ref="relationGraph$" :options="options">
        <template #node="{node}">
          <button>{{node.text}}</button>
        </template>
      </relation-graph>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph/vue3'
import RelationGraphElement from "relation-graph";
const relationGraph$ = ref<RelationGraphElement>()
const options = {
  defaultExpandHolderPosition: 'right',
  defaultLineShape: 4,
  debug: true,
  showDebugPanel: true,
}
onMounted(() => {
  const jsonData = {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'a', },
      { id: 'b', text: 'b', },
      { id: 'c', text: 'c', },
      { id: 'd', text: 'd', },
      { id: 'e', text: 'e', },
      { id: 'f', text: 'f', },
    ],
    lines: [
      { from: 'a', to: 'b', },
      { from: 'a', to: 'c', },
      { from: 'a', to: 'd', },
      { from: 'a', to: 'e', },
      { from: 'a', to: 'f', },
    ],
  }
  relationGraph$.value.setJsonData(jsonData)
})
</script>
