import React from 'react';


const SobreNosotros = () => {
  return (
    <main>
      <section id="sobre-nosotros">
        <h1>Sobre Nosotros</h1>
        <p>
          En PonteTech, estamos dedicados a proporcionar la mejor tecnología a nuestros clientes. Desde nuestra
          fundación en 2010, nos hemos esforzado por ofrecer una amplia gama de productos tecnológicos de alta calidad,
          desde smartphones de última generación hasta smartwatches innovadores y accesorios esenciales.
        </p>
        <p>
          Nuestra misión es hacer que la tecnología avanzada sea accesible para todos, sin importar sus conocimientos
          técnicos. Creemos que cada persona merece experimentar lo último en innovación tecnológica, por lo que nos
          enfocamos en ofrecer productos que combinan funcionalidad y estilo.
        </p>
        <p>
          Nos enorgullecemos de nuestra atención al cliente y nos comprometemos a brindar una experiencia de compra
          excepcional. Nuestro equipo de expertos está siempre disponible para ayudarte a encontrar el dispositivo
          perfecto que se adapte a tus necesidades y estilo de vida.
        </p>
        <p>
          Gracias por elegir PonteTech como tu tienda de confianza para todas tus necesidades tecnológicas.
          ¡Esperamos seguir sirviéndote con productos de calidad y un servicio inigualable!
        </p>
      </section>

      <section id="ubicacion">
        <h3>Ubicación</h3>
        <p>
          Nos encontramos en el corazón de la ciudad para ofrecerte fácil acceso a lo último en tecnología.
          Visítanos en nuestra tienda física:
        </p>
        <p>
          <strong>Dirección:</strong> Calle Falsa 123, Buenos Aires, Argentina
        </p>
        <div id="mapa">
        <iframe
  title="Mapa de ubicación de la tienda"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3031915586394!2d-58.38159268478381!3d-34.60368498045996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb28df65af1f%3A0x6f31e90fd28236fa!2sCalle%20Falsa%20123%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1608240482532!5m2!1ses-419!2sar"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>
        </div>
      </section>

      <section id="horarios">
        <h2>Horarios</h2>
        <p>Nuestros horarios de atención son:</p>
        <ul>
          <li><strong>Lunes a Viernes:</strong> 9:00 AM - 8:00 PM</li>
          <li><strong>Sábado:</strong> 10:00 AM - 6:00 PM</li>
          <li><strong>Domingo:</strong> Cerrado</li>
        </ul>
      </section>
    </main>
  );
};

export default SobreNosotros;
