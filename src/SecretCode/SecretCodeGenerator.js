import React from 'react';
import SecretCodePresentation from './SecretCodePresentation';
import useSecretCodeGenerator from '../hooks/useSecretCodeGenerator';

function SecretCodeGenerator() {
  const [secretCode, keyword, onKeywordChange] = useSecretCodeGenerator();

  return (
    <SecretCodePresentation
      onKeywordChange={onKeywordChange}
      formIsValid={keyword.length > 0}
      secretCode={secretCode}
      keyword={keyword}
    />
  );
}

export default SecretCodeGenerator;
