import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Message as MessageSemanticUI } from 'semantic-ui-react';

const Message = ({ message, hideMessage }) => {
  useEffect(() => {
    // console.log('je prévois mon auto-destruction dans 5 secondes');

    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    // setTimeout retourne un id, on peut le stocker et ensuite annuler le
    // timer avec clearTimeout(id)
    const timeoutId = setTimeout(
      () => {
        // console.log('on va masquer le message');
        hideMessage();
      },
      5000, // délai en millisecondes
    );

    // si useEffect retourne une callback, cette callback est exécutée
    // comme fonction de nettoyage :
    // - soit à la destruction du composant si deuxième argument []
    // - soit quand la prop change si deuxième argument [prop] (c'est
    // le cas ici : fonction de nettoyage appelée juste avant le prochain
    // useEffect)

    return () => {
      console.log('nettoyage');
      clearTimeout(timeoutId);
    };
  }, [message]);

  return (
    <MessageSemanticUI>
      {/* <MessageSemanticUI.Header>Changes in Service</MessageSemanticUI.Header> */}
      {message}
    </MessageSemanticUI>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  hideMessage: PropTypes.func.isRequired,
};

export default Message;
