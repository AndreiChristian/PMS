import React from "react";
import classes from "./DemoIntro.module.css";

const DemoIntro = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>ELECTRIC PMS</div>
      <div className={classes.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        excepturi! Asperiores, cum! Laborum blanditiis excepturi fugit, beatae,
        doloribus perferendis at dolore minus ipsa, adipisci maiores harum
        dolores omnis sit eius. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Iure ut molestias dolorem sit deserunt, sequi iusto
        recusandae officia ducimus quos. Sint similique fugiat minima unde cum!
        Incidunt quibusdam exercitationem id? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Error dolor aspernatur explicabo aliquid
        tempora, sed laboriosam quae, hic eaque necessitatibus assumenda commodi
        deserunt sapiente atque officiis omnis suscipit modi ab!
      </div>
      <div className={classes.buttons}>
        <div className={classes.button}> YOUR PROPERTY </div>
        <div className={classes.button}>NEW PROPERTY</div>
        <div className={classes.button}>DEMO</div>
      </div>
    </div>
  );
};

export default DemoIntro;
