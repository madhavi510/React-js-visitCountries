import './index.css'

const CountryItem = props => {
  const {countriesDetails, deleteItem, getItem} = props
  const {name, imageUrl, id} = countriesDetails

  const onDeleteItem = () => {
    deleteItem(id)
    getItem(id)
  }

  return (
    <li className="counties-list">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="country-name-container">
        <p className="country-item-name">{name}</p>
        <button className="removeBtn" type="button" onClick={onDeleteItem}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountryItem
