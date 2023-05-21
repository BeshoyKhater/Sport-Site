import  ReactDOM  from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom"
import "./scss/main.scss"

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <App/>
    </HashRouter>
)