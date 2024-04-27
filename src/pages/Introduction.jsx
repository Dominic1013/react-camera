import React from "react";
import { Link } from "react-router-dom";
import "../styles/introduction.scss";

const Introduction = () => {
  return (
    <div className="container flex-col">
      <div className="privacy flex-col">
        <h2>使用條款說明</h2>
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
      <div>
        <Link className="button-primary" to="/camera">
          同意條款
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
