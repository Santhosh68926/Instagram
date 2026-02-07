import React from "react";
import "./ShareModal.scss";

function ShareModal({ onClose }) {
  return (
    <div className="ShareOverlay" onClick={onClose}>
      <div className="ShareModal" onClick={(e) => e.stopPropagation()}>
        <h4>Share</h4>

        <div className="ShareOptions">
          <div className="ShareIcon">
            <i className="bi bi-whatsapp"></i>
            <span>WhatsApp</span>
          </div>

          <div className="ShareIcon">
            <i className="bi bi-instagram"></i>
            <span>Instagram</span>
          </div>

          <div className="ShareIcon">
            <i className="bi bi-link-45deg"></i>
            <span>Copy Link</span>
          </div>

          <div className="ShareIcon">
            <i className="bi bi-telegram"></i>
            <span>Telegram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
