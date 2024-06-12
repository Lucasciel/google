import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <p>Brasil</p>
            <section>
                <ul>
                    <li>Sobre</li>
                    <li>Publicidade</li>
                    <li>Negócios</li>
                    <li>Como funciona a Pesquisa</li>
                </ul>
                <ul>
                    <li>Privacidade</li>
                    <li>Termos</li>
                    <li>Configurações</li>
                </ul>
            </section>
            
        </div>
    )

}

export default Footer