import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
      category: '',
      error: {},
      isTitleValid: true,
      isDescValid: true,
      isURLValid: true,
      isCategoryValid: true,
      isFormValid: false
    };
  }

  render() {
    return (
      <div className="container">
        <form noValidate autoComplete="off">
          <div className="form-group">
            <label htmlFor="inputTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              aria-describedby="titleHelp"
              placeholder="Title of book/blog"
            />
            <div className={`alert alert-danger ${this.state.isTitleValid ? 'd-none' : ''}`}>
              <div>Title is required.</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputDesc">Description</label>
            <input
              type="text"
              className="form-control"
              id="inputDesc"
              aria-describedby="DescHelp"
              placeholder="Description of Book/Blog"
            />
            <div className={`alert alert-danger ${this.state.isDescValid ? 'd-none' : ''}`}>
              <div>Description is required.</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputDesc">URL</label>
            <input
              type="text"
              className="form-control"
              id="inputDesc"
              aria-describedby="DescHelp"
              placeholder="Blog/Book link"
            />
            <div className={`alert alert-danger ${this.state.isURLValid ? 'd-none' : ''}`}>
              <div>Link is required.</div>
            </div>
          </div>

          <div className="input-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  id="exampleRadios1"
                  value="Blog"
                />
                <span>Blog</span>
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  id="exampleRadios2"
                  value="Book"
                />
                <span>Book</span>
              </label>
            </div>
            <div className={`alert alert-danger ${this.state.isCategoryValid ? 'd-none' : ''}`}>
              <div>Please select the category.</div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.isFormValid}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
