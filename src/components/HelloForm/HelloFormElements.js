import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 0 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    font-size: clamp(1.125rem, 0.5694rem + 2.7778vw, 1.4375rem);
    padding: 4px;
    margin: 5px 0;
    border-radius: 4px;
  }
`;

export const ContactH3 = styled.h3`
  text-align: center;
  font-size: clamp(1.75rem, 1.75rem + 0vw, 1.75rem);
  color: #fff;
  margin-bottom: 1vh;
`;
export const TextInput = styled.input``;
export const TextArea = styled.textarea`
  height: 300px;
`;

export const SubmitBtn = styled.button``;

export const ReplyP = styled.p`
  font-size: clamp(1.75rem, 1.75rem + 0vw, 1.75rem);
  color: #8fd8db;
  margin: 20px 0;
`;
