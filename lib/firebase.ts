// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmzjXNq1sBjXfvsQGKyuw_AZamxmO-HOw",
  authDomain: "app-check-tester.firebaseapp.com",
  projectId: "app-check-tester",
  storageBucket: "app-check-tester.appspot.com",
  messagingSenderId: "45311064737",
  appId: "1:45311064737:web:95a08cd4aeb005eebdcee0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider("6Lc6zbofAAAAAGVX3q3aq-XjytXBfVBWCIdXYz6f"),
  isTokenAutoRefreshEnabled: true,
});
