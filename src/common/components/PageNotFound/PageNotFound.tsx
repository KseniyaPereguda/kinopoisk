import s from './PageNotFound.module.css'
import {useNavigate} from 'react-router';

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)} className={s.backButton}>
                Back
            </button>

            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>page not found</h2>
        </>
    )
}