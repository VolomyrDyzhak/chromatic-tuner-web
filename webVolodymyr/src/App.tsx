import './App.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Volodymyr Dyzhak</h1>
    </header>
  );
}

function Subtitle() {
  return (
    <h2 className="subtitle">Software Engineer | Flutter & Unity Developer</h2>
  );
}


function Contact(){
  return(
    <div className="contact">
        <a href="https://www.linkedin.com/in/volodymyr-dyzhak-95a687347/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BL6NyD4baRBmP2aYiXlaa0g%3D%3D"target="_blank">LinkedIn</a>
        <span>·</span>
        <a href="mailto:volodymyrdyzhak@gmail.com">Email</a>
        <span>·</span>
        <a href="https://wa.me/34634340416">Whatsapp</a>
      </div>
  )
}


function InfoBox() {
  return (
    <section className="info-box">
      <img 
        src="yo.png" 
        alt="Profile" 
        className="profile-image"
      />

      
      <p className="info-text">
        Especializado en el desarrollo de aplicaciones móviles multiplataforma y 
        experiencias interactivas. Actualmente enfocado en la creación de 
        soluciones eficientes con Flutter, Swift, Kotlin, KMP y proyectos técnicos en Unity. 
        Además, cuento con conocimientos sólidos en desarrollo de aplicaciones web con React, Node.js y Express.
        Con una pasión por la innovación, busco optimizar el rendimiento y la experiencia del usuario en cada proyecto.
      </p>

      

    </section>
  );
}

function AppPromotion() {
  return (
    <section className="promotion-box">
      <h3 className="promotion-title">Mi última App: Chromatic Tuner</h3>
      
      <img 
        src="logo.png" 
        alt="Chromatic Tuner Logo" 
        className="promotion-logo" 
      />
      
      <p className="promotion-text">
        Una herramienta precisa y profesional para músicos que buscan la afinación perfecta. 
        Disponible ahora para mejorar tu experiencia musical.
      </p>
      
      <a 
        href="https://apps.apple.com/es/app/chromatic-tuner-app/id6759974644?l=en-GB" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Descargar en App Store
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 - Construido con React</p>
    </footer>
  );
}

function App() {
  return (
    <main className="app-container">
      <Header />
      <Subtitle />
      <Contact/>
      <InfoBox />
      <AppPromotion /> 
      <Footer />
    </main>
  );
}

export default App;
