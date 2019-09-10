import React from 'react';
import PropTypes from 'prop-types';

function NewCommentForm(props) {
  let _name = null;
  let _body = null;

  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation(props.postIndex, { name: _name.value, body: _body.value });
    _name.value = '';
    _body.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewCommentFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          ref={(input) => {_name = input;}}/>
        <textarea
          id='body'
          placeholder='Describe your post.'
          ref={(textarea) => {_body = textarea;}}/>
        <button type='submit'>Comment it!</button>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;
