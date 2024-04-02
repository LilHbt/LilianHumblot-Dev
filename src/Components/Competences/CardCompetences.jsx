import React, { useState } from "react";
import { Card, Modal } from "antd";
import "./CardCompetences.scss";

const CardCompetences = (props) => {
  const { logo } = props;
  const { title } = props;
  const { alt } = props;
  const { description } = props;
  const { modalContent } = props;
  const { tabKey } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if (tabKey === "1") {
      setIsModalOpen(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return tabKey === "1" ? (
    <div>
      <Card
        onClick={showModal}
        hoverable
        title={title}
        bordered={true}
        className="cardCompetences"
      >
        <img className="logo" src={logo} alt={alt} />
        <p>{description}</p>
      </Card>
      <Modal
        style={{ display: "flex", justifyContent: "center" }}
        width={600}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalContent}
      </Modal>
    </div>
  ) : (
    <div>
      <Card title={title} bordered={true} className="cardCompetences">
        <img
          style={{
            maxWidth: 150,
          }}
          className="logo"
          src={logo}
          alt={alt}
        />
        <p>{description}</p>
      </Card>
    </div>
  );
};

export default CardCompetences;
