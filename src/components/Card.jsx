export default function Card({ autore }) {
    const {name, titolo, testo, tipo} = autore;
    return (
        <div className='card border-info mb-3'>
            <h4 className='card-header text-info-emphasis'>{titolo}</h4>
            <div className='card-body text-success'>
                <h5>Autore: {name}</h5>
                <p>Testo:{testo}</p>
                <p>Tipo di Post:{tipo}</p>
            </div>
        </div>
    )
}