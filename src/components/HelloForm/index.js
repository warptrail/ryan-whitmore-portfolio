import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Form,
  FormContainer,
  ContactH3,
  TextArea,
  TextInput,
  SubmitBtn,
  ReplyP
} from './HelloFormElements';

const HelloForm = () => {
  const [state, handleSubmit] = useForm('mrgjeqol');

  if (state.succeeded) {
    return <ReplyP>Thanks for reaching out! I will be in touch soon.</ReplyP>;
  }

  return (
    <FormContainer id="contact">
      <ContactH3>Contact Me</ContactH3>
      <Form onSubmit={handleSubmit}>
        <TextInput placeholder="Email" id="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextArea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <SubmitBtn type="submit" disabled={state.submitting}>
          Send
        </SubmitBtn>
      </Form>
    </FormContainer>
  );
};

export default HelloForm;
