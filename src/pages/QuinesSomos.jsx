import './QuienesSomos.css';
import {Link} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function QuienesSomos() {
  return (
    <div className="QuienesSomos">
      <div className="bg-img">
        <div className="overlay-text">
          <p>Ciencia de</p>
          <p>Conciencia</p>
        </div>
        <div className="container">
          <div className="topnav">
            <div className="brand">Hakan</div>
            <div className="nav-links">
              <Link  to="/">Quiénes Somos</Link>
              <Link  to="/proyecto">Nuestro Proyecto</Link>
              <Link to="/accion"><button className="cta-button">Pasa a la acción</button></Link>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section0">
        <div className="section-content">
          <p className='titulo'>Conservemos el agua mediante la recopilación y la toma de acción.</p>
          <div className="text justified-text">   
            <p>En México, la gestión del agua enfrenta desafíos urgentes exacerbados por la amplia contaminación de diversos cuerpos de agua. Aunque se han detectado problemas en áreas específicas, persiste la incertidumbre sobre la calidad del agua en zonas remotas y de difícil acceso. Esta falta de información dificulta la implementación de estrategias efectivas a nivel nacional. La contaminación no solo afecta el suministro de agua potable, sino también los ecosistemas acuáticos locales y la biodiversidad. Es crucial intensificar la investigación y las políticas para conservar y rehabilitar cuerpos de agua, asegurando su acceso seguro y sostenibles.</p>
          </div>
        </div>
      </section>

      <section className="section1">
        <div className="section-content">
          <div className="section1-content">
            <div className="text justified-text">
              <p className="titulo">Agua en Jalisco</p>
              <p>
              En Jalisco, la contaminación del agua es un grave problema que afecta ríos, lagos y pozos. Más del 40% de estos cuerpos de agua están contaminados debido a actividades industriales, agrícolas y urbanas. Esta situación no solo representa riesgos significativos para la salud pública, sino que también está causando un deterioro alarmante en los ecosistemas acuáticos locales. Es crucial implementar medidas urgentes para mitigar esta contaminación y asegurar la disponibilidad de agua segura y saludable para las comunidades y el medio ambiente en Jalisco.</p>
            </div>
            <div className="image">
              <img src="https://images.pexels.com/photos/3614167/pexels-photo-3614167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contaminación acuática" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section-content">
          <div className="section2-content">
            <div className="image">
              <img src="https://images.pexels.com/photos/6907089/pexels-photo-6907089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contaminación acuática" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="text justified-text">
              <p className="titulo">Laguna de Cajititlán</p>
              <p>La Laguna de Cajititlán se encuentra en una situación alarmante debido a graves problemas de contaminación que amenazan tanto su biodiversidad como la salud de las comunidades locales. Entre los principales contaminantes se encuentran metales pesados, desechos industriales y agrícolas, así como aguas residuales sin tratar. Estos factores están provocando una pérdida significativa de biodiversidad y problemas de salud entre las comunidades cercanas, además de una notable reducción en la calidad del agua. Es fundamental implementar medidas urgentes para remediar esta situación y proteger tanto el ecosistema de la laguna como la salud de quienes dependen de ella.</p>
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

export default QuienesSomos;
