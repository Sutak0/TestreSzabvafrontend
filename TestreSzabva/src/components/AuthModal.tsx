import React from "react";
import "./AuthModal.css";

interface AuthModalProps {
  activeTab: "register" | "login";
  onClose: () => void;
  onTabChange: (tab: "register" | "login") => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  activeTab,
  onClose,
  onTabChange,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Megakadályozzuk, hogy a modal tartalmára kattintva bezáródjon */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Fejléc: tab-gombok + bezáró ikon (X) már kint */}
        <div className="modal-header">
          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => onTabChange("register")}
          >
            Regisztráció
          </button>
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => onTabChange("login")}
          >
            Bejelentkezés
          </button>
        </div>

        {/* Ide tesszük ki a bezáró gombot (X) teljesen, abszolút pozicionálva */}
        <span className="close-button" onClick={onClose}>
          &times;
        </span>

        <div className="modal-body">
          {/* REGISZTRÁCIÓS FÜL */}
          {activeTab === "register" && (
            <div className="tab-content tab-register">
              <h2>Csatlakozz a TestreSzabva közösséghez!</h2>
              <button className="social-button google">Folytatás Google-el</button>
              <button className="social-button facebook">Folytatás Facebook-al</button>
              <p className="separator">vagy lépj be e-mail címmel</p>

              <label>E-mail cím</label>
              <input type="email" placeholder="E-mail címed" />
              <label>Jelszó</label>
              <input type="password" placeholder="Jelszó" />

              <div className="newsletter">
                <input type="checkbox" id="newsletter" />
                <label htmlFor="newsletter">
                  Szeretnék hírlevelet kapni a legújabb étrendekről és receptekről
                </label>
              </div>

              <button className="submit-button">Regisztráció</button>
              <p className="info-text">
                A regisztrációval elfogadod a{" "}
                <a href="#felhasznalasi">felhasználási feltételeket</a> és az{" "}
                <a href="#adatvedelmi">adatvédelmi szabályzatot</a>.
              </p>
            </div>
          )}

          {/* BEJELENTKEZÉSI FÜL */}
          {activeTab === "login" && (
            <div className="tab-content tab-login">
              <h2>Bejelentkezés</h2>
              <label>E-mail cím</label>
              <input type="email" placeholder="E-mail címed" />
              <label>Jelszó</label>
              <input type="password" placeholder="Jelszó" />
              <button className="submit-button">Bejelentkezés</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
