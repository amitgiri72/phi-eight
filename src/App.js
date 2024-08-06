import "./App.css";
import Faq from "./component/faq/Faq";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import PartnerDriverPage from "./component/hero/PartnerDriver";
import Hiw from "./component/hiw/Hiw";
import Join from "./component/join/Join";
import Testimonials from "./component/testimonial/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <PartnerDriverPage />
      <Hiw />
      <Testimonials />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
