import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import cookie from 'react-cookies';

import {
	MDBBtn,
	MDBCard,
	// MDBCardBody,
	MDBCardImage,
	// MDBCardTitle,
	// MDBCardText,
	MDBRow,
	MDBCol,
	MDBIcon
} from 'mdbreact';

class Question extends Component {

	handleButtonClick = () => {

		// cookie.save('quizCode', this.props.id, { path: '/' })
		// window.location.href = window.location.origin + '/viewResult'
		console.log('/aslasviewaasanswer');
	}

	render() {
		var colors = ['purple-gradient', 'aqua-gradient', 'peach-gradient', 'blue-gradient'];

		return (


			<MDBRow className="mycard">
				<MDBCol>
					<MDBCard>
						<MDBCardImage
							className={colors[this.props.flag]}
							tag='div'>
							<a href={this.handleButtonClick}><h5 className="question">{this.props.Full_Question}</h5></a>
						</MDBCardImage>
						<div className="body">
							<span className="details">
								<span class="details_item text-center">
									<h6>{this.props.Votes}</h6>
									<h6>Votes</h6>
								</span>
								<span class="details_item">
									<h6>{this.props.Answer_count}</h6>
									<h6>Answers</h6>
								</span>
								<span class="details_item">
									<h6>{this.props.Viewcount}</h6>
									<h6>Views</h6>
								</span>
							</span>
							<span className="tags">
								<span className="tagtag">Tags: </span>

								{
									this.props.Tags == null ?
										<h1>Component loading wait</h1> :
										this.props.Tags.map(tag => {
											return <span className="tag">{tag}</span>
										})
								}
								{/* <span className="tag">{this.props.Tags}</span>
								<span className="tag">webdev</span>
								<span className="tag">react</span>
								<span className="tag">frontend</span> */}
							</span>
						</div>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		)
	}
}

export default Question;