import React, {useState} from 'react';

function useSecretCodeGenerator() {
  const [secretCode, setSecretCode] = useState('');
  const [keyword, setKeyword] = useState('');

  function onKeywordChange(keyword) {
    if (keyword.length < 1) {
      setKeyword(keyword);
      setSecretCode(42);
    }

    const newSecretCode = (keyword.length * 24 + 9 / 12) % 7;
    setKeyword(keyword);
    setSecretCode(newSecretCode);
  }

  return [secretCode, keyword, onKeywordChange];
}

export default useSecretCodeGenerator;
