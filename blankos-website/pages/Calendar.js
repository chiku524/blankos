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
        { title: 'BLANKOS JUNCTION PARTY', date: new Date() },
        { title: 'event 2', date: '2022-04-02' }
      ]}
      headerToolbar={{start: 'title', center: 'prev today next', end: 'prevYear nextYear'}}
    /> )}
    </>
  );
};

export default Calendar;