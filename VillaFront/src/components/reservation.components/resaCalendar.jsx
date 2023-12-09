import {React, useState} from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo/DemoContainer';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar/DateRangeCalendar';


const ResaCalendar = () => {
    const [value, setValue] = useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
      ]);
  return (
    <>
    <h2>Calendrier de resarvation</h2>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
        <DemoItem label="Uncontrolled calendar">
          <DateRangeCalendar
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
          />
        </DemoItem>
        <DemoItem label="Controlled calendar">
          <DateRangeCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </>
  )
}

export default ResaCalendar