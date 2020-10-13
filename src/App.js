import React,{useState,useEffect} from 'react';
import './App.css';
import { InputLabel,FormControl,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input,setInput] =useState('')
  const [messages,setMessage]=useState([])
  const [username,setUsername]=useState()

  useEffect(() => {
    db.collection('message_clone').orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
   
  }, [])

  useEffect(() => {
    setUsername(prompt("Please Enter your name"))
  }, [])

  const sendMessage=(e)=>{
    e.preventDefault()
    db.collection("message_clone").add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage([...messages,{username:username,text:input}])
    setInput('')
  }

  

  return (
    <div className="App">
      <img src="https://scontent.fcok2-1.fna.fbcdn.net/v/t39.8562-6/37789948_1959933824027454_666414594595487744_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=Gq40jI-kFygAX_vgHfZ&_nc_ht=scontent.fcok2-1.fna&oh=a21079190760fcd952e3ec2621d88e49&oe=5FABBDB3" alt="cool"></img>
     <h1>Hello Hashik</h1>
  <h2>welcome:{username}</h2>
    <form className="app__form">
       <FormControl className="app__formcontrol">
          <InputLabel>Write Message</InputLabel>
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event =>setInput(event.target.value)}/>
          <IconButton className="app__iconbutton" disabled={!input} variant="contained" color="secondary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        
     </FormControl>
     </form>
     <FlipMove>
        {messages.map(({id,message})=>(
          <Message key={id} username={username} message={message}/>
          ))
        }
     </FlipMove>
    

    </div>
  );
}

export default App;
