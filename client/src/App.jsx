import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PageFooter from "./components/PageFooter";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import HeaderTwo from "./components/HeaderTwo";
import HeaderThree from "./components/HeaderThree";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderTwo />
      <HeaderThree />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
