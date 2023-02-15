import React, { useState } from "react";
import { LayoutPage } from "../../../layout/Layout";
import { Grid, Services } from "./styled";
import Template from "./Template";
import services from "../../../data/services"

function ServicesScreen() {
    const [data] = useState(services);
  return (
    <Services id="service">
      <LayoutPage>
        <div className="heading">
          <h2>Services</h2>
          <p data-aos="fade-up">
            DebugAppFix is a decentralized protocol that creates a secure and
            resilient open-source software ecosystem for developers to create
            innovative online tools, targeting global business markets. One of
            its key features is the validation of wallets.
          </p>
        </div>

        <Grid>
            <Template services={data}/>
        </Grid>

       
      </LayoutPage>
    </Services>
  );
}

export default ServicesScreen;
