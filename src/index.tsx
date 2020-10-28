import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'jotai'
//import {RecoilRoot} from 'recoil'

ReactDOM.render(
    <React.StrictMode>
        {/* <RecoilRoot> */}
        <Provider>
            <App />
        </Provider>
        {/* </RecoilRoot> */}
    </React.StrictMode>,
    document.getElementById('root'),
)
