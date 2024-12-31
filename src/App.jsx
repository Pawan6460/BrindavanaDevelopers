import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Companies from "./component/Companies/Companies";
import Residencies from "./component/Residencies/Residencies";
import Values from "./component/Values/value";
import Contact from "./component/Contact/contact";

function App() {
  return (
<div className="App">
  <Header/>
  <Hero/>
  <Companies/>
  <section id="residencies">
  <Residencies/>
  </section>
  <section id="values">
  <Values/>
  </section>
  <section id='contactUs'>
  <Contact/>
  </section>
</div>
  );
}

export default App;
