import React from 'react';

const Content = () => {
    return (
        
        <div className="container">
			<div className="row">
				<div className="col-md-6" id="me">
					<h3>Contact Me</h3>
					<p>
					I'm a career shifter. From  Linguistics to a Software Engineer Programmer. Looking for a position of Front-End development. Versatile self-motivated learner, who has great passion for ITsphere and people communication. A driven, open minded and with a strong sense of dedication and commitment.
					If you are interested in employment. Please contact me.</p>
					<div className="linkin">
					<a className="conact-info" href="https://www.linkedin.com/in/mary-ruth-diolas-8467bb164/" target="_blank">
						<i className="fab fa-linkedin fa-3x"></i>
						<span>LinkedIn</span>
					</a>
					</div>
					<div className="github">
					<a className="conact-info" href="https://github.com/MarySheng" target="_blank">
						<i className="fab fa-github fa-3x"></i>
						<span>Github</span>
					</a>
                    </div>
                    <div className="gitlab">
					<a className="conact-info" href="https://gitlab.com/MarySheng" target="_blank">
						<i className="fab fa-gitlab fa-3x"></i>
						<span>Gitlab</span>
					</a>
                    </div>
                    <div className="skype">
						<i className="fab fa-skype fa-3x"></i>
						<span>mdiosgalla</span>
                    </div>
                    <div className="gmail">
						<i className="far fa-envelope fa-3x"></i>
						<span>mdiosgalla@gmail.com</span>
                    </div>
                    <div className="messenger">
						<i className="fab fa-facebook-messenger fa-3x"></i>
						<span>Marybear Diolas</span>
                    </div>
                    <div className="instagram">
						<i className="fab fa-instagram fa-3x"></i>
						<span>maryshenglee</span>
                    </div>
   				</div>
   				<div className="col-md-6">
   					<div className="contact-form">
   						<input type="text" name="name" placeholder="Name" />
   						<input type="text" name="email" placeholder="Emal" />
   						<input type="text" name="subject" placeholder="Subject" />
   						<textarea placeholder="Message" rows="10" cols="50"></textarea>
   						<button className="submit">Submit</button>
   					</div>
   					
   				</div>
			</div>
            </div>
                
    );
}

export default Content;
