import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Jenshina from "../components/Jenshina";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import ShagInFuture from "../components/ShagInFuture";
import RightsReserved from "../components/RightsReserved"


const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section jenshina">
        <Jenshina />
      </section>
      <section className="section banner">
        <Banner />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="section shag_in_future">
        <ShagInFuture />
      </section>
      <section className="section rights_reserved">
        <RightsReserved />
      </section>
    </>
  );
};

export default Home;