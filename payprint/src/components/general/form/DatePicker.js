import React, { Fragment, useEffect, useRef, useState } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';

function DatePicker({}) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [leave, setLeave] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    bulmaCalendar.attach('[type="date"]', {
      showHeader: false,
      showFooter: false,
      showClearButton: false,
      displayMode: 'inline',
      dateFormat: 'dd-MM-yyyy'
    });
    ref.current.bulmaCalendar.on('select', (datepicker) => {
      setValue(datepicker.data.value())
      setOpen(false)
    })
  }, []);

  return (
    <Fragment>
      <div
        onMouseEnter={() => { setLeave(false) }}
        onMouseLeave={() => { setLeave(true) }}
        className={`dropdown is-width-100p ${open ? 'is-active' : ''}`}>
        <div
          className="dropdown-trigger is-width-100p"
          onClick={() => setOpen(!open)}
          onBlur={() =>{
            if (leave) setOpen(false)
          }}>
          <div className="field">
            <p className="control has-icons-right">
              <input
                className="input is-fullwidth"
                type="text"
                placeholder=""
                value={value}
                readOnly={true}/>
              <span className="icon is-small has-text-black is-right">
                <i className="mdi mdi-calendar-month"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content is-width-inherit">
            <input id="dob" type="date" ref={ref}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default DatePicker;