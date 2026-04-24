import {BrowserRouter} from "react-router";
import AllRoutes from "./routes/AllRoutes.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <BrowserRouter>
                <AllRoutes/>
            </BrowserRouter>
        </>)
}

export default App
