import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const {id} = 2;

 const{data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className="blog-details">
      <h2>Blog details </h2>
      {error && <div> {error}</div>}
     {isPending && <div>Loading.. </div>}    
    {blog && (
        <article>
            <h2>{blog.title}</h2>
            <div>{blog.body}</div>
        </article>

    )}
    </div>
  );
}
 
export default BlogDetails;