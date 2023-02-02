import logo from './logo.svg';
import './App.css';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Year, Agenda, RecurrenceEditor, ViewsDirective, ViewDirective, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule'

function App() {
const EventSetting = [
{
  Id: 1,
  Subject: 'Test',
  StartTime: new Date(2023, 1, 16, 10, 0),
  EndTime: new Date(2023, 1, 16, 12, 30),
  IsAllDay: true,
  Status: 'Completed',
  Priority: 'High',
  Recurrence: 'Freq=Weekly; Interval=1; Count=10',
  IsReadonly: true,
  isBlock: true,
},
// {
//   Id: 2, 
//   Subject: 'Meeting',
//   StartTime: new Date(2023, 1, 15, 10, 0),
//   EndTime: new Date(2023, 1, 15, 12, 30),
//   IsAllDay: false,
//   Status: 'Completed',
//   Priority: 'High'
// }
];
  return (
    <ScheduleComponent currentView='Month' newSetting={{dataSource: EventSetting}} selectDate={new Date(2023, 1, 1)}>
      <ViewsDirective>
        <ViewDirective option='Week'></ViewDirective>
        <ViewDirective option='Day'></ViewDirective>
        <ViewDirective option='Month'></ViewDirective>
        <ViewDirective option='Year'></ViewDirective>
        <ViewDirective option='TimelineDay'></ViewDirective>
        <ViewDirective option='TimelineMonth'></ViewDirective>
        
      </ViewsDirective>
     <Inject services={[Day, Week, WorkWeek, Month, Year, Agenda, TimelineViews, TimelineMonth ]} />
    </ScheduleComponent>
  );
}

export default App;
