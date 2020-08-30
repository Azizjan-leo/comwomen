import React from 'react';



function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light top-nav">
        <div className="container">
            <a className="navbar-brand" href="index.html">
			<img src={require('../assets/images/logowomen.png')}/>
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link active" href="index.html">Главная</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">О нас</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Проекты</a>
					</li>
					
					<li className="nav-item">
						<a className="nav-link" href="#">Галлерея</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Контакты</a>
					</li>
				</ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;
