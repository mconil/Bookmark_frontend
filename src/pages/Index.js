// import Post from "../components/Post";
import React, { useState } from "react";
import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Index = () => {
  const allBookmarks = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookmarks, setFilteredBookmarks] = useState(allBookmarks);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = allBookmarks.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term)
    );

    setFilteredBookmarks(filtered);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>New Book to Read</h2>
        <Form action="/create" method="post">
          <input
            type="text"
            name="title"
            placeholder="Title of Book"
          />
          <input
            type="text"
            name="description"
            placeholder="Description of Book"
          />
          <button>New Book to Read</button>
        </Form>
      </div>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search Book"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredBookmarks.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Index;

