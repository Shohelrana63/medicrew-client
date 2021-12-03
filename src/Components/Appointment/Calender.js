import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css';

const ReactCalender = ({handleChange}) => {
	// const [value, onChange] = useState(new Date());

	return (
		<div className="my-calender">
			<Calendar
				onChange={handleChange}
                value={new Date()}
			/>
		</div>
	);
};

export default ReactCalender;