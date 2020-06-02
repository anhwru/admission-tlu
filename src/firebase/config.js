import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBwLDTVFdBsMUZPqEijzE12GhYdRnupmqU",
    authDomain: "imagetuyensinhtlu.firebaseapp.com",
    databaseURL: "https://imagetuyensinhtlu.firebaseio.com",
    projectId: "imagetuyensinhtlu",
    storageBucket: "imagetuyensinhtlu.appspot.com",
    messagingSenderId: "518744467363",
    appId: "1:518744467363:web:cb24f797e36efee2f99c16",
    measurementId: "G-YKWQJRHN7D"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
  export { storage, firebase as default };


  // const formData = new FormData();
		// formData.append("body", JSON.stringify(admissionsRecords));
		// formData.append("photos", stateImages[0].file);
		// for (const key of Object.keys(stateImages)) {
		// 	formData.append('photos', stateImages[key].file);
		// }
		// handleUpload();
		// console.log(formData);

		// const config = {     
		// 	headers: { 'content-type': 'multipart/form-data' }
		// }
		// axios.post('http://127.0.0.1:8000/api/luuhoso', formData, config)
		// 	.then(response => {
		// 		console.log(response);
		// 	})
		// 	.catch(error => {
		// 		console.log(error);
		// 	});