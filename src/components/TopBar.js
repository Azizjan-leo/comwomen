import React from 'react';

function TopBar() {
  return (
    <div className="top-bar">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="social-media">
						<ul className='social-links'>
							<li><a href="https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD%D0%B0-101737828085355/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
							{/* <li><a href="#"><i className="fab fa-twitter"></i></a></li>
							<li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
							<li><a href="#"><i className="fab fa-linkedin-in"></i></a></li> */}
							<li><a href="https://www.instagram.com/komitetzhenshin.kr/" target="_blank"><i className="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="contact-details">
						<ul>
							<li><i className="fas fa-phone fa-rotate-90"></i> <a href="tel:+996777737202">+996 777 737 202</a> </li>
							<li><i className="fas fa-map-marker-alt"></i> <a  target="_blank" href="https://go.2gis.com/4vvgv">Бишкек, ул. Тыныстанова 249</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default TopBar;
