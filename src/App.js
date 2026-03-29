import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieProvider } from "./Context/PhotoContext";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <MovieProvider>
      <HashRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/search/populares" />} />
          <Route path="/search/:searchTerm" element={<Container />} />
          <Route path="/category/:category" element={<CategoryContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </MovieProvider>
  );
}

export default App;
