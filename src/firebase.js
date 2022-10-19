import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBJrQxSxP3Q2mbjDWRPZAnGxawz6mVkJFo',
  authDomain: 'civil-density-286221.firebaseapp.com',
  databaseURL: 'https://civil-density-286221.firebaseio.com',
  projectId: 'civil-density-286221',
  storageBucket: 'civil-density-286221.appspot.com',
  messagingSenderId: '367214077560',
  appId: '1:367214077560:web:ed544556c81331df4daf8d',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
