import {initializApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBXQ9FP3Af9BroUiumki7KTF6FNWDITuYs",
    authDomain: "vuex-firebase-auth-9d363.firebaseapp.com",
    projectId: "vuex-firebase-auth-9d363",
    storageBucket: "vuex-firebase-auth-9d363.appspot.com",
    messagingSenderId: "926873080197",
    appId: "1:926873080197:web:36678357ddbab7500334ec"
  }

  initializApp(firebaseConfig)
  const auth = getAuth()

  export {auth}