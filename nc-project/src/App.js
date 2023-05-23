import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./customTheme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactForm from "./pages/Contact";
import Navbar from "./components/Navbar";
import './App.css';

//imports custome componenets from customTheme.js
const theme = extendTheme(customTheme);

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Router>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ChakraProvider>
  );
}
