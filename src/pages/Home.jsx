import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Amphibian from "../media/amphibian.jpg";
import Bird from "../media/bird.jpg";
import Fish from "../media/fish.jpg";
import Insect from "../media/insects.jpg";
import Mammal from "../media/mammals.jpg";
import Reptile from "../media/reptile.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to our Animal Search Engine!</h1>
      <p>
        Embark on an exciting journey through the wonders of the animal kingdom
        with our sophisticated search engine. Delve into the depths of nature's
        beauty as you explore captivating facts and uncover the extraordinary
        diversity of life that inhabits our planet. From the majestic lions of
        the savannah to the mysterious creatures of the deep sea, our search
        engine offers a gateway to a world brimming with fascinating
        discoveries. Let curiosity be your guide as you navigate through the
        vast array of information, igniting a passion for wildlife and
        conservation along the way.
      </p>
      <section>
        <h2>Species</h2>
        <ul>
          <li>
            <h3>Mammals</h3>
            <img src={Mammal} alt="Bear" />
          </li>
          <li>
            <h3>Birds</h3>
            <img src={Bird} alt="Bird" />
          </li>
          <li>
            <h3>Reptiles</h3>
            <img src={Reptile} alt="Komodo Dragon" />
          </li>
          <li>
            <h3>Fish</h3>
            <img src={Fish} alt="Nemo" />
          </li>
          <li>
            <h3>Amphibians</h3>
            <img src={Amphibian} alt="Frog" />
          </li>
          <li>
            <h3>Insects</h3>
            <img src={Insect} alt="Mosquito" />
          </li>
          {/* Add more categories as needed */}
        </ul>
      </section>{" "}
      <br clear="all" />
      <Footer></Footer>
    </div>
  );
};

export default Home;
