import Post from "@/components/Post";
// in the Posts.js file we can set export default before the function alowing us to use whatever name we want for the import file
// here we are using Blog instead of Post since the Post component is a export default otherwise we would have to use {Post}
// we can only have one default export file

// prop are arguments or values that we can use inside of our components that can then be used to dynamically render or change what this component is
function Text({ content, strong }) {
  if (strong) {
    return <strong>{content}</strong>;
  }
  return <p>{content}</p>;
}
// here we created a component that can be reused inside our javascript functions to use the component we need to <Text />
export default function Home() {
  // export default means that we are allowing files outside of this file to read this function and render code or jsx to our screen
  // a function compement is any function that has an uppercase letter at the beginning of its name and returns something know as a jsx
  // JSX is a special type of Html code that allows us to embed javascript and components inside of it
  // here we are defining a variable calles posts that is an array of objects, in each object we have the various parameters
  // of the Post componet we made earlier
  const posts = [
    {
      title: "My post",
      author: "Juan C",
      content: "I am learning to be a developer",
      following: false,
    },
    {
      title: "My post2",
      author: "Juan C",
      content: "I am learning to be a javascript developer",
      following: false,
    },
    {
      title: "My post3",
      author: "Juan C",
      content: "my name is Juan",
      following: false,
    },
  ];
  return (
    // we use a map function to iterate through each element inside of our posts aray and for all of those elemetns return a jsx component that we
    // want to display to represent them
    // we can use an empty tag to wrap our elemetns so for example <> </>
    <>
      {posts.map((content, idx) => {
        // to return the posts we use the spread operator followed by content for it to return all the key value pairs so title, author, content, following
        // to pass those as properties to post so that we dont have to write each one out
        return <Post {...content} key={idx + Math.random()} />;
        // a key is a unique ID that we use to represent different elemetns on a screen when they are being dynamically rendered
        // if you dont add a key you will get errors, in this case we use idx + Math.random() so that it generates a random key id
        // the main benefit of this is that now we have an array that is beign converted into a user interface element withough writing out
        // all the individula posts elements ourself
      })}

      <Text content="hello world" strong={false} />
      <Text content="My name is" strong={true} />
      <Text content="Juan" strong={false} />

      <Post
        title="Tim is the best"
        author="Tim"
        content="Tim is the best teacher for everything"
        following={true}
      />
      <Post
        title="Tim is the best Teacher ever and ever"
        author="Tim"
        content="Tim is the best teacher for everything"
        following={false}
      />
    </>
  );
}
