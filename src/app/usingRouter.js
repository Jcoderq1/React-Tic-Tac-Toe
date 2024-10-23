"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // we need to use next/navigation not the default which is next/router
// here we import the router we need this so that we can avoid using the <Link
// the link allows us to link to different routes from the home page, we can link our various pages using <Link href="/about">about</Link>
import { useState } from "react";
export default function Home() {
  const [userId, setUserId] = useState("");
  const router = useRouter(); // here we are getting access to the router and we can use the router to change the page that we are on

  function navigate() {
    router.push("/user/" + userId); // here we are pushing the value of the input after the /user/ to go to that dynamic route
  }
  return (
    <div>
      <Link href="/about/contact">Contact</Link>
      <Link href="/about">About</Link>

      <div>
        <input
          // in this case we are creating a user input box where we will navigate to whatever id the user enters
          type="text"
          placeholder="user id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          // this sets the value of the userId to whatever we enter in the input box
        />
        <button onClick={navigate}>Go To Profile</button>
      </div>
    </div>
  );
}
