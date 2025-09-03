// // src/app/page.tsx
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Properties from "./components/Properties";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//       <Hero />
//       <Properties />
//       <Services />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }














// src/app/page.tsx
// import Header from "./components/Header";
// import Header from "../../app/components/Header";
import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import PropertyList from "./components/PropertyList";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="properties">
        <PropertyList />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}