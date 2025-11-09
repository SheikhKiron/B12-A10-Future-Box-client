import React from 'react';
import styled from 'styled-components';

const NewsletterSection = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <span className="title">Subscribe to our newsletter</span>
        <p className="description">
          Get updates about upcoming events and community activities directly to
          your inbox.
        </p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background: #0a400c; 

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 28rem;
    width: 100%;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1rem;
    color: #d1d5db; 
    margin-bottom: 1.5rem;
  }

  .form div {
    display: flex;
    width: 100%;
    gap: 0.5rem;
  }

  .form div input {
    flex: 1;
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
    border-radius: 0.375rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    outline: none;
  }

  .form div input::placeholder {
    color: #e5e7eb;
  }

  .form div input:focus {
    border: 1px solid #facc15;
  }

  .form div button {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: #facc15; 
    color: #0a400c;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form div button:hover {
    background-color: #eab308; 
  }

  @media (max-width: 640px) {
    .form div {
      flex-direction: column;
    }

    .form div input,
    .form div button {
      width: 100%;
    }
  }
`;

export default NewsletterSection;
