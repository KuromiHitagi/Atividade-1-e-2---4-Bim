import './index.scss'

export default function CartaoDestaque({ img, titulo, autor }) {
    return (
        <div className="cartaoDestaque">
            <div className={"imagem"}>
                <img className='image' height={150} src={img}/>
            </div>

            <div className="info">
                <h1>{titulo}</h1>
                <h2>{autor}</h2>
            </div>
        </div>
    );
}