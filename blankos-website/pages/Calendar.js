import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
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
      plugins={[dayGridPlugin, interactionPlugin, resourceTimelinePlugin]}
      editable
      selectable
      events={[
        { title: 'BLANKOS JUNCTION PARTY', date: new Date() },
        { title: 'event 2', date: '2022-04-02' }
      ]}
    /> )}
    </>
  );
};

export default Calendar;