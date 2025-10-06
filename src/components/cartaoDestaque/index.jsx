import './index.scss'

export default function CartaoDestaque({ imagem, titulo, descricao, imagemDireita, link }) {
    return (
        <div className="cartaoDestaque">
            <div className={`imagem ${imagemDireita ? "direita" : ""}`}>
                <img className='image' src={imagem}/>
            </div>

            <div className="info">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <a href={link} target="_blank" rel="noreferrer">Saiba mais</a>
            </div>
        </div>
    );
}