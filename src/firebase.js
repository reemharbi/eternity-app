import firebase from 'firebase';
const config = {
	// apiKey: "AIzaSyDblTESEB1SbAVkpy2q39DI2OHphL2-Jxw",
	// authDomain: "fun-food-friends-eeec7.firebaseapp.com",
	// databaseURL: "https://fun-food-friends-eeec7.firebaseio.com",
	// projectId: "fun-food-friends-eeec7",
	// storageBucket: "fun-food-friends-eeec7.appspot.com",
	// messagingSenderId: "144750278413"

	apiKey: 'AIzaSyCCY1REdQXqf4Mok9WQxISVhDDmaw68Ef4',
	authDomain: 'eternity-d1dd1.firebaseapp.com',
	databaseURL: 'https://eternity-d1dd1.firebaseio.com',
	projectId: 'eternity-d1dd1',
	storageBucket: 'eternity-d1dd1.appspot.com',
	messagingSenderId: '950613207075',
	appId: '1:950613207075:web:9b39ddb96431bafd'
};


firebase.initializeApp(config);
export const provider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;
