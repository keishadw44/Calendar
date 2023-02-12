
import './App.css';

import { 
  Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Year, Agenda, 
  RecurrenceEditor, ViewsDirective, ViewDirective, TimelineViews, TimelineMonth,
   DragAndDrop, Resize 
  } from '@syncfusion/ej2-react-schedule'

import { TreeViewComponent, treeViewData } from '@syncfusion/ej2-react-navigations';

function App() {

  <h1>Chronology</h1>
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

];
  return (
 
    <ScheduleComponent currentView='Month' newSetting={{dataSource: EventSetting}} selectDate={new Date(2023, 1, 1)} allowDragAndDrop={false} allowResizing={false}>
      <ViewsDirective>
        <ViewDirective option='Week'></ViewDirective>
        <ViewDirective option='Day' startHour='12:00' endHour='23:00'></ViewDirective>
        <ViewDirective option='Month' showWeekNumber={true} showWeekend={true}></ViewDirective>
        <ViewDirective option='Year'></ViewDirective>
        <ViewDirective option='TimelineDay' ></ViewDirective>
        <ViewDirective option='TimelineMonth'></ViewDirective>
        <TreeViewComponent fields={{dataSource: treeViewData, id: 'id', text: 'Name'}} />

      </ViewsDirective>
     <Inject services={[Day, Week, WorkWeek, Month, Year, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
    </ScheduleComponent>

    

  );
}
  
//   return (
// <div>
    
//     <div className='sch-title' > Appointments </div>
//     <div className='sch-component'>
//     <ScheduleComponent>
//     </ScheduleComponent>
//     </div>

//     <div className="tree-title"> List </div>
//     <div className="tree-component">
//       <TreeViewComponent fields={{dataSource: treeViewData, id: 'id', text: 'Name'}} />
//       </div>
//     </div>  
    
//   );
//   }

export default App;
