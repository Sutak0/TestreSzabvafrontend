import React, { useState } from "react";
import AuthModal from "./AuthModal";
import "./Home.css";
import weeklyschedule from './schedule.jpeg'
import ingredientbook from './egg.jpeg'
import communityhealth from './community.jpeg'

const Home: React.FC = () => {
  // Popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  // Hamburger menü mobilon
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openRegister = () => {
    setActiveTab("register");
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setActiveTab("login");
    setIsModalOpen(true);
  };

  return (
    <div className="home-container">
      {/* ======== Felső menüsor / HEADER ======== */}
      <header className="home-header">
        <div className="header-inner">
          <div className="logo">TestreSzabva</div>
          <nav className={`header-links ${isMobileMenuOpen ? "open" : ""}`}>
            <a href="#heti-etrend" onClick={() => setIsMobileMenuOpen(false)}>
              Heti Étrend
            </a>
            <a href="#receptek" onClick={() => setIsMobileMenuOpen(false)}>
              Receptek
            </a>
            <a href="#kapcsolat" onClick={() => setIsMobileMenuOpen(false)}>
              Kapcsolat
            </a>
            <button
              className="header-button outline"
              onClick={() => {
                openRegister();
                setIsMobileMenuOpen(false);
              }}
            >
              Regisztráció
            </button>
            <button
              className="header-button filled"
              onClick={() => {
                openLogin();
                setIsMobileMenuOpen(false);
              }}
            >
              Bejelentkezés
            </button>
          </nav>
          {/* Hamburger ikon mobilon */}
          <div
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* ======== HERO Szekció ======== */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Formáld át az életed a TestreSzabva programmal!</h1>
            <p>
              A személyre szabott heti étrendjeink és receptjeink segítségével
              könnyedén követheted az egészséges életmódot, és támogatjuk a
              céljaid elérését.
            </p>
            <button className="cta-button" onClick={openRegister}>
              Próbáld ki most
            </button>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">Kép helye</div>
          </div>
        </div>
      </section>

      {/* ======== Hogyan működik? ======== */}
      <section className="how-section" id="heti-etrend">
        <h2>Hogyan működik a TestreSzabva?</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Töltsd ki a kérdőívet</h3>
            <p>
              Írd be adataid (magasság, súly, célok, preferenciák), hogy
              személyre szabottan állíthassuk össze az étrendedet.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Állítsd össze a menüdet</h3>
            <p>
              Válogass a különböző receptekből, és generálj bevásárlólistát, hogy
              mindig tudd, mit kell venned.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Kövesd a haladást</h3>
            <p>
              Monitorozd a fejlődésed, oszd meg sikereidet, és kérj tanácsot a
              közösségtől.
            </p>
          </div>
        </div>
      </section>

      {/* ======== Fő funkciók ======== */}
      <section className="features-section" id="receptek">
        <h2>A TestreSzabva fő funkciói</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image"><img src={weeklyschedule} alt="Heti Étrend" className="feature-image"/></div>
            <h3>Személyre szabott heti menü</h3>
            <p>
              Légy a saját tested szakértője! Kérdőívünkkel céljaidhoz igazított
              menüt állítunk össze.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-image"><img src={ingredientbook} alt="Receptgyűjtemény" className="feature-image"/></div>
            <h3>Receptgyűjtemény</h3>
            <p>
              Édes és sós finomságok, egészséges desszertek és főételek – a
              választék határtalan!
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-image"><img src={communityhealth} alt="Közösség" className="feature-image"/></div>
            <h3>Aktív közösség</h3>
            <p>
              Csatlakozz hozzánk, kérj tanácsot, ossz meg tippeket – mindenki
              segíti egymást!
            </p>
          </div>
        </div>
      </section>

      {/* ======== Vélemények ======== */}
      <section className="testimonials-section">
        <h2>Vélemények</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              „Az étrendek segítségével már 5 kilótól megszabadultam anélkül,
              hogy folyton éhes lettem volna!”
            </p>
            <p className="testimonial-author">– Anita, 32 éves</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              „Bár sokat dolgozom, a TestreSzabva heti menüje egyszerűen
              követhető és időt spórol nekem a bevásárlásnál is.”
            </p>
            <p className="testimonial-author">– Tamás, 28 éves</p>
          </div>
        </div>
      </section>

      {/* ======== Előnyök / Kiemelt tartalom ======== */}
      <section className="benefits-section">
        <h2>Miért válaszd a TestreSzabva megoldásait?</h2>
        <ul>
          <li>Egyedülálló heti étrend-menedzsment</li>
          <li>Könnyen követhető, érthető útmutatók</li>
          <li>Professzionális dietetikusok által jóváhagyott receptek</li>
          <li>Egyszerű heti bevásárlólista és étkezési terv</li>
          <li>Folyamatosan bővülő tartalom és közösségi támogatás</li>
        </ul>
        <button className="cta-button secondary">Tudj meg többet</button>
      </section>

      {/* ======== Kapcsolat / CTA ======== */}
      <section className="cta-section" id="kapcsolat">
        <h2>Csatlakoznál vagy kérdésed van?</h2>
        <p>
          Lépj kapcsolatba velünk bátran, vagy regisztrálj és próbáld ki
          ingyenesen a TestreSzabva étrendtervezőt!
        </p>
        <button className="cta-button" onClick={openRegister}>
          Regisztráció
        </button>
      </section>

      {/* ======== Footer ======== */}
      <footer className="home-footer">
        <div className="footer-content">
          <p>© 2025 TestreSzabva – Minden jog fenntartva.</p>
        </div>
      </footer>

      {/* ======== AuthModal ======== */}
      {isModalOpen && (
        <AuthModal
          activeTab={activeTab}
          onClose={() => setIsModalOpen(false)}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      )}
    </div>
  );
};

export default Home;
