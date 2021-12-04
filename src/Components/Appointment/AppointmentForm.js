import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import'./Appointment.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen,closeModal, category, name,date}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
		console.log(data);
		closeModal();
		alert("Appointment Request Sent! Please go to Dashboard and Login with your email which you provided into booking appointment to view details.");
	}
	 
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div className="px-4">
                    <h4 className="text-primary text-center">{category}</h4>
                    <h5 className="text-center style-color">{name}</h5>
                    <p className="text-center text-secondary  small mb-4">
                    On {date.toDateString()} <br /> Available Time: 9:00 AM - 11:00 AM
                    </p> 
                </div> 
                <form onSubmit={handleSubmit(onSubmit)}>
      
                <div className="form-group">
									<input
										type="text"
										ref={register({ required: true })}
										name="name"
										placeholder="Your Name"
										className="form-control"
									/>
									{errors.name && <span className="text-danger">Name is required</span>}
								</div>
								<div className="form-group">
									<input
										type="text"
										ref={register({ required: true })}
										name="phone"
										placeholder="Phone Number"
										className="form-control"
									/>
									{errors.phone && <span className="text-danger">Phone Number is required</span>}
								</div>
								<div className="form-group">
									<input
										type="text"
										ref={register({ required: true })}
										name="email"
										placeholder="Email"
										className="form-control"
									/>
									{errors.email && <span className="text-danger">Email is required</span>}
								</div>
								<div className="form-group row">
									<div className="col-4">
										<select
											className="form-control"
											name="gender"
											ref={register({ required: true })}
										>
											<option disabled={true} value="Not set">
												Select Gender
											</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
											<option value="Not set">Other</option>
										</select>
										{errors.gender && <span className="text-danger">Gender is required</span>}
									</div>
									<div className="col-4">
										<input
											ref={register({ required: true })}
											className="form-control"
											name="age"
											placeholder="Your Age"
											type="number"
										/>
										{errors.age && <span className="text-danger">Age is required</span>}
									</div>
									<div className="col-4">
										<input
											ref={register({ required: true })}
											className="form-control"
											name="weight"
											placeholder="Weight"
											type="number"
										/>
										{errors.weight && <span className="text-danger">Weight is required</span>}
									</div>
								</div>
								<div className="form-group">
									<textarea
										ref={register({ required: true })}
										className="form-control"
										name="problem"
										placeholder="Describe Your Problem... (Ex: headache)"
										type="text"
									/>
									{errors.problem && <span className="text-danger">This field is required</span>}
								</div>

								<div className="form-group text-right">
									<button type="submit" className="btn btn-primary">
										Send
									</button>
								</div>
               </form>                  
            </Modal>
        </div>
    );
};

export default AppointmentForm;