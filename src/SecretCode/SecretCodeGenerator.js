import React from 'react';
import useSecretCodeGenerator from '../hooks/useSecretCodeGenerator';

const secretCodeGenerator = (Presentation) => () => {
  const [secretCode, keyword, onKeywordChange] = useSecretCodeGenerator();

  return (
    <Presentation
      onKeywordChange={onKeywordChange}
      formIsValid={keyword.length > 0}
      secretCode={secretCode}
      keyword={keyword}
    />
  );
};

export default secretCodeGenerator;
