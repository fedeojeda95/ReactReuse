import React from 'react';
import './SecretCodePresentation.css';

function SecretCodeGenerator({
  onKeywordChange,
  formIsValid,
  secretCode,
  keyword,
}) {
  function valueHasChanged({target: {value: newValue}}) {
    onKeywordChange(newValue);
  }

  return (
    <div>
      <label>
        Value to generate secret code:
        <input
          type="text"
          name="value"
          value={keyword}
          onChange={valueHasChanged}
        />
      </label>
      <label>
        {formIsValid
          ? `Secret code: ${secretCode}`
          : 'Write a text to see the secret text generated!'}
      </label>
    </div>
  );
}

export default SecretCodeGenerator;
