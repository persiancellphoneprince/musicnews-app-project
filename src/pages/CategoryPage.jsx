import { useEffect, useState } from "react";
import homeIcon from "../assets/images/category/home.svg";
import { Link } from "react-router-dom";

import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import Error from "../components/Error";


function CategoryPage(){

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        async function fetchCategory() {
            try{
                setIsLoading(true);
                const response = await axios.get(`https://6973b1a7aedc74bc.mokky.dev/category/`)
                setCategory(response.data); 
            } catch(e) {
                setIsError(true);
                console.log(e);
            } finally  {
                setIsLoading(false);
            }
        }
        fetchCategory();
    }, []);

    if (isError) {
        return <Error />;
    }

    return(        
        <section class="mobile_block">
            <div class="mobile-block_header is-red">
                Категории
            </div> 
            {isLoading ? (<LoadingRow />) :(
                <div class="container">
                    <div class="category-row">
                         <Link to = "/" class="category-item category-item-wide">
                             <img src={homeIcon} alt="Home" class="category-item_img" /> 
                             <span class="category-item_title">Все новости</span>
                         </Link>
                         {category.map((category) => (
                            <Link to = {`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageURL} alt={category.name} class="category-item_img" /> 
                                <span class="category-item_title">{category.name}</span>
                            </Link> 
                         ))}
                         
                    </div>
                 </div> 
            )}
             
        </section>)
}

export default CategoryPage;