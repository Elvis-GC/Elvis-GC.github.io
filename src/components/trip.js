import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/uyuni.jpg";
import Trip2 from "../assets/muela.jpg";
import Trip3 from "../assets/luna.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Destinos Frecuentes</h1>
            <p>Estos son los destinos mas populares</p>
            <div className="tripcard">
                <TripData
                imgs = {Trip1}
                heading = "Salar de Uyuni"
                text = "Durante la temporada de lluvias (de diciembre a abril), el salar se cubre con una delgada capa de agua, creando un impresionante espejo que refleja el cielo, lo que lo convierte en un lugar espectacular para la fotografía"
                />

                <TripData
                imgs = {Trip2}
                heading = "Muela del Diablo"
                text = "La Muela del Diablo es una montaña con una forma distintiva que se asemeja a una muela o diente gigante. Su altura y su forma peculiar la hacen destacar en el paisaje árido de la región."
                />

                <TripData
                imgs = {Trip3}
                heading = "Valle de la Luna"
                text = "El Valle de la Luna, situado a pocos kilómetros de La Paz, Bolivia, es un paisaje natural impresionante caracterizado por sus formaciones geológicas únicas, esculpidas por la erosión del viento y la lluvia a lo largo de miles de años. Este lugar surrealista presenta torres de arcilla, cañones y figuras caprichosas que crean un entorno árido y fascinante, ideal para la exploración y la fotografía. Con su mezcla de colores y texturas, el Valle de la Luna ofrece una experiencia de conexión con la naturaleza, así como una oportunidad para aprender sobre la geología de la región y la historia de las culturas indígenas que habitaron estas tierras. Es un destino imperdible para quienes buscan escapar del bullicio de la ciudad y sumergirse en un paisaje de belleza única."
                />
            </div>
        </div>
        
    )
}

export default Trip;