import React from "react"
import {render} from "react-dom"
import App from "./app.js"
import {MethodProvider} from "./context"
render(
<MethodProvider>
    <App/>
</MethodProvider>,document.querySelector("#root"))