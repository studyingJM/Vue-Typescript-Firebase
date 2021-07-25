<template>
  <v-app>
    <v-main>
      <v-container class="justify-center align-center fill-height">
        <v-btn @click="test">test</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LayoutAuth extends Vue {
  async test () {
    const ref = this.$firebase.firestore().collection('test').doc('aaa')
    await ref.set({ a: 1111 })
    const doc = await ref.get()
    console.log(doc.data())
  }
}
</script>

<style scoped>

</style>
