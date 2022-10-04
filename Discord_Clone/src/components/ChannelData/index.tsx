import React, { FC, useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';

const ChannelData: FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Rohit'
            content='This is a test message'
            date='Today at 20:57'
          />
        ))}

        <ChannelMessage
          author='Aman'
          content='This is a test, but coming from a bot.'
          date='Today at 23:58'
          isBot
        />

        <ChannelMessage
          author='Rohan'
          content={
            <>
              <Mention>@Sattu</Mention> this is mention.
            </>
          }
          date='Today at 23:59'
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Message #general" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
