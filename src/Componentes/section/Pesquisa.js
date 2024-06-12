import styles from './Pesquisa.module.css'
import Google from '../../imagens/Google.svg'
import safe from '../../imagens/safe.svg'
import { IoIosSearch, AiFillAndroid , IoMdMic } from "react-icons/io";


function Pesquisa() {
    return (
        <div className={styles.Pesquisa}>
            <img src={Google}/> <br/>

            <section>
                <IoIosSearch/>
                <input ></input>
                <IoMdMic />
            </section>
            <div>
                <button>Pesquisa Google</button>
                <button>Estou com sorte</button>
            </div>

            <div className={styles.Safe} >
                <img src={safe}/>
                <a>Faça o Check-up de privacidade</a>
            </div>
            
            
        </div>
    )

}

export default Pesquisa