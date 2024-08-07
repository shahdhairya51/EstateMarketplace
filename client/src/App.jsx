import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import CreateListing from "./pages/CreateListing";   // Custom page for creating a new listing.
import PrivateRoute from "./components/PrivateRoute";  // Custom private route component to check authentication state.


export default function App() {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/sign-in" element ={<SignIn />} />
      <Route path = "/sign-up" element ={<SignUp />} />
      <Route path = "/about" element ={<About />} />
      <Route element = {<PrivateRoute />}>  {/* Only authenticated users can access this route */}
      <Route path = "/profile" element ={<Profile />} />
      <Route path = "/create-listing" element ={<CreateListing />} />
      </Route>
    </Routes>

    </BrowserRouter>
    )
}
