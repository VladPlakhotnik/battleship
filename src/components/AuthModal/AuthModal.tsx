import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerName } from "../../hooks/usePlayerName";
import { Overlay, Modal, Title, Form, Input, Button } from "./AuthModal.styles";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { setPlayerName } = usePlayerName();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setPlayerName(name.trim());
    navigate("/game");
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>Enter Your Name</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            autoFocus
          />
          {error && (
            <span style={{ color: "var(--error-color)", fontSize: "0.875rem" }}>
              {error}
            </span>
          )}
          <Button type="submit" disabled={!name.trim()}>
            Start Game
          </Button>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default AuthModal;
