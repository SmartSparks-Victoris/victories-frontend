import ChatForm from './form';
import React from 'react';

const SupportChat = ({ chat }) => {
  const messages = chat.messages;
  return (
    <section>
      <div>
        <h2>Support Team</h2>
      </div>
      <div>
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              className={`${
                message.type === 'admin' ? 'bg-green-200' : 'bg-slate-400'
              }`}>
              {message.content}
            </div>
          );
        })}
      </div>
      <div>
        <ChatForm />
      </div>
    </section>
  );
};

export default SupportChat;

