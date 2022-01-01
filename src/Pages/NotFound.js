import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import error from '../Images/serviceIcon/404Error.png';
const goBack = () => window.history.back();

const NotFound = () => {
	return (
		<section className="error">
			<div className="d-flex align-items-center justify-content-center text-center" style={{ height: '100vh' }}>
				<div>
					<img src={error} width="100" alt="" />
					<p className="lead">Page Not Found</p>
                    <h5 style={{ color:"#1f2d53"}}className="font-weight-bold">"You know what keeps going through my head? <br />
                        where's my SANDWICH?"</h5>
					<button onClick={goBack} className="btn btn-style" to="/">
						<FontAwesomeIcon className=" mr-2" icon={faArrowLeft} /> Go Back
					</button>
				</div>
			</div>
		</section>
	);
};

export default NotFound;