import {Routing} from '@/common/routing';
import {Header, LinearProgress} from '@/common/components';
import s from './App.module.css'
import {ThemeProviderWrapper} from '@/common/theme/ThemeProvider.tsx';
import {Footer} from '@/common/components/Footer/Footer.tsx';
import '@/common/theme/themes.css';
import {useGlobalLoading} from '@/common/hooks/useGlobalLoading.ts';

export const App = () => {

    const isGlobalLoading = useGlobalLoading()

    return (
        <ThemeProviderWrapper>
            <div className={s.container}>
                <Header/>
                {isGlobalLoading && <LinearProgress />}
                <div className={s.layout}>
                    <Routing/>
                </div>
                <Footer/>
            </div>

        </ThemeProviderWrapper>
    )
}