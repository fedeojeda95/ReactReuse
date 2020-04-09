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
    <div className="container">
      <h1> Secret code generator! </h1>
      <h2> Generate your secret code from a text </h2>
      <div className="form">
        <div className="form-input">
          <label>
            Value to generate secret code:
            <input
              className="input-field"
              type="text"
              name="value"
              value={keyword}
              onChange={valueHasChanged}
            />
          </label>
        </div>
        <label>
          {formIsValid
            ? `Secret code: ${secretCode}`
            : 'Write a text to see the secret text generated!'}
        </label>
      </div>
    </div>
  );
}

export default SecretCodeGenerator;
