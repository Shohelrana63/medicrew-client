import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../Doctors/Doctors.css';
import AppointmentForm from './AppointmentForm';

const AppointmentCard = ({doctorsData, date}) => {
    const { id, img, category, name, education, designation, department, hospital } = doctorsData;
	const [ descriptionCollapse, setDescriptionCollapse ] = useState(false);

	const showMore = () => {
		setDescriptionCollapse(true);
	};

	const showLess = () => {
		setDescriptionCollapse(false);
	};
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 mb-5">
			<div className="single-doctor">
				<img className="img-fluid doctor-image" src={img} alt="doctor" />
				<div className="doctor-description">
					<p className="doctor-category">{category}</p>
					<h4 className="doctor-name">{name}</h4>
					<span className="doctor-education">
						{descriptionCollapse ? education : education.substr(0, 80)}
					</span>
					{education.length > 80 ? descriptionCollapse ? (
						<span onClick={showLess} className="collapse-btn">
							See Less
						</span>
					) : (
						<span onClick={showMore} className="collapse-btn">
							See More
						</span>
					) : (
						<span> </span>
					)}
					<h6 className="mt-4">{designation}</h6>
					<h6 className="department">{department}</h6>
					<h6 className="hospital">{hospital}</h6>
					<div className="text-center">
						<button className="btn btn-style button-style mt-3"
                        //  onClick={() => modalController(id)}
                        onClick={openModal}
                         >
							<FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
						</button>
                        <AppointmentForm 
                        date={date}
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                        category={category}
                        name={name}
                        />
					</div>
				</div>
			</div>
		</div>
    );
};

export default AppointmentCard;