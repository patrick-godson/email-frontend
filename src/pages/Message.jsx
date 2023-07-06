import React from 'react';
import {useLocation} from 'react-router-dom';

export default function Message(){
    const [message, setMessage] = React.useState([]);

    const location = useLocation();
    
    const emailId = location.pathname.split("/")[2];
    console.log(location.pathname);

    React.useEffect(()=>{
        fetch(`https://emailbox-api-jtf5.onrender.com/message/${emailId}`, {mode: no-cors})
        .then(res => res.json())
        .then(data => setMessage(data))
    }, []);

    return (
        <div>
            <div className="emailContainer">
                <div key={message._id}>
                    <h2>{message.subject}</h2>
                    <p  className='emailContent'>{message.content}</p>
                </div>
            </div>
        </div>
    );
}