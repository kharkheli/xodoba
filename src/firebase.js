document.getElementById('firebase').onload(() => {
  console.log('aa')
  var firebaseConfig = {
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

  // // Set database variable
  var database = firebase.database()
})
