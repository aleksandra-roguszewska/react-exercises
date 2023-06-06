import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./api/firebase";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [actors, setActors] = useState([]);
  const [actorToBeDeleted, setActorToVeDeleted] = useState(null);
  const actorsCollection = collection(db, "papraki");

  // Wcześniejsze getActors - przed dodaniem querySnapshot - po querysnapshot nie trzeba robić getDocs, bo to jest ten snapshot
  // const getActors = () => {
  //   return getDocs(actorsCollection).then(querySnapshot => {
  //     return querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }))
  //   })
  // }

  const getActors = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(actorsCollection, (querySnapshot) => {
      const actors = getActors(querySnapshot);
      setActors(actors);
    });
  }, []);

  const onFormSubmit = (event) => {
    const actor = {};
    event.preventDefault();
    console.log("Submitted!");
    actor.firstName = event.target.firstName.value;
    actor.lastName = event.target.lastName.value;
    actor.age = event.target.age.value;
    console.log(actor);
    event.target.reset();
    addDoc(actorsCollection, actor);
  };

  const deleteHandler = (id) => {
    const docRef = doc(db, "papraki", id);
    deleteDoc(docRef);
  };

  return (
    <>
      <h2>Existing actors:</h2>
      <ul>
        {actors.map((item) => {
          return (
            <li className="actor_item" key={item.id}>
              <p>Imię: {item.firstName}</p>
              <p>Nazwisko: {item.lastName}</p>
              <p>Wiek: {item.age}</p>
              <button onClick={() => deleteHandler(item.id)}>
                Delete actor
              </button>
            </li>
          );
        })}
      </ul>
      <h2>Add new actor:</h2>
      <form onSubmit={onFormSubmit} className="actor_form">
        <label htmlFor="firstName">Firstname: </label>
        <input
          name="firstName"
          id="firstName"
          type="text"
          placeholder="Your firstname"
        ></input>
        <label htmlFor="lastName">Lastname: </label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Your lastname"
        ></input>
        <label htmlFor="age">Age: </label>
        <input name="age" id="age" type="number" placeholder="Your age"></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
