import React from 'react';
import Iphone15 from '../Assets/Iphone15.webp';
import Iphone14 from '../Assets/Iphone14.jpg';
import Iphone13 from '../Assets/Iphone13.webp';
import Iphone12 from '../Assets/Iphone12.jpg';
import IphoneSE from '../Assets/IphoneSE.jpg';


const Home = ({ carrito, setCarrito }) => {
  
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.title === producto.title);
    let nuevoCarrito;
    
    if (productoExistente) {
      nuevoCarrito = carrito.map(item =>
        item.title === producto.title
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  return (
    <main>
      <div className="botonBusqueda">
        <input type="search" id="search" name="search" />
        <button>Buscar</button>
      </div>

      <h1>PonteTech</h1>
      <h3>¡Descubre la tecnología más avanzada en nuestra tienda de tecnología!...</h3>

      <h1 id="productos">Smartphones</h1>
      <div className="product-container">
        <Product 
          title="Iphone 15"
          imgSrc={Iphone15}
          price={1200}
          description="El iPhone 15 incluye una pantalla OLED de 6.1 pulgadas, procesador A16 Bionic, cámara dual de 12 MP,
                    y viene con iOS 16 preinstalado."
          agregarAlCarrito={agregarAlCarrito}
          />

        <Product
          title="Iphone 14"
          imgSrc={Iphone14}
          price="1100 usd"
          description="El iPhone 14 ofrece una experiencia de usuario excepcional con su pantalla OLED de 6.1 pulgadas, procesador A15 Bionic, y cámara dual de 12 MP."
          agregarAlCarrito={agregarAlCarrito}
        />

        <Product 
          title="Iphone 13"
          imgSrc={Iphone13}
          price="1000 usd"
          description="El iPhone 13 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, procesador A15 Bionic, y un avanzado sistema de cámara dual."
          agregarAlCarrito={agregarAlCarrito}
        />

        <Product 
          title="Iphone 12"
          imgSrc={Iphone12}
          price="900 usd"
          description="El iPhone 12 incluye una pantalla Super Retina XDR de 6.1 pulgadas, procesador A14 Bionic, y un sistema de cámara dual de 12 MP."
          agregarAlCarrito={agregarAlCarrito}
        />
        <Product 
          title="Iphone SE"
          imgSrc={IphoneSE}
          price="700 usd"
          description="El iPhone SE ofrece un rendimiento potente con su procesador A13 Bionic, pantalla Retina HD de 4.7
                    pulgadas, y una cámara de 12 MP"
                    agregarAlCarrito={agregarAlCarrito}
        />
      <h1>Smartwatches</h1>
      <Product 
          title="Apple Watch Series 8"
          imgSrc="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111848_apple-watch-series8.png"
          price="400 usd"
          description="El Apple Watch Series 8 cuenta con una pantalla Retina siempre activa, sensor de oxígeno en sangre, y ECG en la muñeca."
          agregarAlCarrito={agregarAlCarrito}
        />

        <Product 
          title="Apple Watch Series 7"
          imgSrc="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png"
                    alt="Apple Watch Series 7"
          price="350 usd"
          description="El Apple Watch Series 7 incluye una nueva pantalla más grande, carga más rápida y resistencia mejorada al polvo y al agua."
          agregarAlCarrito={agregarAlCarrito}
        />

        <Product 
          title="Apple Watch SE"
          imgSrc="https://evermobile.com.ar/wp-content/uploads/2023/08/Diseno-sin-titulo.webp"
                    alt="Apple Watch SE"
          price="280 usd"
          description="El Apple Watch SE ofrece las funciones esenciales del Apple Watch a un precio más accesible,
                    incluyendo notificaciones de ritmo cardíaco irregular."
                    agregarAlCarrito={agregarAlCarrito}
        />

        <h1>AirPods</h1>
        <Product 
          title="AirPods Pro (2nd generation)"
          imgSrc="https://www.costco.com.mx/medias/sys_master/products/h47/hf1/85106566660126.jpg"
                    alt="AirPods Pro (2nd generation)"
          price="250 usd"
          description="Los AirPods Pro de segunda generación ofrecen cancelación activa de ruido, modo de transparencia, y
          hasta 6 horas de reproducción con una sola carga."
          agregarAlCarrito={agregarAlCarrito}
        />
        <Product 
          title="AirPods (3rd generation)"
          imgSrc="https://www.lacuracao.pe/media/catalog/product/t/e/tech100050_1_nf397bqb0xjqxowz.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
          price="180 usd"
          description="Los AirPods de tercera generación ofrecen audio espacial con seguimiento dinámico de la cabeza, y
                    hasta 6 horas de reproducción con una sola carga."
                    agregarAlCarrito={agregarAlCarrito}
        />
        <Product 
          title="AirPods (2nd generation)"
          imgSrc="https://bigpoint.com.ar/wp-content/uploads/2023/07/Apple-Airpods-2da.-Generacion.jpg"
          price="900 usd"
          description="Los AirPods de segunda generación ofrecen acceso a Siri con solo tu voz, y hasta 5 horas de
                    reproducción con una sola carga."
          agregarAlCarrito={agregarAlCarrito}
        />
        
      </div>
      
    </main>
  );
};

const Product = ({ title, imgSrc, price, description, agregarAlCarrito }) => (
  <div className="product">
    <h2>{title}</h2>
    <img src={imgSrc} alt={title} />
    <h3>{price} USD</h3>
    <p>{description}</p>
    <button onClick={() => agregarAlCarrito({ title, imgSrc, price })}>Agregar al carrito</button>
  </div>
);

export default Home;