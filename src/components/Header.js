import React from 'react';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {
	Link
  } from "react-router-dom";

function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-light top-nav">
    //     <div className="container">
    //         <a className="navbar-brand" href="index.html">
	// 		<img src={require('../assets/images/logowomen.png')}/>
    //         </a>
    //         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	// 			<span className="fas fa-bars"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarResponsive">
	// 			<ul className="navbar-nav ml-auto">
	// 				<li className="nav-item">
	// 					<a className="nav-link active" href="index.html">Главная</a>
	// 				</li>
	// 				<li className="nav-item">
	// 					<a className="nav-link" href="#">О нас</a>
	// 				</li>
	// 				<li className="nav-item">
	// 					<a className="nav-link" href="#">Проекты</a>
	// 				</li>
					
	// 				<li className="nav-item">
	// 					<a className="nav-link" href="#">Галлерея</a>
	// 				</li>
	// 				<li className="nav-item">
	// 					<a className="nav-link" href="#">Контакты</a>
	// 				</li>
	// 			</ul>
    //         </div>
    //     </div>
	// </nav>
	<>
	<Container>
		<Navbar expand="lg" className="comwomen-navbar">
			<Navbar.Brand href="#home"><img src={require('../assets/images/logowomen.png')}/></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
				<li><Nav.Link><Link to="/">Home</Link></Nav.Link></li>
				<li><Nav.Link><Link to="/about">About</Link></Nav.Link></li>
				<li><Nav.Link href="#home">services</Nav.Link></li>
				<li><Nav.Link href="#link">contact</Nav.Link></li>
				<li>
					<i class="fas fa-sort-down"></i>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					</NavDropdown>
				</li>
				
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>
	</>
  );
}

export default Header;
