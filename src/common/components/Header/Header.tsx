import {NavLink} from 'react-router'
import s from './Header.module.css'
import {Path} from '@/common/routing';
import {Logo} from '@/common/components/Header/Logo/Logo.tsx';
import {ThemeToggle} from '@/common/components';


export const Header = () => {

    const navItems = [
        {to: Path.Main, label: 'Main'},
        {to: Path.Category, label: 'Category movies'},
        {to: Path.Filtered, label: 'Filtered movies'},
        {to: Path.Search, label: 'Search'},
        {to: Path.Favorites, label: 'Favorites'},
    ]

    return (
        <header className={s.container}>
            <Logo/>
            <nav>
                <ul className={s.list}>
                    {navItems.map(item => (
                        <li key={item.to} >
                            <NavLink
                                to={item.to}
                                className={({isActive}) => `link ${isActive ? s.activeLink : ''}`}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <ThemeToggle/>
        </header>
    )
}