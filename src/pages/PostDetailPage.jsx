import {useState, useEffect} from "react";
import backIcon from "../assets/images/caret-left-fill.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage(){

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] =  useState(false);


    useEffect(()=> {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://6973b1a7aedc74bc.mokky.dev/post/${id}`)
                setPost(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }          
        }
        fetchPosts();
    }, [id]);
    
    if (isError) {
        return <Error />;
    }

    return (        
        <section class="mobile_block">
            <Link to = "/" class="back-button">
                <div class="container">
                    <img src={backIcon} alt="Back icon" />
                    Назад
                </div>                 
            </Link>   
            {isLoading ? (<LoadingDetail />) : (
                <div class="container">            
                    <div class="post-detail-block"> 
                        <h3 class = "news-card_title">{post.title}</h3>
                        <span class="news-card_date">{post.date}</span> 
                        <p class="description">
                            {post.description}
                        </p>
                        <img src={post.imageURL} alt={post.title} />
                        <span class="author">Источник: <strong class="light-green-text">{post.author}</strong></span>
                        <button class="tag-button">{post.category}</button>
                    </div>     
                </div>
            )}
            
        </section>);
}
export default PostDetailPage;