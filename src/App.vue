<template>
  <layout-normal v-if="isAuth" />
  <layout-auth v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutNormal from '@/components/Layout/normal.vue'
import LayoutAuth from '@/components/Layout/auth.vue'

@Component({
  components: {
    LayoutNormal,
    LayoutAuth
  }
})
export default class App extends Vue {
  isAuth = false
}
</script>

<style scoped>

</style>
