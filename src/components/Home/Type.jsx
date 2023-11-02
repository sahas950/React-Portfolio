import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Java Developer",
              "Software Developer",
              "PHP Scripting Engineer",
              "Effective Problem Solver",
              
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type