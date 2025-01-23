import "react";
import "./css/ChatInput.css";

const ChatInput = () => {
  const formatDate = () => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("es-ES", options).replace("de", "de");
  };

  return (
    <div className="chat-input-container">
      <div className="quick-access-bar">
        <img
          src="https://www.svgrepo.com/show/436665/bubble-left-fill.svg"
          alt="chat bubble"
          className="chat-icon"
        />
        <div className="new-chat">
          <span>New Chat</span>
          <span className="chat-date">{formatDate()}</span>
        </div>
        <span className="edit-icon-wrapper">
          <img
            src="https://www.svgrepo.com/show/522525/edit-2.svg"
            alt="edit icon"
            className="edit-icon"
          />
        </span>
        <div className="action-icons">
          <img
            src="https://www.svgrepo.com/show/529135/pin.svg"
            alt="pin icon"
            className="action-icon"
          />
          <img
            src="https://www.svgrepo.com/show/435264/bookmark-border.svg"
            alt="bookmark icon"
            className="action-icon"
          />
          <img
            src="https://www.svgrepo.com/show/524196/upload.svg"
            alt="upload icon"
            className="action-icon"
          />
          <img
            src="https://www.svgrepo.com/show/533014/trash-blank.svg"
            alt="trash icon"
            className="action-icon"
          />
        </div>
      </div>

      <div className="chat-input-box">
        <div className="title">ChatGPT</div>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://www.svgrepo.com/show/437519/bubble-left-bubble-right.svg"
              alt="chat bubbles"
              className="card-icon"
            />
            <span>Ejemplos</span>
            <div className="example-box">
              Explícame cómo funciona la fotosíntesis
            </div>
            <div className="example-box">
              ¿Cuáles son las mejores recetas de comida mexicana?
            </div>
            <div className="example-box">
              ¿Cómo puedo aprender a programar desde cero?
            </div>
          </div>

          <div className="grid-item">
            <img
              src="https://www.svgrepo.com/show/526669/star.svg"
              alt="star shine"
              className="card-icon"
            />
            <span>Funciones</span>
            <div className="example-box">
              Proporciona retroalimentación precisa y detallada
            </div>
            <div className="example-box">
              Se actualiza con las últimas novedades de OpenAI
            </div>
            <div className="example-box">
              Aprende y mejora con cada interacción
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://www.svgrepo.com/show/348135/error.svg"
              alt="warning"
              className="card-icon"
            />
            <span>Restricciones</span>
            <div className="example-box">
              Puede generar información incorrecta
            </div>
            <div className="example-box">
              Conocimiento limitado después de 2022
            </div>
            <div className="example-box">
              No puede acceder a internet en tiempo real sin GPT PLUS
            </div>
          </div>
        </div>
      </div>

      <div className="message-input-container">
        <textarea
          className="message-input"
          placeholder="Envía un mensaje a ChatGPT"
          rows="1"
        ></textarea>
        <button className="send-button">
          <img
            src="https://www.svgrepo.com/show/505763/send-1.svg"
            alt="send message"
            className="send-icon"
          />
        </button>
      </div>
      
    </div>
  );
};

export default ChatInput;