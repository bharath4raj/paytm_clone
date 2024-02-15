import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import paytm_routes from "./configs/routes-config";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ErrorBoundary from "./hocs/ErrorBoundary";


function App() {
  return (
    <GoogleOAuthProvider clientId="389899993280-7akkds1bcmpfcth4pg7l648ine0q2ca4.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          {
            paytm_routes.map((item) => {
              return <Route path={item.path} element={item.component} />
            })
          }
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
