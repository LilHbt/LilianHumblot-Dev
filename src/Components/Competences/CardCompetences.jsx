import React, { useState } from "react";
import { Card, Modal } from "antd";
import "./CardCompetences.scss";

const CardCompetences = (props) => {
  const { logo } = props;
  const { title } = props;
  const { alt } = props;
  const { description } = props;
  const { modalContent } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Card
        onClick={showModal}
        style={{
          width: 500,
          height: 300,
        }}
        hoverable
        title={title}
        bordered={true}
        className="cardCompetences"
      >
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
      <Modal
        width={600}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default CardCompetences;
