interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
};

interface Direccion {
    pais: string;
    calle: string;
    numero: number;
};

const Literals = () => {

    const persona: Persona = {
        nombreCompleto: 'Luc',
        edad: 27,
        direccion: {
            pais: 'Argentina',
            calle: 'Calle Falsa',
            numero: 123
        }
    };
    
    return (
        <>
        <h3>Literals</h3>
        <code>
            <pre>
                { JSON.stringify(persona, null, 2) }
            </pre>
        </code>

        </>
    );
};

export default Literals;