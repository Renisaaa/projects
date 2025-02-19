import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {
       const [roomId, setRoomId] =useState('');
       const [username, setUsername] =useState('');
       const createNewRoom= (e) => {
         e.preventDefault();
         const id =uuidv4();
         setRoomId(id);
          toast.success('Created a New Room');
          
         
       }


    return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
          <img className='homePageLogo'src='/logo192.png' alt='code-sync-logo' />

          <h4 className='mainLable'> Paste invitation ROOM ID</h4>

          <div className='inputGroup'>
             
             <input 
             type="text" 
             className='inputBox'
              placeholder='ROOM ID'
              onChange={(e)=> setRoomId(e.target.value)}
              value={roomId}
              />

              <input
               type="text" 
               className='inputBox'
                placeholder='USERNAME'
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                
                />

              <button className='btn joinbtn'>Join</button>
              <span className='createInfo'>
                If you don't have an invite &nbsp;
                <a onClick={createNewRoom} href='' className='createNewBtn'>
                    New Room
                </a>
              </span>
          </div>
        </div>
           <footer>
              <h4> Built with 💛 by RENISA</h4>

           </footer>

    </div>
    );

};

export default Home;