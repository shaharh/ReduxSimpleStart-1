import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li onClick={() => this.props.selectBook(book)}
            key={book.title}
            className="list-group-item">{book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as
// props on the bookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called the result should be passed
  // to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote bookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
