"use client";

import "./Post.css";
// to import from a css style sheet we use this syntax
// when you write export and only export it can only be accessed as a named export so when you want to acces this component you need to reference
// the name in this case Post
export default function Post({ title, author, content }) {
  // everything in a component needs to be wrapped in one element so in this case everything is wrapped in a div tag

  return (
    // in jsx we use className instead of just class to add style to it
    <div className="card">
      <h1>{title}</h1>
      <h3>By: {author}</h3>
      <p>{content}</p>
      {/* <button>{following ? "Unfollow" : "Follow"}</button> */}
    </div>
    // in this instance the button contains a differnce syntax for a if else statement essentialy if following is true do unfollow else follow
  );
}
