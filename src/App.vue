<template>
  <div>
    <div style="border: #efefef solid 1px; height: calc(100vh - 100px);width: 100%;">
      <RelationGraph ref="relationGraph$" :options="options" :on-node-click="onNodeClick">
        <template #node="{node}">
          <div style="padding-top:20px;">节点：{{node.text}}</div>
        </template>
      </RelationGraph>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph, {RGJsonData, RGNode, RGUserEvent} from 'relation-graph/vue3'
const relationGraph$ = ref<RelationGraph>()
const options = {
  defaultExpandHolderPosition: 'right',
  // defaultLineShape: 4,
  debug: true,
  showDebugPanel: true,
}
const onNodeClick = (node:RGNode, e: RGUserEvent) => {
  console.log('onNodeClick:', node.id);
  return true;
}
onMounted(() => {
  const graphJsonData:RGJsonData = {
    rootId: 'N3',
    nodes: [
      { id: 'N4', text: '十4' },
      { id: 'N5', text: '十5' },
      { id: 'N6', text: '十6' },
      { id: 'N7', text: '十7' },
      { id: 'N3', text: '十三' },
      { id: 'N9', text: '152****3393' },
    ],
    lines: [
      { from: 'N3', to: 'N9', text: '分享' },
      { from: 'N3', to: 'N4', text: '分享444' },
      { from: 'N3', to: 'N5', text: '分享555' },
      { from: 'N3', to: 'N6', text: '分享666' },
      { from: 'N3', to: 'N7', text: '分享777' },
      { from: 'N9', to: 'N4', text: '分享x' }
    ],
  };
  relationGraph$.value.setJsonData(graphJsonData, () => {
    console.log('relationGraph ready!');
  })
})
</script>
