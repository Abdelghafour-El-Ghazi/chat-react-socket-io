import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({message:{user,text},name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = user.trim().toLowerCase();
    
    if(trimmedName === name.trim().toLowerCase()){
        isSentByCurrentUser = true;
    }
     return ( isSentByCurrentUser ? ( 
        <div className='messageContainer justifyEnd'>
             <p className='sentText pr-10'>{trimmedName}</p>
            <div className='messageBox backgroundBlue'>
            <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
            
            </div>
            
        </div> )
        : (
        <div className='messageContainer justifyStart'>
          
           <div className='messageBox backgroundLight'>
            <p className='messageText colorDark'>{text}</p>
           </div>

           <p className='sentText'>{user}</p>
       
        </div>)
    )
}
export default Message;