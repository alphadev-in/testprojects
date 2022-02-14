import React, {useState, useEffect} from 'react'
import countries from '../../../../utils/countries.json'
import { getCountries } from '../../../../api/countries'
import FooterSection1 from './FooterSection1'
import InputSelectCountry from '../../../general/form/InputSelectCountry'
import InputSelectImage from '../../../general/form/InputSelectImage'


function Section1(props) {
  const [allCountries, setAllCountries] = useState([])
  const [countryReceiverPhone, setCountryReceiverPhone] = useState(countries.find(el => el.alpha3Code === 'ENG'))
  const [receiverPhone, setReceiverPhone] = useState('')
  const [countrySend, setCountrySend] = useState(countries.find(el => el.alpha3Code === 'IDN'))
  const [valueSend, setValueSend] = useState(107)
  const [countryReceiver, setCountryReceiver] = useState(countries.find(el => el.alpha3Code === 'ENG'))
  const [valueReceiver, setValueReceiver] = useState(10)

  const footer = !props.displayFooter && <FooterSection1 actionNext={props.actionNext}/>

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries()
      setAllCountries(data)
      setCountryReceiverPhone(data.find(el => el.alpha3Code === 'GBR'))
      setCountrySend(data.find(el => el.alpha3Code === 'IDN'))
      setCountryReceiver(data.find(el => el.alpha3Code === 'GBR'))
    }
    fetchData()
  }, [])

  return (
    <div className="columns is-mobile is-multiline">
      <div className="column is-12">
        <InputSelectCountry
          valueInput={receiverPhone}
          setValueInput={setReceiverPhone}
          valueSelect={countryReceiverPhone}
          setValueSelect={setCountryReceiverPhone}
          allCountries={allCountries}
          label={props.labelField1}
          placeholder={props.placeholderField1}
          customClass=""
          isBtnCountry={true}
        />
      </div>
      <div className="column is-12">
        <InputSelectImage
          generateDataList={props.generateDataList}
          valueSelect={props.valueSelect1}
          setValueSelect={props.setSelect1}
        />
      </div>
      <div className="column is-6 pb-0">
        <InputSelectCountry
          valueInput={valueSend}
          setValueInput={setValueSend}
          valueSelect={countrySend}
          setValueSelect={setCountrySend}
          allCountries={allCountries}
          label="You send"
          placeholder="107"
          customClass=""
        />
      </div>
      <div className="column is-6 pb-0">
        <InputSelectCountry
          valueInput={valueReceiver}
          setValueInput={setValueReceiver}
          valueSelect={countryReceiver}
          setValueSelect={setCountryReceiver}
          allCountries={allCountries}
          label="He/She Receives"
          placeholder="10"
          customClass=""
          showArrow={false}
          showText={false}
          showCurrency={true}
        />
        <p className="is-size-7 txt-9E9E9E mt-2">Including Fees : 2 $</p>
      </div>
      { footer }
    </div>
  )
}

export default Section1
