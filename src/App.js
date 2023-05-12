import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./components/Page/Episodes";
import Animelist from "./components/Animelist/Animelist";
import Header from "./components/header/Header";
import Trailer from "./components/Trailer/Trailer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anime-site/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/anime-site/episode"
          element={
            <>
              <Header />
              <VideoPage />
            </>
          }
        />
        <Route
          path="/anime-site/anime"
          element={
            <>
              <Header />
              <Animelist />
            </>
          }
        />
        <Route
          path="/trailer"
          element={
            <>
              <Header />
              <Trailer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;