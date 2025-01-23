import 'react'; 
import './css/Sidebar.css';
import ProfileConfig from './ProfileConfig';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img 
          src="https://freelogopng.com/images/all_img/1681038472chatgpt-logo.png" 
          alt="ChatGPT Logo" 
          className="logo" 
        />
        <img 
          src="https://www.svgrepo.com/show/526605/mirror-left.svg" 
          alt="Sidebar Icon" 
          className="sidebar-icon" 
        />
      </div>
      <button className="new-chat-button">
        <img src="https://www.svgrepo.com/show/510228/spark.svg" alt="New Chat Icon" />
        Nuevo chat
      </button>
      <p className="menu">Opciones</p>
      <ul className="menu-list">
        <li><img src="https://www.svgrepo.com/show/502700/history.svg" alt="History Icon" /> Historial</li>
        <li><img src="https://www.svgrepo.com/show/435264/bookmark-border.svg" alt="Collection Icon" /> Colección</li>
        <li><img src="https://www.svgrepo.com/show/533014/trash-blank.svg" alt="Trash Icon" /> Papelera</li>
        <li><img src="https://www.svgrepo.com/show/422062/help.svg" alt="Help Icon" /> Ayuda</li>
        <li><img src="https://www.svgrepo.com/show/529867/settings.svg" alt="Settings Icon" /> Configuración</li>
      </ul>
      <ProfileConfig />
    </div>
  );
};

export default Sidebar;