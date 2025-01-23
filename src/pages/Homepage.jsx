import 'react';
import './Homepage.css';
import Sidebar from '../components/Sidebar';
import ChatInput from '../components/ChatInput';

function Homepage() {
    return (
        <div className="homepage-container">
            <Sidebar />
            <ChatInput />
        </div>
    );
}

export default Homepage;
