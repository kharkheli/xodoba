import React, { useState, useContext } from 'react'

// Import the functions you need from the SDKs you need

import firebase from 'firebase/app'
import { useEffect } from 'react/cjs/react.development'
require('firebase/auth')
require('firebase/database')

const firebaseConfig = {
  apiKey: 'AIzaSyDieKhZuJ4Xg7mxNJ_Op7soy6XwVLwp2CQ',

  authDomain: 'xodoba-bc4c6.firebaseapp.com',

  databaseURL:
    'https://xodoba-bc4c6-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'xodoba-bc4c6',

  storageBucket: 'xodoba-bc4c6.appspot.com',

  messagingSenderId: '228533929696',

  appId: '1:228533929696:web:11be4da9a4b16687953285',

  measurementId: 'G-7NRND63R1J',
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)
var database = firebase.database()
console.log(firebase)
// ---------------------------------------------------------------------
const ChalangeContext = React.createContext()

const ChalangeProvider = ({ children }) => {
  const [chalanges, setChalanges] = useState([])
  const [update, setUpdate] = useState(0)
  useEffect(() => {
    database.ref('challanges').on('child_added', function (snapshot) {
      setUpdate(new Date().getTime())
    })
    database.ref('challanges').on('child_removed', function (snapshot) {
      setUpdate(new Date().getTime())
    })
    database.ref('challanges').on('child_changed', function (snapshot) {
      setUpdate(new Date().getTime())
    })
  }, [])
  useEffect(() => {
    console.log(firebase)
    database
      .ref()
      .child('challanges')
      .get()
      .then((data) => {
        setChalanges(data.val())
      })
  }, [update])
  useEffect(() => {
    if (chalanges.length > 1) {
      database.ref('challanges/').set(chalanges)
    }
  }, [chalanges])
  return (
    <ChalangeContext.Provider
      value={{ chalanges: chalanges, setChalanges: setChalanges }}
    >
      {children}
    </ChalangeContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(ChalangeContext)
}

export { ChalangeContext, ChalangeProvider }
