import React from 'react'
import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props

  const handleDelete = () => {
    // eslint-disable-next-line no-use-before-define
    deleteItem(id)
  }
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        eslint-disable-next-line react/button-has-type
        <button data-testis="delete" type="button" onClick={handleDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
