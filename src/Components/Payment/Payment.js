import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import bkash from "../../Images/paymentIcon/bkash.png";
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Payment = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
	const [ isPayment, setIsPayment ] = useState(false);

    const modalController = () => {
		setModalIsOpen(true);
	};
    const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
        setIsPayment(true)
	};
    const successView = () => {
		setIsPayment(false);
		setModalIsOpen(false);
	};
    const closeModal = () => {
        setModalIsOpen(false);
      }
    return (
        <section className="container-fluid row" style={{ backgroundColor: '#F4FDFB', height: '100vh' }}>
			<Sidebar />
			<div id="responsive-dashboard" className="col-md-10 p-4 "
             style={{position:"absolute", right:"-13px", backgroundColor: '#F4FDFB' }}>
				<h4 className="text-brand text-primary my-4 ">Make Payment</h4>
				<div className="paymentForm">
                   <div className="col-md-6">
                       <h5 className="text-primary">Select Your Payment Method</h5>
                       <img style={{width:"50%"}} onClick={modalController} src={bkash} alt="" />
                       <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            id="modal-responsive"
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(130,125,125,0.75)'
                                },
                                content: {
                                    top: '55%',
                                    left: '50%',
                                    right: 'auto',
                                    bottom: 'auto',
                                    marginRight: '-50%',
                                    width: '45%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: '#df146e'
                                }
                            }}
			>{
                isPayment ? 
                <div className="text-center  py-5 my-5">
						<FontAwesomeIcon className="text-success" style={{ fontSize: '5em' }} icon={faCheckCircle} />
						<h4 className="mt-5 lead">Congratulations!! <br /> Payment Successfully Sent!</h4>
						<span className="d-none">{setTimeout(successView, 10000)}</span>
					</div>
            :
						<div className="px-4">
							<h2 className="text-primary text-center font-weight-bold">Bkash Payment</h2>
							<h5 className="text-center text-white">Merchant: Medicrew</h5>
							<h6 className="text-center text-white">Invoice No: 836743897439</h6>
							<h6 className="text-center text-white">Amount: BDT 300</h6>
							
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-group">
									<input
										type="text"
										ref={register({ required: true })}
										name="bkashNumber"
										placeholder="Your Bkash Account Number"
										className="form-control"
									/>
									{errors.name && <span className="text-danger">Number is required</span>}
								</div>
								<div className="form-group">
									<input
										type="text"
										ref={register({ required: true })}
										name="password"
										placeholder="Your Bkash Password"
										className="form-control"
									/>
									{errors.phone && <span className="text-danger">Password is required</span>}
								</div>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" id="rememberUser" />
                                    <label className="custom-control-label text-white" htmlFor="rememberUser">
                                        I agree to the terms and conditions
                                    </label>
					            </div>
								<div className="form-group py-3 ">
                                    <div className="text-left"> 
                                       <button onClick={closeModal} style={{marginRight:"343px"}}
                                        className=" btn btn-danger text-white">
                                           CLOSE
                                        </button>
                                        <button className="btn btn-primary ">
                                            PROCEED
                                        </button>
                                    </div>
								</div>
							</form>
						</div>
}
			</Modal>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;