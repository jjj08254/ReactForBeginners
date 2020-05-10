import React from 'react';

class EditFishForm extends React.Component {
  hangleChange = e => {
    // update that fish
    // 1. take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.hangleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.hangleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.hangleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          onChange={this.hangleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.hangleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          X Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
