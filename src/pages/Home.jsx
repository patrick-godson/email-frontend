import {useEffect, useState} from "react";

export default function Home(){
    const [total, setTotal] = useState(0);
    const [totalUnread, setUnread] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() =>{
        fetch('https://emailbox-api-1101.onrender.com')
        .then(res => res.json())
        .then(data => {setData(data);});
    }, []);

    return (
        <div className='homeContainer'>
          <div className='homeContent'>
            <h1>Hello <span className='spanName'>Patson</span></h1>
            {data && <h2>
              You have {data.unread} unread messages out of {data.totalMessages}
            </h2>}
            <a href="http://localhost:3000/inbox" >View Messages</a>
          </div>
        </div>
    );
}
