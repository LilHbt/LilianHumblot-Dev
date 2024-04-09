import { Flex, Modal } from "antd";
import React, { useRef, useState } from "react";
// eslint-disable-next-line
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { FormattedMessage } from "react-intl";

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
      <FormattedMessage
        id="__EMAILSUCCESS__"
        defaultMessage={
          "Votre message a bien été envoyé, je vous recontacte dans les plus bref délais!"
        }
      />
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
    //         <FormattedMessage
    //     id="__EMAILERROR__"
    //     defaultMessage={
    //       "Votre message n'a pas pu etre envoyé, veuillez réessayer ultérieurement ou me contacter par mail a l'adresse lilianhumblot.dev@gmail.com. "
    //     }
    //   />

    //       );
    //     }
    //   );
  };

  return (
    <section>
      <div className="wrapper-form">
        <Flex vertical align="center">
          <h2 className="contact-title">
            <FormattedMessage
              id="__CONTACTTITLE__"
              defaultMessage={"Me contacter pour vos projets"}
            />
          </h2>

          <form
            ref={form}
            id="contactForm"
            onSubmit={handleSubmit}
            className="form"
          >
            <Flex className="contact-flex" vertical>
              <label className="form--label" htmlFor="nom">
                <FormattedMessage
                  id="__NAME__"
                  defaultMessage={"Nom et prénom"}
                />
              </label>
              <input
                className="form--input"
                type="text"
                id="nom"
                name="nom"
                placeholder="John Doe"
              />
              <label className="form--label" htmlFor="email">
                Email
              </label>
              <input
                className="form--input"
                type="email"
                id="email"
                name="email"
                placeholder="exemple@mail.fr"
              />
              <label className="form--label" htmlFor="message">
                Message
              </label>
              <textarea
                style={{ paddingBottom: 100 }}
                className="form--input"
                id="message"
                name="message"
                placeholder="Message"
              />
              <button className="form--btn" type="submit">
                <FormattedMessage
                  id="__CONTACTBTN__"
                  defaultMessage={"Envoyer"}
                />
              </button>
            </Flex>
          </form>
          <Modal
            title={
              <FormattedMessage
                id="__CONTACTMODALMESSAGE__"
                defaultMessage={"Merci pour votre intérêt"}
              />
            }
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelButtonProps={{
              className: "cancel-btn",
            }}
          >
            <p>{modalContent}</p>
          </Modal>
        </Flex>
      </div>
    </section>
  );
};

export default Contact;
