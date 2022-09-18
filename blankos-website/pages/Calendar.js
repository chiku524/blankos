import FullCalendar from "@fullcalendar/react";
import { useRef, useEffect, useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const calendarRef = useRef(null);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
        {domLoaded && (<FullCalendar
      innerRef={calendarRef}
      plugins={[dayGridPlugin]}
      editable
      selectable
      events={[
        { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
        { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
        { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
        { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` }
      ]}
      headerToolbar={{start: 'prev today next', center: 'title', end: 'prevYear nextYear'}}
      validRange={{start: '2020-01-01', end:'2028-01-01'}}
      dayMaxEvents
    /> )}
    </>
  );
};

export default Calendar;