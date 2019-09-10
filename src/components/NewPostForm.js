import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
  let _name = null;
  let _body = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({ name: _name.value, body: _body.value, vote: 0, comment: [], id: v4() });
    _name.value = '';
    _body.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          ref={(input) => {_name = input;}}/>
        <textarea
          id='body'
          placeholder='Describe your post.'
          ref={(textarea) => {_body = textarea;}}/>
        <button type='submit'>Post it!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
