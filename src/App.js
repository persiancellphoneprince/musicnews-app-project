import "./assets/css/style.css"
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoryPage from "./pages/CategoryPage";
import PostsByCategoriesPage from "./pages/PostsByCategoriesPage";
import {Routes, Route} from "react-router-dom";



function App() {
  return (  
    <>
      <Header />
      <main>
        <Routes>
          <Route path ="/" element ={<HomePage />}/>
          <Route path ="/post/:id" element ={<PostDetailPage />}/>
          <Route path ="/categories" element ={<CategoryPage />}/>
          <Route path ="/category/posts/:id" element ={<PostsByCategoriesPage />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
