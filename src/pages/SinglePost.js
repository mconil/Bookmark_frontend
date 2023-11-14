// import { Link, useLoaderData } from "react-router-dom";


// const Show = () => {
//   const post = useLoaderData();

  
//   const div = {
//     textAlign: "center",
//     border: "3px solid green",
//     width: "80%",
//     margin: "30px auto",
//   };

//   return (
//     <div style={div}>
//       <h1>{post.subject}</h1>
//       <h2>{post.details}</h2>
//       <Link to="/">
//         <button>Go Back</button>
//       </Link>
//     </div>
//   );
// };

// export default Show;
import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ bookmarks }) => {
  const { id } = useParams();
  const post = bookmarks.find((post) => post.id === parseInt(id, 10));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default SinglePost;
