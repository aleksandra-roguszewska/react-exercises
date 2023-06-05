import { useEffect } from "react";
import "./App.css";
import { db } from "./api/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const newCollection = collection(db, "papraki");
  console.log(db);

  const getData = () => {
    getDocs(newCollection).then((dataSnapshot) =>
      dataSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
