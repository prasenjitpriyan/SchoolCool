import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PageFooter from "./components/PageFooter";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import HeaderTwo from "./components/HeaderTwo";
import HeaderThree from "./components/HeaderThree";
import History from "./pages/about/History";

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
        <Route path="/history" element={<History />} />
      </Routes>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
