import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Instagram, Youtube, BookText as TikTok, ShoppingBag } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const socialLinks = [
    { icon: <TikTok className="w-8 h-8" />, url: 'https://www.tiktok.com/@diositotv?is_from_webapp=1&sender_device=pc', label: 'TikTok' },
    { icon: <Instagram className="w-8 h-8" />, url: 'https://www.instagram.com/godsitotv/', label: 'Instagram' },
    { icon: <Youtube className="w-8 h-8" />, url: 'https://www.youtube.com/@godsitotv', label: 'YouTube' },
    {
      icon: <img src="https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/images.png?alt=media&token=3487009f-695f-472e-b32c-27e27001a582" alt="Kick" className="w-8 h-8" />,
      url: 'https://kick.com/diositotv',
      label: 'Kick'
    }
    ,
  ];

  const merchItems = [
    {
      name: 'Diosito Streetwear Hoodie',
      price: '$$$',
      image: 'https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/607b20b5-fed4-44e4-b97f-a2429d406229.jpg?alt=media&token=0e7967a1-1542-42dc-b4e7-d864e6c47f61'
    },
    {
      name: 'TOP 5 T-Shirt',
      price: '$$$',
      image: 'https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/607b20b5-fed4-44e4-b97f-a2429d406229.jpg?alt=media&token=0e7967a1-1542-42dc-b4e7-d864e6c47f61'
    },
    {
      name: 'CC8',
      price: '$$$',
      image: 'https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/607b20b5-fed4-44e4-b97f-a2429d406229.jpg?alt=media&token=0e7967a1-1542-42dc-b4e7-d864e6c47f61'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
  {/* Fondo con video para desktop */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30"
    src="https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/Download3.mp4?alt=media&token=8d6ba255-02f5-4b85-a3dc-99fabaa9902d"
    poster="https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/firme.jpg?alt=media&token=b04fd949-40aa-4541-8be3-4203947a830b"
  />

  {/* Imagen de fondo para mobile */}
  <img
    src="https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/firme.jpg?alt=media&token=b04fd949-40aa-4541-8be3-4203947a830b"
    alt="Fondo móvil"
    className="md:hidden absolute inset-0 w-full h-full object-cover opacity-30"
  />

  {/* Overlay negro con mezcla */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent mix-blend-multiply" />

  {/* Contenido */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center px-4"
  >
    <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg">
      <span className="text-fuchsia-500 animate-pulse">DIOSITO</span>TV
    </h1>
    <p className="mt-4 text-xl md:text-2xl text-purple-300 font-medium">
      La comida me excita 🍔
    </p>

    {/* Botón que va a TikTok */}
    <div className="mt-8">
      <a
        href="https://www.tiktok.com/@diositotv?is_from_webapp=1&sender_device=pc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-purple-700 rounded-full hover:bg-purple-600 transition-all shadow-lg"
      >
        Ver contenido
      </a>
    </div>
  </motion.div>
</section>


      {/* Featured Videos */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-10 text-center">Videos Destacados</h2>
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      className="w-full max-w-4xl mx-auto"
    >
      {[
        'https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/Download2.mp4?alt=media&token=e84fb5d1-590c-4fd5-97ab-cc2e7f09f30a',
       
      ].map((src, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-video rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              src={src}
            >
              Tu navegador no soporta el video.
            </video>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://firebasestorage.googleapis.com/v0/b/texnoexpert-a1b93.appspot.com/o/Captura%20de%20pantalla%202025-04-04%20155916.png?alt=media&token=f6f2f56d-cefa-410c-96c3-8394251d104a"
              alt="Diositotv"
              className="w-64 h-64 rounded-full object-cover"
            />
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
              <p className="text-xl leading-relaxed text-purple-200">
                Godsito el Rey de Los Tops, fitness a ratos y un poco de influencer 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-3 p-6 bg-purple-900 rounded-lg hover:bg-purple-800 transition-colors"
              >
                {social.icon}
                <span className="text-lg font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-10">
            <ShoppingBag className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Merch Oficial</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-purple-900 rounded-lg overflow-hidden"
              >
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-purple-300">{item.price}</p>
                  <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 py-2 rounded-lg transition-colors">
                    Comprar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
{/*       <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="text-center mb-10">
            <Send className="w-8 h-8 mx-auto mb-4" />
            <h2 className="text-4xl font-bold">¡Conéctate!</h2>
            <p className="text-purple-300 mt-2">Suscríbete para no perderte ninguna novedad</p>
          </div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-4 py-3 bg-purple-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <button
              type="submit"
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 py-3 rounded-lg transition-colors font-bold"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section> */}
    </div>
  );
}

export default App;