import React from 'react';
import Content from './Content';
import './contact.css';

const Contact = () => {
    return (
      
 <>
	<header id="contact">
		<div className="container">
			<div className="row">
				<div className="col">
				<div className="content">
					<h1>Contact</h1>
				</div>
			</div>
		  </div>	
		</div>
	</header>

    
		<Content />

	<section id="map">
		<div className="container">
			<div className="row">
				<div className="col">
				 <div className="map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.632932893561!2d103.85164702022676!3d1.2840216724318725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19069340a98b%3A0x10c951c77f626879!2sMarina%20Bay%20Sands%20Casino!5e0!3m2!1sen!2sph!4v1592657800214!5m2!1sen!2sph" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
   					</div>
				</div>
			</div>
		</div>
	</section>

</>

    );
}

export default Contact;
