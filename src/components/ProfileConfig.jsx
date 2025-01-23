import './css/ProfileConfig.css'

const ProfileConfig = () => {
  return (
    <div className="profile-container">
      <img 
        src="https://i.redd.it/se9b1xwi8xo81.jpg" 
        alt="Profile" 
        className="profile-image"
      />
      <div className="profile-info">
        <h2 className="profile-name">Lucía Casillas</h2>
        <p className="profile-email">micorreo@correo.com</p>
      </div>
      <div className="action-buttons">
        <button className="action-btn">
          <img src="https://www.svgrepo.com/show/356335/logout.svg" className="icon" alt="Logout" />
          Salir
        </button>
      </div>
    </div>
  )
}

export default ProfileConfig;
