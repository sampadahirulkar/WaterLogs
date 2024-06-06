import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LineChartComponent from "./components/LineChart";
import CompChartComponent from "./components/compChart";
import "./style.scss"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to ="/login"/>
    }
    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="analyse_chart" element={<LineChartComponent />} />
          <Route path="comparison_chart" element={<CompChartComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
