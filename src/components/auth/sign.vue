<template>
  <v-form @submit.prevent="submit">
    <v-card>
      <v-card-title>
        이메일 로그인
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          type="email"
          label="email"/>
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit">로그인</v-btn>
        <v-btn @click="signOut">로그아웃</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { auth } from '@/plugins/firebase'

// eslint-disable-next-line no-use-before-define
@Component<AuthSign>({
  created () {
    this.signIn()
  }
})
export default class AuthSign extends Vue {
  email = ''

  submit () {
    const actionCodeSettings = {
      url: 'http://localhost:8080/finishSignUp',
      handleCodeInApp: true
    }
    auth.sendSignInLinkToEmail(this.email, actionCodeSettings)
      .then(() => {
        localStorage.setItem('emailForSignIn', this.email)
      })
  }

  signIn () {
    const email = localStorage.getItem('emailForSignIn')
    if (!email) return
    this.email = email
    if (!auth.isSignInWithEmailLink(location.href)) return
    auth.signInWithEmailLink(this.email, location.href)
      .then(() => {
        localStorage.removeItem('emailForSignIn')
      })
  }

  signOut () {
    auth.signOut()
  }
}
</script>
