import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SingninButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button className={styles.signinButton} type="button">
            <FaGithub color="#04d361" />
            Igor Souza
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button className={styles.signinButton} type="button">
            <FaGithub color="#eba417" />
            Sign in With Github
        </button>
    )
}