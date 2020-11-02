import PropTypes from 'prop-types';
import React from 'react';
import { Message as MessageSemanticUI } from 'semantic-ui-react';

const Message = ({ message }) => (
  <MessageSemanticUI>
    {/* <MessageSemanticUI.Header>Changes in Service</MessageSemanticUI.Header> */}
    {message}
  </MessageSemanticUI>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
