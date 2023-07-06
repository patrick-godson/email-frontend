import React from 'react';



export default function Home(){
    const [total, setTotal] = React.useState(0);
    const [totalUnread, setUnread] = React.useState(0);

    React.useEffect(() =>{
        fetch('https://emailbox-api-jtf5.onrender.com', {mode: "no-cors"})
        .then(res => res.json())
        .then(data => {setTotal(data.totalMessages); setUnread(data.unread)});
    }, []);

    return (
        <div className='homeContainer'>
          <div className='homeContent'>
            <h1>Hello <span className='spanName'>Patson</span></h1>
            <h2>
              You have {totalUnread} unread messages out of {total}
            </h2>
            <a href="https://emailbox-9n1z.onrender.com/inbox" >View Messages</a>
          </div>
        </div>
    );
}