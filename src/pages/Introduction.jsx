import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <div className="privacy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odit
        debitis consequatur repudiandae temporibus ut minima, culpa ipsum itaque
        deserunt in, nihil, placeat hic ipsam omnis quaerat id! Nulla adipisci
        architecto veniam dolore voluptates dolorum! Architecto, quos! Atque
        illum eos facilis sit modi dolore id tempore maxime quidem pariatur
        quasi voluptate harum nostrum fuga natus, architecto autem ex soluta?
        Nostrum aliquid sapiente, quas perspiciatis molestiae tempore dolor at
        repudiandae ex corrupti officia incidunt eum reiciendis exercitationem
        distinctio itaque sequi dolores adipisci dolorem sint voluptate
        expedita. Inventore animi error fuga alias facilis tenetur, sapiente
        blanditiis odit! Praesentium atque tenetur nemo impedit?
      </div>
      <div className="cta">
        <Link to="/camera">同意以上條款</Link>
      </div>
    </>
  );
};

export default Introduction;
