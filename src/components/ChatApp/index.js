import { useEffect, useRef, useState } from "react";
import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot } from 'firebase/firestore'

import { auth, db } from "./firebaseConfig";
import Message from "./message";
import SendMessage from "./sendMessage";


const ChatRoom = () => {

    const [messages, setMessages] = useState([]);

    const scroll = useRef();
  
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe;
    }, []);

    const signOut = () => {
        auth.signOut();
    }

    return (
        <main className="ChatRoom">
            <div className="messages-header">
                <button onClick={signOut}>Sign out</button>
            </div>
            <div className="messages-wrapper">
                {messages?.map((message) => (
                <Message key={message.id} message={message} />
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll}/>
        </main>
    )
}


export default ChatRoom;