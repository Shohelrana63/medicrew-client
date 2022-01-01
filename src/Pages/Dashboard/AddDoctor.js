import React, { useState,useRef } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import { Form } from 'react-bootstrap';

const AddDoctor = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
    }, []);
	
    const [ info, setInfo ] = useState({
		success: '',
		error: ''
	});
	const [ file, setFile ] = useState(null);

	const handleBlur = (e) => {
		const newInfo = { ...info };
		newInfo[e.target.name] = e.target.value;
		setInfo(newInfo);
	e.preventDefault();
	};

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	const formRef = useRef(null);

	const handleReviewSubmit = (event) => {
		event.preventDefault();
			const formData = new FormData();
		console.log(info);
		formData.append('file', file);
		formData.append('id', Math.round(Math.random() * 100 + 15));
		formData.append('category', info.category);
		formData.append('name', info.name);
		formData.append('education', info.education);
		formData.append('designation', info.designation);
		formData.append('department', info.department);
		formData.append('hospital', info.hospital);
		formData.append('img', info.img);
			fetch('https://quiet-reaches-13499.herokuapp.com/addADoctor', {
			method: 'POST',
			body: formData
		})
			.then((result) => {
				const updateInfo = { ...info };
				updateInfo.success = 'Doctor Added Successfully';
                console.log(updateInfo.success)
				updateInfo.error = '';
				setInfo(updateInfo);
				result.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				const errUpdate = { ...info};
				errUpdate.success = '';
				errUpdate.error = 'something wrong happened';
				setInfo(errUpdate);
			});
		formRef.current.reset();
	};
    return (
        <section className="container-fluid row" style={{ backgroundColor: '#F4FDFB' }}>
			<Sidebar />
			<div id="responsive-dashboard" className="col-md-10 p-4 doctorForm"
             style={{position:"absolute", right: 0, backgroundColor: '#F4FDFB' }}>
				<h5 className="text-brand mb-4">Add a Doctor</h5>
				<div className="">
					{info.success && <p className="text-success font-weight-bold">{info.success}</p>}
					{info.error && <p className="text-danger">{info.error}</p>}

					<Form onSubmit={handleReviewSubmit} ref={formRef}>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Category</Form.Label>
								<Form.Control
									onBlur={handleBlur}
									type="text"
									className="form-control"
									name="category"
									placeholder="Enter Category"
									required={true}
							/>
						</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Name</Form.Label>
								<Form.Control
									onBlur={handleBlur}
									type="text"
									className="form-control"
									name="name"
									placeholder="Enter Your Name"
									required={true}
								/>
						</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Education</Form.Label>
								<Form.Control
									onBlur={handleBlur}
									type="text"
									className="form-control"
									name="education"
									placeholder="Enter Your Education"
									required={true}
								/>
							</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Designation</Form.Label>
								<Form.Control
									onBlur={handleBlur}
									type="text"
									className="form-control"
									name="designation"
									placeholder="Enter Your Designation"
									required={true}
								/>
						</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
						<Form.Label>Department</Form.Label>
							<Form.Control
								onBlur={handleBlur}
								type="text"
								className="form-control"
								name="department"
								placeholder="Enter Your Department"
								required={true}
							/>
						</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Hospital</Form.Label>
								<Form.Control
									onBlur={handleBlur}
									type="text"
									className="form-control"
									name="hospital"
									placeholder="Enter Your Hospital"
									required={true}
								/>
						</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Upload a image in
								<a href="https://imgur.com/"
									rel="noopener noreferrer"
									target="_blank"
									className="text-black px-2"
									>
										<strong>imgur</strong>
									</a> & Paste the image link here
							</Form.Label>
								<Form.Control
									onBlur={handleBlur}
									type="text"
									className="form-control"
									name="img"
									placeholder="Upload Picture in imgur and paste the img link here"
									required={true}
								/>
						</Form.Group>
						<Form.Group className="col-6" controlId="formBasicText">
							<Form.Label>Upload a image</Form.Label>
								<Form.Control
									onChange={handleFileChange}
									type="file"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Picture"
									required={true}
								/>
						</Form.Group>
						<button type="submit" className="btn btn-style mt-2 ml-3">
							Submit
						</button>
					</Form>
				</div>
			</div>
		</section>
    );
};

export default AddDoctor;