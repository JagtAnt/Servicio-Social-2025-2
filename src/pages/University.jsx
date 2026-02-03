import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function University() {
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
      document.title = "Inicio - Universidad";
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
              <h1>Universidad</h1>
            </header>

            <span className="image main"><img src="images/pic11.jpg" alt="" /></span>
            <hr className="major" />

            <h2>Historia</h2>

            <h3>El marino a través de la historia</h3>

            <p>En el umbral del siglo XIX, nació la inquietud de crear una Escuela Náutica , cuando el 10 de mayo de 1802 el segundo cónsul Real de Caracas Francisco Javier de Longa, propone a la Junta de Gobierno del Consulado se estudie la posibilidad de instaurar una Escuela Náutica para instruir a la juventud. El Consulado decidió que para ese instante no era factible establecer dicha escuela. El 10 de noviembre de 1809, el Capitán General Vicente Emparan junto con el Comandante del Apostadero de Marina de Puerto Cabello Juan Tiscar, plantean al Consulado construir una Escuela Náutica similar a las fundadas por los consulados españoles.

              La revolución del 19 de abril de 1810 terminó con las instituciones monárquicas españolas en Venezuela y genero la expulsión de sus funcionarios; se creó la Junta Suprema de Caracas. El 05 de septiembre de 1810, los pilotos del apostadero de Marina de Puerto Cabello Juan Trujillo y Pedro Iglesias, piden permiso a la Junta Suprema de caracas para construir un Escuela Náutica en La Guaira; se pasó la solicitud al Consulado, donde se estudió la factibilidad de fundar la escuela y se nombraron al Consiliario Sebastián Córdoba y Carranza para presentar el proyecto sobre la creación de la Escuela Náutica cuyo objetivo sería formar pilotos.

              El 14 de enero de 1811, el Consulado aprobó el plan presentado por Córdoba y Carranza y el 19 del mismo mes lo ratificó la Junta Suprema de Caracas. En Mayo de 1811, en Consulado determinó que la instalación de la Escuela finalizaría en junio de dicho año y pidió la autorización para comenzar las actividades el 1° de julio de 1811.

              El Supremo Ejecutivo aprobó dicha solicitud. Posteriormente, el Consulado publicó en la Gaceta de Caracas y en 100 avisos de la imprenta de Juan Baillío, que fueron repartidos en los puertos y ciudades de las provincias, el inicio de las clases en la Escuela Náutica para el 1° de julio de 1811. La Escuela Náutica realizó sus actividades educativas por ocho meses y 25 días, finalizando sus funciones, en esta primera etapa, por la destrucción de su casa sede ocasionada por el terremoto del 26 de marzo de 1812.

            </p>

            <h3>Avisos oficiales</h3>

            <p>"El día 1° de Julio se abre en la Guayra la Escuela Náutica: son sus Maestros el 1° el Alférez de Fragata D. Vicente Parrado, y el 2° D. Pedro María Iglesia quienes enseñarán 16 Jóvenes de valde por ahora; y no llevarán por los que excedan más de 2 pesos mensuales á cada uno en: inteligencia que tanto estos como los demás disfrutarán de el asilo consular baxo cuya dirección se ha formado la Escuela. En la instrucción se emplearán tres horas por la mañana y dos por la tarde." (Gazeta de Caracas. N° 57, del 18 de junio de 1811).

              En reunión de fecha 07 de abril de 2010, del Consejo Universitario de la Universidad Marítima del Caribe, presidida por su Rector Profesor José Carlos Gaitán Sánchez, se aprobó la investigación de la génesis de la Escuela Náutica de 1811 efectuada por el Profesor Alexi Marcano Escorihuela.

              Fuente: Actas del Real Consulado del año 1802 al año 1812. (Archivo General de la Nación) Consideraciones

              La relación y provecho en el ejercicio de la navegación mercante de Venezuela tiene sus orígenes en la mismas naves de Cristóbal Colón, en los años del descubrimiento de América, quien ya había fungido en el viejo continente de traficante de lanas y con innumeras aventuras; a su regreso de la isla "La Española" desde el año 1492 al 1498, luego de haber tocado tierra firme, y entre otras, las hoy venezolanas, lleva consigo al Puerto Sanlúcar de Barrameda, España, una muestra de aquellos aborígenes, metales preciosos y perlas, alfarería, tejidos, frutos y animales, todo ello en calidad de mercadería novedosa y sorprendente.

              Extendido tales oficios por el Mar Caribe, estas gestiones las asumían compañías poderosas, tales como las de los Welser, de Alemania, quienes habían financiado a Carlos V a comienzos del siglo XVI, orientando, a la sazón, muchos de sus negocios hacia la América Española. Poco tiempo después entra en acción la gran empresa Jesuita La Guipuzcoana, con sede en la Provincia cantábrica y ésta se hace dominante hasta los finales del siglo XVIII.
              Mas, pese a que ya se encontraban convulsionados los pueblos sudamericanos por los inquietantes brotes revolucionarios que precursaban la Emancipación; el comercio de productos principales exigía mayor organización para fomentar una empresa naviera en estos lados de la Provincia, a cuyos requerimientos respondió, en el 1810, la Junta Suprema Conservadora de los Derechos de Fernando VII, decretando en el mes de septiembre de ese año, la creación de una "Academia de Matemáticas" en Caracas, con la finalidad de "proporcionar a la juventud aplicada los medios de útiles al Estado en cualquier carrera que emprendan y una ESCUELA PÚBLICA DE NÁUTICA en La Guaira, con un plan de estudios de tres años.
            </p>

            <h3>Cronología</h3>

            <p>Cronología
              Corría el año 1946, y un nuevo Decreto emanado de la Junta Revolucionaria de Gobierno dejaba definitivamente creada la "Escuela Náutica de Venezuela", la que iría a funcionar en el vecino pueblo de Macuto. Después, el 17 de marzo de 1955, es trasladada dicha Institución a ésta su actual locación de Catia La Mar y queda dignamente dirigida por el Capitán de Altura de la Marina Mercante Jesús Reyes.

              En el 1973, siendo Director de la Escuela el Capitán de altura Alejandro Marín López, se crea la "Escuela de Estudios Superiores de Marina Mercante" y su primer Director fue el Oficial de Marina Mercante y Economista José Moros Parada.

              Para el 1983, se eleva dicha Escuela a "Instituto Universitario de Marina Mercante" y hoy día, desde el 7 de Julio de 2000 en el gobierno del Presidente Hugo Chávez Frías, nuestra Alma Mater alcanza categóricamente el nivel de "Universidad Nacional Experimental Marítima del Caribe", correspondiendo al ilustre Profesor Miguel López García, el honor de ser su primer Rector.</p>

            <hr className="major" />

            <h3>De Escuela Náutica a Universidad</h3>
            <p>El presidente de la República Bolivariana de Venezuela Hugo Rafael Chávez Frías, encomendó al Ministro de Educación para el año 1.999, profesor Héctor Navarro, el establecimiento de una Universidad para la capacitación académica de los marinos mercantes y la formación de profesionales orientados a la actividad marítima, con una visión integral.

              Coincidía esta solicitud del ejecutivo nacional con el interés manifestado de un grupo de oficiales de la Escuela de Estudio Superior de la Marina Mercante (EESMM) en transformar la Escuela Náutica de Venezuela en Universidad Marítima.

              La conjugación de ambas ideas impuso la solicitud de un estudio de factibilidad, por parte del ejecutivo nacional (a través de la Dirección General Sectorial de Transporte Acuático del Ministerio de Transporte y Comunicaciones), el cual se realizo en el año 1.999 con el apoyo de la Gobernación del Estado Vargas.

              En definitiva se iniciaba una Universidad de “avanzada, promotora del desarrollo social, de la protección ambiental y de la integración del ser humano y el mar”… con la que se había soñado.

              En julio del año 2.000 el presidente de la República Bolivariana de Venezuela Hugo Rafael Chávez Frías, asistió al acto de inauguración de la Universidad Marítima del Caribe, donde fueron juramentadas las Autoridades Rectorales fundadoras.

              El Ejecutivo Nacional, según lo establecido en el decreto 899, considero algunos aspectos relevantes para aprobar la creación de sta Universidad, entre estos: la necesidad de que la educación superior venezolana propusiera nuevas estructuras institucionales y modelos educativos, en aras de lograra una mayor eficiencia en la búsqueda de los valores transcendentales del ser humano frente a los procesos históricos, y que el Instituto Universitario de la Marina Mercante, Escuela Náutica de Venezuela a representado una alternativa válida para la educación superior de los miembros de la marina mercante nacional, con un alto nivel de autodisciplina, formación integral, adiestramiento y capacitación demostrado por sus egresados.

              Con muchas expectativas y con un grupo reducido de profesores, que luego fueron aumentando, se fueron implementando diversas actividades no solo en el orden académico sino también en lo referente a la ampliación de la infraestructura, dado que existía la necesidad de reorganizar el espacio físico.</p>

            <hr className="major" />

            <h3>Escuela Náutica de Venezuela</h3>
            <p>El 10 de agosto del 1.946 fue creada la Escuela Náutica de Venezuela mediante decreto N° 385, iniciando sus funciones en la ciudad de Macuto el 4 de noviembre del mismo año.  Sus actividades se realizaron en la Quinta “Bolívar”, también llamada “Quinta 13”, en donde funcionaba la sección académica y la dirección.  La lavandería se ubicaba en la “Quinta Ninón” y los camarotes en la “Quinta La Azuleja”,  localizándose estas dos últimas en el sector Las Quince Letras, en la parroquia Macuto del Estado Vargas.

              El 28 de julio de 1951 es colocada la primera piedra de las nuevas instalaciones de la Escuela Náutica de Venezuela en la Avenida El Ejercito, Catia La Mar, lugar donde “se diseña y construye un conjunto de edificaciones destinadas a la educación a nivel superior, suya realización integra de modo coherente el conjunto de valores que rigen la concepción de estas edificaciones:  la funcionalidad, el culto a lo práctico y lo útil; la ética, que fusiona lo natural y lo humano en la belleza de unas construcciones integradas al medio natural y al clima; lo temporal o el afán de permanencia en el tiempo, expresada no solo en la calidad de los materiales utilizados, sino en los criterios de diseño, pensado ambos en resistir el paso del tiempo.”

              gaceta oficialEl inmueble fue ocupado en marzo de 1.955, año en el cual quedó listo para su habitabilidad, empezando a funcionar el 17 de abril cuando se completo la mudanza.

              El 1.970 por resolución N° D.01 del 6.170 (G.O. N° 29.114), se crea la Escuela de Estudio Superior  de la Marina Mercante.

              El 9 de marzo de 1.982, por decreto presidencial N° 1433, nace el Instituto Universitario de la Marina Mercante, integrada por la Escuela Náutica, a nivel de pregrado y la Escuela de Estudios Superiores de la Marina Mercante, a nivel de postgrado.</p>


          </section>

          <Footer />

        </div>
      </div>

      <Sidebar />
    </div>
  );
}
