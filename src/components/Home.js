import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg">Hi, I am</h1>
      <h1 className="font-extrabold mt-1 text-4xl">Avaneesh Singh</h1>
      <p className="text-lg mt-10">
        I'm a front-end developer and a general googler with a keen eye for
        creating engaging UI, bringing products to life. I spend most of my
        coding time writing state logic and playing with components. ✌️
        <br />
        <br />
        Apart from coding, I'll be caught watching anime or scrolling Twitter
        and Reddit or hanging out on meet talking about weird stuff.{" "}
        <strong>xD</strong>
        <br />
        <br />
        Feel free to connect with me or just say hi! 👋
        <br />
        <br />
        P.S: I'm on a mission to accept bribes in form of coffee.
      </p>
      <br />
      <div className="flex -ml-2 justify-between">
        <div className="flex gap-x-1">
          <Link to="/" className="p-2">
            <i class="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/" className="p-2">
            <i class="fa-brands fa-github"></i>
          </Link>
          <Link to="/" className="p-2">
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
