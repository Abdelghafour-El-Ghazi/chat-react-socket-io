import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import './Chat.css';
import TextContainer from '../TextContainer/TextContainer';

let socket;
const Chat = ({location}) =>  {
    const [users,setUsers] = useState([])
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    

    const ENDPOINT = 'https://react-chat-app-2020.herokuapp.com';
    
    useEffect(()=>{
        const {name,room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},()=>{
        });
        },[ENDPOINT,location.search])
    useEffect(()=>{
        
        socket.on('message',(message)=>{
            socket.on('roomData',(inOut)=>{
                const {users} = inOut;
                
                setUsers(users);
    
            })
            setMessages([...messages,message])

        })
    },[messages]);

const sendMessage = (e)=>{
    e.preventDefault();
    if(message){
        socket.emit('sendMessage',message,()=>setMessage(''))
    }
}

        


    return (
        <div className='outerContainer'>
            <div className='container'>

            <InfoBar room={room}/>
            <Messages messages={messages} name={name}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            
            
            
            
            
            </div>
            <TextContainer users={users}/>
        </div>
    )
}
export default Chat; 
