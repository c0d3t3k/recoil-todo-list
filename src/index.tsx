import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'jotai'
//import {RecoilRoot} from 'recoil'
import { JotaiDevtools } from "@c0d3t3k/jotai-devtools";
import { darkModeState } from './components/Header';
import { tasksAtom } from './components/Tasks';

function JotaiDebugger() {
    return (
      <>
        <JotaiDevtools name={`Dark Mode`} atom={darkModeState} />
        <JotaiDevtools name={`Tasks`} atom={tasksAtom} />
      </>
    );
  }

ReactDOM.render(
    <React.StrictMode>
        {/* <RecoilRoot> */}
        <Provider>
            <JotaiDebugger />
            <App />
        </Provider>
        {/* </RecoilRoot> */}
    </React.StrictMode>,
    document.getElementById('root'),
)
