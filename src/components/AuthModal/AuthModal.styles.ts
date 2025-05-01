import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Modal = styled.div`
  background: var(--card-background);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: var(--shadow-lg);
  animation: modalFadeIn 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-md);
  color: var(--text-primary);
  font-size: 0.9rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }

  &:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(var(--accent-color-rgb), 0.2);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: var(--primary-gradient);
  color: var(--text-primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  &:active {
    transform: translateY(0);
  }
`;
