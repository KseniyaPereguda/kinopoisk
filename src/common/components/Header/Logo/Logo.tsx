import logo from './logo.svg';
import s from './Logo.module.css'

export const Logo = () => {
    return (
        <a href="/" className={s.logoLink}>
            <img src={logo} alt="Logo" className={s.logo}/>
        </a>

    )
}