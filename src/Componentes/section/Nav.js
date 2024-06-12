import styles from './Nav.module.css'
import perfil from '../../imagens/perfil.svg'
import { CgMenuGridO } from "react-icons/cg";

function Nav() {
    return (
        <div className={styles.Nav}>
            <ul>
                <li><a>Gmail</a></li>
                <li><a>Imagens</a></li>
                <li><a><CgMenuGridO size={25} /></a></li>
                <li><img src={perfil} alt="error"/></li>
            </ul>
        </div>
    )
}

export default Nav