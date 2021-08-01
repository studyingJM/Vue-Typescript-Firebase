<template>
  <layout-normal v-if="isAuth" />
  <layout-auth v-else />
  <!-- <test-model/> -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutNormal from '@/components/Layout/normal.vue'
import LayoutAuth from '@/components/Layout/auth.vue'
import TestModel from '@/components/test/model.vue'
import AuthStore from '@/store/auth'

@Component({
  components: {
    LayoutNormal,
    LayoutAuth,
    TestModel
  }
})
export default class App extends Vue {
  // isAuth = AuthStore.isAuth
  get isAuth (): boolean {
    return !!AuthStore.firebaseUser // !! = True와 falase를 반환해준다.
  }
}
</script>

<style scoped>

</style>
