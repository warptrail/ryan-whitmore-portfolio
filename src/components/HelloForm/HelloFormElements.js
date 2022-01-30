import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 0 20px;
  max-width: 1100px;
  margin: 0 auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;

  & > * {
    font-size: clamp(1.125rem, 0.5694rem + 2.7778vw, 1.4375rem);
    padding: 4px;
    margin: 5px 0;
    border-radius: 4px;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #03bf71;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }
`;

export const ContactH3 = styled.h3`
  text-align: center;
  /* font-size: clamp(1.75rem, 1.75rem + 0vw, 1.75rem); */
  font-size: 50px;
  letter-spacing: 0.25rem;
  color: #98aaf8;
  margin-bottom: 1vh;
`;
export const TextInput = styled.input``;
export const TextArea = styled.textarea`
  height: 300px;

  line-height: 150%;
  resize: vertical;
`;

export const SubmitBtn = styled.button`
  color: #98aaf8;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background: #03bf71;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
`;

export const ReplyP = styled.p`
  font-size: clamp(1.75rem, 1.75rem + 0vw, 1.75rem);
  color: #8fd8db;
  margin: 20px 0;
`;
