import {useState, useEffect} from "react";
import {useLocation} from 'react-router-dom';

export default function Message(){
    const [message, setMessage] = useState([]);

    const location = useLocation();
    
    const emailId = location.pathname.split("/")[2];

    useEffect(()=>{
        fetch(`http://localhost:3500/message/${emailId}`)
        .then(res => res.json())
        .then(data => setMessage(data))
    }, []);

    return (
        <div>
            <div className="emailContainer">
                {message && 
                    <div key={message._id}>
                        <h2>{message.subject}</h2>
                        <p  className='emailContent'>{message.content}</p>
                    </div>
                }
            </div>
        </div>
    );
}
