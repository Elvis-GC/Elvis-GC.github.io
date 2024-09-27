import "./ContactFormStyles.css"

function ContactForm () {
    return (
        <div className="form-container">
            <h1>Contactate con nosotros</h1>
            <form>
                <input placeholder="Nombre"/>
                <input placeholder="Correo electronico"/>
                <input placeholder="Contacto"/>
                <textarea placeholder="Mensaje" rows="4"></textarea>
                <button>Enviar</button>

            </form>
        </div>
        

    ) 
}

export default ContactForm;