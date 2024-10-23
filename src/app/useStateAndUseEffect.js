"use client";
import Post from "@/components/Post";
// in react we have something know as state now a state is something that can change
// when a state changes it forces the component to re render itself
// a variable for example is static
// when we import the useState hook its a function that has some prebuilt functionalty and properties from react
import { useState, useEffect } from "react";
export default function Home() {
  const [content, setContent] = useState("");
  // the useState at the end is setting the default vaule of content
  // the setContent is a function that we use to update the content state
  // we should always use the setContent function to update the contents value
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  // use effect can be useful for example when you are waiting for certain pices of state to change and when the do change you want to monitoring those events
  // in this case if the length of content is too long we get an alert
  useEffect(() => {
    if (content.length >= 10) alert("your text is getting kinda long!");
  }, [content]);
  // add postst needs to grab content, author, and title and create a new object for them and add them to the posts pice of state
  function addPost() {
    // here we create an object where the author is equal to the state of author etc...
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false,
    };

    setPosts([...posts, newPost]);
    // the setPosts function copies the previous posts and adds the newPost to them
    setContent("");
    // here we are clearing all the values inside the set
    setAuthor("");
    setTitle("");
  }

  return (
    <>
      <div>
        <div>
          <input
            // this input is an example of a controlled component what that means is that the value of the component is equal to the state its referencing
            // the onchange function is responsible for updating our state whenever we type text into the title box
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // on change needs to give us a result where we need grab what the value of the input field is and pass that to our function
            // the target in this arrow function is the input itself and we need to grab the value of that input element and set that as our title
            placeholder="Title"
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <button onClick={addPost}>Add Post</button>
        </div>
        <div className="posts">
          {posts.map((post, idx) => (
            // this is how we render all of our posts so we use a map function
            <Post {...post} key={idx + Math.random()} />
          ))}
        </div>
      </div>
    </>
  );
}
