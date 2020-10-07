import React from 'react';


export default function Feed (props) {
        let names = props.users.map(user => {
        return ( <div> {user.name} </div>)
        
        })
        return ( 
       <div className='feed'>
            <div className='main'>
                
                
                <h1>This b Feed</h1>
                {names}
            </div>
          
        </div>
        )

};




