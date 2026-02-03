import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Ingreso() {
  useEffect(() => {
    const headLink = document.createElement("link");
    headLink.rel = "stylesheet";
    headLink.href = "assets/css/main.css";
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
      s.async = false;
      document.body.appendChild(s);
      return s;
    });

    return () => {
      if (headLink.parentNode) headLink.parentNode.removeChild(headLink);
      scripts.forEach((s) => s.parentNode && s.parentNode.removeChild(s));
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.title = "Inicio - Ingreso";
    }, 100); // 100ms después de cargar todo
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          <section>
            <header className="main">
              <h1>Ingreso</h1>
            </header>

            <span className="image main"><img src="images/pic13.jpg" alt="" /></span>
            <hr className="major" />

            <p style={{ color: '#555', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              <h2>Nuevos Ingresos <span style={{ color: '#0066cc', textDecoration: 'underline' }}>Velero de Preparación Período 2026-I</span></h2>
              Modalidad de Carga de los Documentos Requeridos para el Proceso de Registro de Inscripción del Velero de Preparación Período 2026-I, en la Universidad Nacional Experimental Marítima del Caribe, <span style={{ backgroundColor: '#ffff00', fontWeight: 'bold' }}>SEGÚN CUO-009-106-X-2024</span>.
              <br /><br />
              Proceso de Digitalización de Documentos (En Original y a Color) <span style={{ color: '#0066cc', textDecoration: 'underline' }}>Leer Instructivo</span>.
              <br /><br />
              <strong>Aspirantes a ingresar en la Universidad Nacional Experimental Marítima del Caribe, deben consignar los siguientes documentos originales de forma digital (Siguiendo el instructivo de digitalización de documentos):</strong>
              <br /><br />
              1. Original de la <strong>CÉDULA DE IDENTIDAD</strong>.
              <br />
              2. <strong>ORIGINAL DEL CERTIFICADO DE PARTICIPACIÓN DE OPSU ACTUALIZADO</strong> o la inscripción en el CNU o el RUSNIES (Registro Único del Sistema Nacional de Ingreso a la Educación Superior)
              <br />
              3. <strong>CERTIFICACIÓN DE CALIFICACIONES</strong> con su timbre fiscal.
              <br />
              4. <strong>TÍTULO DE BACHILLER</strong> con sus respectivos timbres fiscales.
              <br /><br />
              <strong>PARA LOS ASPIRANTE A INGENIERÍA MARÍTIMA TODOS LOS REQUISITOS ANTERIORES MÁS LOS QUE SE MENCIONAN A CONTINUACIÓN:</strong>
              <br /><br />
              5. <strong>PRUEBA MÉDICA INTERNA</strong> (formato de la universidad) debidamente llenada y firmada por el médico de la universidad, <strong>DIRIGIRSE AL CONSULTORIO DE ATENCIÓN MÉDICA DE LA UNIVERSIDAD</strong>, SEGÚN LA FECHA DE CITA PROGRAMADA POR DÍA DE ATENCIÓN.
              <br /><br />
              - EDAD COMPRENDIDA ENTRE 16 Y 25 AÑOS.
              <br />
              - ESTATURA MÍNIMA DE 1.60 MTS. Y PESO PROPORCIONAL A LA ESTATURA.
              <br />
              - NO TENER TATUAJES VISIBLES.
              <br />
              - CABALLEROS: NO TENER SARCILLOS O PIERCING, CORTE DE CABELLO RASO Y UÑAS CORTAS.
              <br />
              - DAMAS: NO TENER PIERCING, CABELLO RECOGIDO TIPO CEBOLLA Y UÑAS CORTAS CON ESMALTE DE TONOS CLAROS.
              <br /><br />
              6. <strong>ENTREVISTA INTERNA HECHA POR LA ESCUELA NÁUTICA DE VENEZUELA (DIRIGIRCE A LA DIRECCIÓN DE ESCUELA NÁUTICA EN LA SEDE DE LA UNIVERSIDAD MARÍTIMA DEL CARIBE)</strong>, SEGÚN LA FECHA DE CITA PROGRAMADA POR DÍA DE ATENCIÓN EN LA <strong>LISTA DE ASIGNADOS 2026-01</strong>.
              <br />
              7. <strong>CREAR UN CORREO GMAIL PARA FINES ACADÉMICOS</strong>.
              <br /><br />
              <strong>NOTA:</strong> Todos los documentos deben ser escaneados desde el original y guardados en un solo archivo en PDF <span style={{ backgroundColor: '#ffff00', fontWeight: 'bold' }}>y un máximo de 4MB</span>. El proceso de inscripción será único y exclusivamente vía <strong>Web del 16 AL 27 DE MARZO DE 2026</strong>.
            </p>

          </section>
          <Footer />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

