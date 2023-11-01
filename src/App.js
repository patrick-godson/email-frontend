import {Route, BrowserRouter, Routes,} from "react-router-dom";
import Home from './pages/Home';
import Inbox from './pages/Inbox';
import Message from './pages/Message';



function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/inbox" element={<Inbox />}/>
          <Route path="/message/:id" element={<Message />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
