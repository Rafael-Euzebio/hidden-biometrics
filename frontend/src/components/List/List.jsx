import React from 'react'
import PropTypes from 'prop-types'
import '@styles/blocks/list.scss'

const List = ({ items, modifier }) => {
  if (items && Array.isArray(items)) {
    return (
      <ul className={`list ${modifier ? `${modifier}` : ''}`}>
        {
          items.map((item, index) =>
            <li className={`${modifier ? `${modifier}` : ''}`} key={index}>{item}</li>
          )
        }
      </ul>
    )
  } else {
    return <div></div>
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  modifier: PropTypes.string
}
export default List
