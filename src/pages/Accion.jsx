import './Accion.css';
import { Link } from 'react-router-dom';

function Accion() {
  const paypalUrl = "https://paypal.me/ZukaMarianaPonce";

  return (
    <div className="Accion">
      <div className="bg-imgA">
        <div className="overlay-text">
          <p> </p>
          <p>Pasa a la acción</p>
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
              <center><p className="titulo">Ayúdanos a ayudar</p></center>
              <p>Con tu valiosa colaboración, podemos impulsar un cambio positivo en Cajititlán, Jalisco, y en todo México. Tu apoyo es esencial para mejorar significativamente la calidad del agua y para proteger la rica biodiversidad de nuestros ecosistemas acuáticos. Juntos, podemos trabajar hacia soluciones sostenibles que aseguren un futuro más limpio y saludable para las generaciones venideras. Te invitamos a unirte a nuestra causa y ser parte activa de esta importante misión ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section-content">
          <div className="section2-content">
            <div className="content-container">
              <div className="text justified-text">
                <center><p className="titulo">Donar</p></center>
                <p>Puedes donar desde 5 pesos. Cada contribución, sin importar su tamaño, nos ayuda a continuar con nuestra misión de monitorear y mejorar la calidad del agua en nuestra región.</p>
                <a href={paypalUrl} target="_blank" rel="noopener noreferrer">
                  <center><button className="cta-button paypal-button">Donar con PayPal</button></center>
                </a>
              </div>
              <div className="text justified-text">
                <center><p className="titulo">Haz correr la voz</p></center>
                <p>Comparte nuestra página web con un amigo y síguenos en nuestras redes sociales. Tu apoyo en la difusión de nuestro proyecto es crucial para alcanzar más personas y generar un impacto mayor.</p>
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
            <p>Teléfono: +52 76394158</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Accion;
