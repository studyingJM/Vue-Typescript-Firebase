<template>
  <v-app>
    <v-main>
      <v-container class="justify-center align-center fill-height">
        <v-btn @click="incr">incr</v-btn>
        <v-btn @click="decr">decr</v-btn>
        <v-chip>{{ count }}</v-chip>
        <auth-sign />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthSign from '@/components/auth/sign.vue'
import TestStore from '@/store/test'

@Component({ components: { AuthSign } })
export default class LayoutAuth extends Vue {
  get count (): number {
    return TestStore.count
  }

  incr (): void{
    TestStore.incr()
  }

  decr (): void {
    TestStore.decr()
  }
}
</script>

<style scoped>

</style>
