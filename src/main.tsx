import {createRoot} from 'react-dom/client'
import './index.css'
import {App} from './app/ui/App/App.tsx';
import {BrowserRouter} from 'react-router';
import {Provider} from 'react-redux';
import { store } from './app/model/store.ts';
import {Toaster} from 'react-hot-toast';


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Toaster />
            <App />
        </BrowserRouter>
    </Provider>,
)
