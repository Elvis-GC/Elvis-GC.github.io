import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Hero from "../components/hero";
import Trip from "../components/trip";
function Home () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero"
         heroImg="https://www.magazinemanagement.gm-bolivia.com/wp-content/uploads/2021/12/Copia-de-Tama%C3%B1o-web-93.png"
         title="Explora el Mundo a través de la Realidad Virtual"
        //  text="Choose Your Favourite Destination"
        //  buttonText="travel Plan"
        //  url="/"
        //  btnClass="show"
         />
         <Destination/>
         <Trip/>
         <Footer/>
        </>
    )


}

export default Home;