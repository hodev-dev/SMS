import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RouteProvider from "./RouteProvider";
import { persistor, store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <RouteProvider />
        </PersistGate>
    </Provider>
    // </React.StrictMode>
);
