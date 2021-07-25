import Vue from 'vue'
import firebase from 'firebase/app'

// 2. 보충하고자 하는 타입이 있는 파일을 지정
// Vue의 constructor type은 types/vue.d.ts에 있다.
declare module 'vue/types/vue' {
  // 3. Vue에 보강할 내용을 선언
  interface Vue {
    $firebase: typeof firebase;
  }
}
