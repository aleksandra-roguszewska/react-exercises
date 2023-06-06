import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./api/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

function App() {
  const [actors, setActors] = useState([]);
  const [actorEditedId, setActorEditedId] = useState(null);
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
      createdAt: serverTimestamp(),
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(
      actorsCollection,
      orderBy("createdAt", "desc"),
      (querySnapshot) => {
        const actors = getActors(querySnapshot);
        setActors(actors);
      }
    );
  }, []);

  /**
   * Naive implementation of searching. NOTE: Querying is case sensitive.
   */
  const performQuery = (searchTerm) => {
    const q = searchTerm
      ? query(actorsCollection, where("firstName", "==", searchTerm))
      : query(actorsCollection, orderBy("createdAt", "desc"));

    getDocs(q).then((querySnapshot) => setActors(getActors(querySnapshot)));
  };

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

  const updateHandler = (event, id) => {
    event.preventDefault();
    console.log("Aktualizuj");
    const updatedActor = {};
    updatedActor.firstName = event.target.firstName.value;
    updatedActor.lastName = event.target.lastName.value;
    updatedActor.age = event.target.updatedAge.value;
    updateDoc(doc(db, "papraki", id), updatedActor);
    setActorEditedId(null);
  };

  return (
    <>
      <h2>Search actors:</h2>
      <div>
        <label htmlFor="actorSearch">Search by actor's first name: </label>
        <input
          id="actorSearch"
          type="text"
          placeholder="e.g. John"
          onChange={(e) => performQuery(e.target.value)}
        />
      </div>

      <h2>Existing actors:</h2>
      <ul>
        {actors.map((item) => {
          return (
            <li className="actor_item" key={item.id}>
              <p>Imię: {item.firstName}</p>
              <p>Nazwisko: {item.lastName}</p>
              <p>Wiek: {item.age}</p>
              <button onClick={() => deleteHandler(item.id)}>
                Usuń aktora
              </button>
              <button onClick={() => setActorEditedId(item.id)}>
                Zaktualizuj dane aktora
              </button>
              {actorEditedId && actorEditedId == item.id && (
                <form
                  onSubmit={(event) => updateHandler(event, item.id)}
                  className="actor_form"
                >
                  <label htmlFor="firstName">Firstname: </label>
                  <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    defaultValue={item.firstName}
                  ></input>
                  <label htmlFor="lastName">Lastname: </label>
                  <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    defaultValue={item.lastName}
                  ></input>
                  <label htmlFor="updatedAge">Age: </label>
                  <input
                    name="updatedAge"
                    id="updatedAge"
                    type="number"
                    defaultValue={item.age}
                  ></input>
                  <button>Submit changes</button>
                </form>
              )}
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
