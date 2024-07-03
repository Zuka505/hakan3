import React from 'react';
import './Proyecto.css';
import { Link } from 'react-router-dom';

function Proyecto() {
  return (
    <div className="Proyecto">
      <div className="bg-imgP">
        <div className="overlay-text">
          <p> </p>
          <p>Nuestro Proyecto</p>
        </div>
        <div className="container">
          <div className="topnav">
            <div className="brand">Hakan</div>
            <div className="nav-links">
              <Link to="/">Quiénes Somos</Link>
              <Link to="/proyecto">Nuestro Proyecto</Link>
              <Link to="/accion"><button className="cta-button">Pasa a la acción</button></Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section0">
        <div className="section-content">
          <div className="section0-content">
            <div className="text justified-text">
              <center><p className='titulo'>Hakan</p></center>
              <p>Hakan es un avanzado sistema de monitoreo de la calidad del agua basado en teledetección y inteligencia artificial. Utilizamos tecnología de vanguardia para detectar y analizar la contaminación en cuerpos de agua a cielo abierto. Nuestro principal objetivo es ofrecer datos precisos y accesibles que sean cruciales para la toma de decisiones ambientales informadas. Al proporcionar información detallada sobre la calidad del agua, contribuimos directamente a proteger la salud pública y los frágiles ecosistemas acuáticos. Además, Hakan facilita la identificación temprana de problemas ambientales, permitiendo una respuesta rápida y efectiva para mitigar impactos negativos. Nos comprometemos a trabajar en colaboración con autoridades, investigadores y comunidades locales para garantizar un manejo sostenible de nuestros recursos hídricos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section-content">
          <div className="section2-content">
            <div className="image">
              <img src="https://www.tlajomulco.gob.mx/sites/default/files/transparencia/IndicadoresSP/DivisionSectores.png" alt="Mapa de sectores" />
            </div>
            <div className="image">
              <img src="ht" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="section-content">
          <div className="section3-content">
            <div className="point">
              <div className="icon">
                <i className="fas fa-satellite"></i>
              </div>
              <div className="info">
                <p className="titulo">Recolección de Datos</p>
                <p>Utilizamos imágenes satelitales de alta calidad para analizar cuerpos de agua.</p>
              </div>
            </div>
            <div className="point">
              <div className="icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="info">
                <p className="titulo">Análisis con Inteligencia Artificial</p>
                <p>Nuestro algoritmo avanzado identifica patrones de contaminación.</p>
              </div>
            </div>
            <div className="point">
              <div className="icon">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div className="info">
                <p className="titulo">Validación In Situ</p>
                <p>Drones verifican y validan los datos obtenidos.</p>
              </div>
            </div>
            <div className="point">
              <div className="icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="info">
                <p className="titulo">Plataforma Interactiva</p>
                <p>Proporcionamos acceso público a datos a través de mapas interactivos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61561504696464" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://x.com/HakanProject" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
          <div className="contact-info">
            <p>Correo: projecthakan@gmail.com</p>
            <p>Telefono: +52 76394158</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Proyecto;
