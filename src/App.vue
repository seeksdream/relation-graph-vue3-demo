<template>
  <div class="play-container">
    <div style="padding: 10px; background-color: #999999; color: #ffffff">
      Relation graph:
    </div>
    <div
      style="
        border: #efefef solid 1px;
        height: calc(100vh - 100px);
        width: 100%;
      "
    >
      <relation-graph ref="relationGraph$" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph/vue3'
// code here
console.log('------------App---------', RelationGraph)
const relationGraph$ = ref<RelationGraph>()
const options = {
  defaultExpandHolderPosition: 'right',
  debug: true,
  showDebugPanel: true,
}
onMounted(() => {
  const jsonData = {
    rootId: 'a',
    nodes: [
      {
        id: 'a',
        text: 'a',
      },
      {
        id: 'b',
        text: 'b',
      },
      {
        id: 'c',
        text: 'c',
      },
      {
        id: 'd',
        text: 'd',
      },
      {
        id: 'e',
        text: 'e',
      },
      {
        id: 'f',
        text: 'f',
      },
    ],
    lines: [
      {
        from: 'a',
        to: 'b',
      },
      {
        from: 'a',
        to: 'c',
      },
      {
        from: 'a',
        to: 'd',
      },
      {
        from: 'a',
        to: 'e',
      },
      {
        from: 'a',
        to: 'f',
      },
    ],
  }
  relationGraph$.value.setJsonData(jsonData)
})
</script>

<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}
.play-container {
  height: calc(100% - 100px);
  width: calc(100% - 100px);
}
</style>
