import Header from "../../components/navBar";
import Footer from "../../components/footer";
import './home.scss';
import CartaoDestaque from "../../components/cartaoDestaque";

export default function Home() {
  const cartoes = [
    {
      "imagem":"/images/jojo.jpg",
      "titulo": "Jojo's Bizarre Adventure",
      "descricao": "Jojo's Bizarre Adventure é uma série de mangá escrita e ilustrada por Hirohiko Araki. A série começou a ser publicada em 1987 e é conhecida por sua arte distinta, personagens excêntricos e enredos complexos que envolvem batalhas sobrenaturais e viagens no tempo.",
      "imagemDireita":false,
      "link":"https://perfisecross.fandom.com/pt-br/wiki/Jojo%C2%B4s_Bizarre_Adventures"
    },
    {
      "imagem":"/images/Fullmetal01.jpg",
      "titulo": "Fullmetal Alchemist Brotherhood",
      "descricao": "Os irmãos Edward e Alphonse desobedecem a uma proibição e praticam a ciência oculta para ressuscitar sua mãe. 'Fullmetal Alchemist: Brotherhood' é a segunda série de anime da franquia 'Fullmetal Alchemist', dois verdadeiros clássicos da animação japonesa. No vigésimo volume do mangá, o autor Hiromu Arakawa anunciou a produção, desta vez dirigida por Yasuhiro Irie e também produzida por Bones. 'Irmandade' é considerada a obra favorita dos fãs, já que é aquela que reúne fielmente e completamente todos os fatos que aparecem no mangá e onde o que o professor Arakawa queria contar em uma vinheta sobre Edward Elric e a alquimia é refletido com mais delicadeza.",
      "imagemDireita":true,
      "link":"https://fma.fandom.com/wiki/Main_Page"
    }
  ]
  return (
    <div>
      <Header />
      <div className="main">
        {
          cartoes.map(c =>
            <CartaoDestaque 
              imagem={c.imagem}
              titulo={c.titulo}
              descricao={c.descricao}
              imagemDireita={c.imagemDireita}
              link={c.link}
            />
          )
        }
        <div className="abu">gay</div>
      </div>
      <Footer />
    </div>
  );
}