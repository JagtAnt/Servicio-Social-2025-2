import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Index() {
  useEffect(() => {
    // Dynamically inject the original CSS and JS so the template works the same
    const headLink = document.createElement("link");
    headLink.rel = "stylesheet";
    headLink.href = "assets/css/main.css"; // keep original path & filename
    document.head.appendChild(headLink);

    const scriptSrcs = [
      "assets/js/jquery.min.js",
      "assets/js/browser.min.js",
      "assets/js/breakpoints.min.js",
      "assets/js/util.js",
      "assets/js/main.js",
    ];

    const scripts = scriptSrcs.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // preserve original load order
      document.body.appendChild(s);
      return s;
    });

    return () => {
      // cleanup
      if (headLink && headLink.parentNode) headLink.parentNode.removeChild(headLink);
      scripts.forEach((s) => {
        if (s && s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, []);

  useEffect(() => {
  const timeout = setTimeout(() => {
    document.title = "Inicio - UMC";
  }, 100); // 100ms después de cargar todo
  return () => clearTimeout(timeout);
}, []);

  return (
    <div id="wrapper">
      
      {/* Main */}
      <div id="main">

        <div className="inner">

          {/* Header */}
          <Header />

          {/* Banner */}
          <section id="banner">
            <div className="content">
              <header>
                <h1>Universidad Marítima<br />
                  del Caribe</h1>
                <p>	Patria, escuela, buque y mar</p>
              </header>
              <p>Fundada en 1811, única universidad en Venezuela que forma profesionales marítimos.</p>
            </div>
            <span className="image object">
              <img src="images/pic10.png" alt="" />
            </span>
          </section>

          <section>
            <header className="major">
              <h2>Destacado</h2>
            </header>
            <div className="posts">
              <article>
                <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                <p>Zona de Estudiantes, información, solicitudes, encuestas y más.</p>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                <p>Caja de ahorro de los trabajadores.</p>
              </article>
            </div>
          </section>

          {/* Section */}
          <section>
            <header className="major">
              <h2>Recursos Académicos</h2>
            </header>
            <div className="features">
              <article>
                <span className="icon solid fa-envelope"></span>
                <div className="content">
                  <h3>Correo</h3>
                  <p>Accede al correo institucional de la Universidad Marítima del Caribe univermaritima@gmail.com"</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-calendar"></span>
                <div className="content">
                  <h3>Calendario Académico</h3>
                  <p>Encuentra información sobre las fechas en el calendario de la Universidad Marítima del Caribe  <a href="https://www.google.com">Ver Calendario</a></p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-book"></span>
                <div className="content">
                  <h3>Bilioteca</h3>
                  <p>Accede a la colección digital de libros, revistas y recursos académicos disponibles en la biblioteca de la Universidad Marítima del Caribe <a href="https://www.google.com">Ver Biblioteca</a></p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-info-circle"></span>
                <div className="content">
                  <h3>Informaciones</h3>
                  <p>Accede a las informaciones generales de la Universidad Marítima del Caribe <a href="https://www.google.com">Ver Informaciones</a></p>
                </div>
              </article>
            </div>
          </section>

          {/* Section */}
          <section>
            <header className="major">
              <h2>Nuestras Carreras</h2>
            </header>
            <div className="posts">
              <article>
                <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                <h3>Ingeniería Marítima</h3>
                <p></p>
                <ul className="actions">
                  <li><a href="#" className="button">Mas Información</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                <h3>Ingeniería Informática</h3>
                <p></p>
                <ul className="actions">
                  <li><a href="#" className="button">Mas Información</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                <h3>Ingeniería Ambiental</h3>
                <p></p>
                <ul className="actions">
                  <li><a href="#" className="button">Mas Información</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                <h3>Licenciatura en Administración</h3>
                <p></p>
                <ul className="actions">
                  <li><a href="#" className="button">Mas Información</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
                <h3>Licenciatura en Turismo</h3>
                <p></p>
                <ul className="actions">
                  <li><a href="#" className="button">Mas Información</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
                <h3>PNF en Transporte Acuático</h3>
                <p></p>
                <ul className="actions">
                  <li><a href="#" className="button">Mas Información</a></li>
                </ul>
              </article>
            </div>
          </section>

          

          <Footer />

        </div>

      </div>

      <Sidebar />

    </div>
  );
}
