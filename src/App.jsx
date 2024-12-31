import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Companies from "./component/Companies/Companies";
import Residencies from "./component/Residencies/Residencies";
import Values from "./component/Values/value";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";
function App() {
  return (
<div className="App">
  <Header/>
  <Hero/>
  <section id="residencies">
  <Residencies/>
  </section>
  <section id="values">
  <Values/>
  </section>
  <section id='contactUs'>
  <Contact/>
  </section>
  <section id="footer">
   <Footer/>
  </section>
</div>
  );
}

export default App;
