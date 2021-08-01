import { auth } from '@/plugins/firebase'
import AuthStore from '@/store/auth'

export default class AuthHandler {
  private static inst: AuthHandler

  constructor () {
    this.run()
  }

  public run (): void {
    auth.onAuthStateChanged(user => {
      if (user) console.log('new user')
      else console.log('user null')
      AuthStore.setFirebaseUser(user)
    })
  }

  public static instance (): AuthHandler {
    if (this.inst) return this.inst
    return new AuthHandler()
  }
}
