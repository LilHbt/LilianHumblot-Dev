import { Flex, Modal } from "antd";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setModalContent(
      "Votre message a bien été envoyé, je vous recontacte dans les plus bref délais!"
    );
    // emailjs
    //   .sendForm("service_yvz5svo", "template_1lgg7zq", form.current, {
    //     publicKey: "k7duhNXhHEPFJJOkB",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");

    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //       setIsModalOpen(true);
    //       setModalContent(
    //         "Votre message n'a pas pu etre envoyé, veuillez réessayer ultérieurement ou me contacter par mail a l'adresse lilianhumblot.dev@gmail.com. "
    //       );
    //     }
    //   );
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
          <label htmlFor="nom">Nom et Prénom</label>
          <input type="text" id="nom" name="nom" placeholder="Nom et Prénom" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@mail.fr"
          />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Votre message" />
          <button type="submit">Envoyer</button>
        </Flex>
        <Modal
          title="Merci pour votre intérêt"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{
            className: "cancel-btn",
          }}
        >
          <p>{modalContent}</p>
        </Modal>
      </form>
    </section>
  );
};

export default Contact;
