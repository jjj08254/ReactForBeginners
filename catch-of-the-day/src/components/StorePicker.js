import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // if declear goToStore as a method, need to use constructor to bind 'this'
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  // goToStore is a property, same as myInput
  goToStore = e => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      // <React.Fragment>
      // <p>Fragment allows multiple elements</p>
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter Add Store</h2>
        <input
          type="text"
          ref={this.myInput} // to get the value from input
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
      // </React.Fragment>
    );
  }
}

export default StorePicker;
