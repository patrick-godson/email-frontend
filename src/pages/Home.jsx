import React from 'react';



export default function Home(){
    const [total, setTotal] = React.useState(0);
    const [totalUnread, setUnread] = React.useState(0);

    React.useEffect(() =>{
        fetch('http://localhost:3500')
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
            <a href="http://localhost:3000/inbox" >View Messages</a>
          </div>
        </div>
    );
}