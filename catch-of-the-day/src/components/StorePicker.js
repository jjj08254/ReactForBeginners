import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      // <React.Fragment>
      // <p>Fragment allows multiple elements</p>
      <form className="store-selector">
        <h2>Please Enter Add Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
      </form>
      // </React.Fragment>
    );
  }
}

export default StorePicker;
