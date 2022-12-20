import './index.css'

const CountryList = props => {
  const {countryNamesDetails, clickOnCountry} = props
  const {name, id, isVisited} = countryNamesDetails

  const onClickVisit = () => {
    clickOnCountry(id)
  }

  const buttonClass = isVisited ? 'visited-btn' : 'btn'
  return (
    <li className="counties-names">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visit-text">Visited</p>
      ) : (
        <button className={buttonClass} type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryList
