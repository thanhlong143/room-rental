import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import { Home, Login } from "./containers/public";

function App() {
   return (
      <div className="h-screen w-screen bg-primary">
         <Routes>
            <Route path={path.HOME} element={<Home />} >
               <Route path={path.LOGIN} element={<Login />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
