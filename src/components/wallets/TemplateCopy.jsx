import React from "react";
import { Link } from "react-router-dom";
import { Box } from "./styled";

function TemplateCopy({ apps }) {
  return (
    <>
      {apps.map((app, index) => (
        <div key={index}>
          <Link to={`/app/${app.id}`}>
            <Box>
              <div className="image">
                <img src={app.image} alt="" />
              </div>
              <h2>{app.name}</h2>
              <p>WALLET</p>
            </Box>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TemplateCopy;
