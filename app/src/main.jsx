import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ref from './useRef/Ref.jsx'
//import './index.css'
//import "../src/styles/globally.css"
//import "../src/styles/external.css"
///import App from './App.jsx'
//import Cbc from './component/Cbc.jsx'
//import Fbc from './component/Fbc.jsx'
//import Demo from './component/Demo.jsx'
//import Parent from './Props/Parent.jsx'
//import State from './state/State.jsx'
//import Inline from './styles/Inline.jsx'
//import Comp1 from './styles/Comp1.jsx'
//import Comp2 from './styles/Comp2.jsx'
import List from './List-Keys/List.jsx'
//import External from './styles/External.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc/>
    <Demo/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <Inline/> */}
     {/* <Comp1/> */}
    {/* //<Comp2/>  */}
   
    {/* <External/> */}
     {/* <Ref/>  */}
     <List/>
  </StrictMode>,
)
