import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'> 
            
            <section className='container'>
                    <a href=''><img src='/imagens/fb.png' alt='Imagem do Facebook' ></img></a>
                    <a href=''><img src='/imagens/tw.png' alt='Imagem do Twiter'></img></a>
                    <a href=''><img src='/imagens/ig.png' alt='Imagem do Instagram'></img></a>
            </section>
           
            <img src='/imagens/logo.png' alt='Logo do Organo do Rodape' className='imgLogo'></img>
            
            <h4>Desenvolvido por Alura</h4>

        </footer>
    )
}

export default Footer