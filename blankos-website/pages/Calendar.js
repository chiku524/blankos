import FullCalendar from "@fullcalendar/react";
import { useRef, useEffect, useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';
import Nav from "../components/Nav";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="pageContainer">
        <Nav />
        <div className="container">
            <div className="left-copy-container">
                <div className="left-copy">
                    <h2>Here is a calendar for all of the Blankos events!</h2>
                    <p>Make sure to stay up to date for the latest drops & news!</p>
                    <p>Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text</p>
                    <p>Replace this with any text you want, ie events, drops</p>
                    <p>Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text</p>
                    <p>Replace this with any text you want, ie events, drops</p>
                    <p>Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text</p>
                    <p>Replace this with any text you want, ie events, drops</p>
                    <p>Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text</p>
                    <p>Replace this with any text you want, ie events, drops</p>
                    <p>Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text</p>
                    <p>Replace this with any text you want, ie events, drops</p>
                    <p>Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text Lorem Ipsum this is dummy text</p>
                    <p>Replace this with any text you want, ie events, drops</p>
                </div>
            </div>
            <div className="calendar-container">
                {domLoaded && (<FullCalendar
            innerRef={calendarRef}
            plugins={[dayGridPlugin]}
            editable
            selectable
            events={[
                { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
                { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
                { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
                { title: 'BLANKOS PARTY', date: `${new Date().toISOString().slice(0,10)}` },
                { title: 'BLANKOS PARTY', date: '2022-09-20' }
            ]}
            headerToolbar={{start: 'prev today next', center: 'title', end: 'prevYear nextYear'}}
            validRange={{start: '2020-01-01', end:'2028-01-01'}}
            dayMaxEvents
            /> )}
            </div>
        </div>
    </div>
    
  );
};

export default Calendar;