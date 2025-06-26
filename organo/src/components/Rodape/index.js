import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blanc'>
                            <img src='/img/fb.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='Twitter.com' target='_blanc'>
                            <img src='/img/tw.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blanc'>
                            <img src='/img/ig.png'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/img/logo.png' />
            </section>
            <section>
                <p>
                    Desenvolvido por Bruno Bertol Acompanhando Alura Cursos.
                </p>
            </section>
        </footer>
    )
}

export default Rodape