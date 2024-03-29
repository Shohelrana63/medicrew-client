// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Calender.css';

// const ReactCalender = ({handleChange}) => {
// 	// const [value, onChange] = useState(new Date());

// 	return (
// 		<div className="my-calender">
// 			<Calendar
// 				onChange={handleChange}
//                 value={new Date()}
// 			/>
// 		</div>
// 	);
// };

// export default ReactCalender;

import { addDays } from 'date-fns';
import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalenderContext } from '../../App';
import './Calender.css';

const ReactCalender = () => {
	const calenderData = useContext(CalenderContext);
	const onChange = (date) => calenderData.setDate(date);

	return (
		<div className="my-calender">
			<Calendar
				onChange={onChange}
				value={calenderData.value}
				minDate={new Date()}
				maxDate={addDays(new Date(), 25)}
			/>
		</div>
	);
};

export default ReactCalender;