import React, { Component } from 'react'

export class BookList extends Component {
  render() {
    return (
      <div className='book-list'>
        <ul>
          <li>Harry Potter</li>
          <li>Twilight</li>
          <li>Dr Suse</li>
        </ul>
      </div>
    )
  }
}

export default BookList
