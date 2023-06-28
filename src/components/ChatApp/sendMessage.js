import React, {useState} from "react"
import { auth, db } from "./firebaseConfig"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const SendMessage = ({scroll}) => {
    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
          alert("Enter valid message");
          return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: message,
          name: displayName,
          avatar: photoURL,
          createdAt: serverTimestamp(),
          uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({behavier: "smooth"})
      };

    return (
        <form className="send-message" onSubmit={(event) => sendMessage(event)}>
            <label htmlFor="messageInput">Enter Message</label>
            <input id="messageInput" name="messageInput" type="text" className="form-input__input" placeholder="type message...." value={message} onChange={(e) => setMessage(e.target.value)}/>
        </form>
    )
}


export default SendMessage;