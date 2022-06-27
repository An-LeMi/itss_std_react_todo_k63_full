import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAmUYRcXTqAh3SK-XCPRjuDtvp3tvBxRDk",
  authDomain: "todoapp-leminhan-itss.firebaseapp.com",
  projectId: "todoapp-leminhan-itss",
  storageBucket: "todoapp-leminhan-itss.appspot.com",
  messagingSenderId: "993108527621",
  appId: "1:993108527621:web:008c71b92996c086c22a6c",
  measurementId: "G-PGYGY4ECVE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default firebase;

// Todoコレクションの全documentを取得する：
export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

// 新しいTodoをFirestoreに保存する：
export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

// Todoの情報を更新する：
export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

// 任意のTodoを削除する
export const deleteFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};


