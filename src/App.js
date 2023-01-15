import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SingIn from "./components/routes/sing-in/sing-in.component";



const Shop = () => {
return <h1>Shop</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} > 
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sing-in" element={<SingIn />} />
      </Route >
    </Routes>
  );
};

export default App;