import { Link } from "react-router-dom";


const Post = ({ post }) => {
  
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <h4>{post.description}</h4>
    </div>
  );
};

export default Post