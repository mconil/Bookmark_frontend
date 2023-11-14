import { Link, useLoaderData, Form } from "react-router-dom";

const Show = () => {
  const post = useLoaderData();


  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.title}</h1>
      <h4>{post.description}</h4>

      <div style={{ textAlign: "center" }}>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="write subject here"
            defaultValue={post.description}
          />
          <input
            type="text"
            name="details"
            placeholder="write added details here"
            defaultValue={post.details}
          />

          <button>Update Bookmark</button>

        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Book</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;