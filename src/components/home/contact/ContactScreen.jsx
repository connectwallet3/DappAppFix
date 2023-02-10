import React, { useState } from "react";
import { LayoutPage } from "../../../layout/Layout";
import { Contact, Left, Right } from "./styled";
import image from "../../../assets/image.png";

function ContactScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [business, setBusines] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <LayoutPage>
      <Contact>
        <Left>
          <h3>
            Looking for <span>Crypto Liquidity Solutions?</span>
          </h3>
          <span>Get in touch with us</span>

          <form onSubmit={handleForm}>
            <input
              type="text"
              name="first"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              name="BusinessName"
              value={business}
              onChange={(e) => setBusines(e.target.value)}
              placeholder="Business Name"
              required
            />
            <input
              type="text"
              name="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </Left>
        <Right>
          <img src={image} alt="" />
        </Right>
      </Contact>
    </LayoutPage>
  );
}

export default ContactScreen;
