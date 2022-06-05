import { Routes, Route, Link } from "react-router-dom"
import Container from "./Container";
import Navbar from "./Navbar";
import Home from "./Home_page"
import About from "./About_page"
import Posts from "./Posts_page"
import NotFaunded from "./NotFaunded";
import './app.scss';

function App() {
  return (
    <Container>
      <Navbar>
        <Link className="link" to="/">HOME</Link>
        <Link className="link" to="/about">ABOUT</Link>
        <Link className="link" to="/posts">POSTS</Link>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="*" element={<NotFaunded/>}/>
      </Routes>
      <footer>copyrigt 2022</footer>
    </Container>
  );
}

export default App;
