import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../api/firebase";
import { useState } from "react";

const UploadFile = () => {
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0].files[0];
    console.log(file);
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);

    const uploadFile = uploadBytesResumable(storageRef, file);

    uploadFile.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot.bytesTransferred);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadFile.snapshot.ref).then((res) => {
          console.log(res);
          setImgUrl(res);
        });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" />
        <button type="submit">Upload file</button>
      </form>
      {!!imgUrl && <img src={imgUrl}></img>}
    </div>
  );
};

export default UploadFile;
