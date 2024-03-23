import { Flex } from "antd";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yvz5svo", "template_1lgg7zq", form.current, {
        publicKey: "k7duhNXhHEPFJJOkB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          //mettre une modale pour le message de cvalidation et gerer les parametress
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <h2>Me contacter pour vos projets</h2>

      <form
        ref={form}
        id="contactForm"
        onSubmit={handleSubmit}
        style={{ width: 500 }}
      >
        <Flex vertical>
          <label htmlFor="nom">Nom complet</label>
          <input type="text" id="nom" name="nom" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button type="submit">Envoyer</button>
        </Flex>
      </form>
    </section>
  );
};

export default Contact;
