import React from 'react';
import Unread from './Unread';
import '../style.css';

export default function Inbox(){
    const [emails, setEmails] = React.useState([]);

    React.useEffect(() => {
        fetch('https://emailbox-api-jtf5.onrender.com/inbox')
         .then(res => res.json())
         .then(data => setEmails(data));
     }, []);
   
     return (
         <div>
           <h1 className='inboxH1'>Messages</h1>
           <div className='emails'>
             {emails.map((email) => (
                 <div className='email' key={email._id}>
                   <a href={`/message/${email._id}`}>
                     <h3>{email.subject}</h3>
                     <p>{(email.content.length > 50) ? email.content.slice(0, 49) + "..." : email.content}
                       <span>
                         {(email.isRead === "false") && <Unread/>}
                       </span>
                     </p>
                     <hr className="ligne"/>
                   </a>
                 </div>
               ))}
           </div>
         </div>
     );
}