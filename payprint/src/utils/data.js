
import countries from './countries.json'
import TMobile from '../images/TMobile.png'
import Sprint from '../images/sprint.png'
import ATT from '../images/at&t.png'
import VerizonWireless from '../images/verizon-wireless.png'
import Mpesa from '../images/mpesa.png'
import DeutsheBank from '../images/deutsheBank.png'

export const dataSelectTopUp = [
  { src: TMobile, value: '1' },
  { src: Sprint, value: '2' },
  { src: ATT, value: '3' },
  { src: VerizonWireless, value: '4' },
]

export const dataSelectMobileMoney = [
  { src: Mpesa, value: '1' },
]

export const dataSelectPayToBank = [
  { src: DeutsheBank, value: '1' },
]

export const generateDataSelectTopUp = (actionSelect) => {
  return dataSelectTopUp.map((item, index) =>
    <li
      onClick={() => actionSelect(item)}
      key={index}
      className="px-3 dropdown-item">
      <div className="level is-width-100p is-height-100p">
        <img
          src={item.src} alt="flag-en" 
          style={{ height: '20px' }}
        />
      </div>
    </li>
  )
}

export const generateListCountries = (actionSelect) => {
  return countries.map((item, index) =>
    <li
      onClick={() => actionSelect(item)}
      key={index}
      className="px-3">
      <div className="level is-width-100p">
        <div className="level-left">
          <img
            src={item.flag} alt={`flag-${item.alpha3Code}`} 
            style={{ height: '17px', width: "23px" }}
            className="mr-2"
          />
          <span className="is-size-7 txt-0C2E60 has-text-weight-medium">{item.alpha3Code}</span>
        </div>
      </div>
    </li>
  )
}

export const generateListCountriesByData = (actionSelect, dataCountries) => {
  return dataCountries.map((item, index) =>
    <li
      onClick={() => actionSelect(item)}
      key={index}
      className="px-3">
      <div className="level is-width-100p">
        <div className="level-left">
          <img
            src={item.flag} alt={`flag-${item.alpha3Code}`} 
            style={{ height: '17px', width: "23px" }}
            className="mr-2"
          />
          <span className="is-size-7 txt-0C2E60 has-text-weight-medium">{item.alpha3Code}</span>
        </div>
      </div>
    </li>
  )
}
