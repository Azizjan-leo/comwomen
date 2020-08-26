import React from 'react';

function Footer() {
  return (
    <div className="footer">
    <div className="container bottom_border">
        <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-6 col">
      <h5 className="headin5_amrc col_white_amrc pt2">О нас</h5>
      <p className="mb10">Это первая и самая крупная женская организация в демократическом Кыргызстане, которое охватывает все регионы республики.  Более  20,00 тысяч женщин является членами КЖ КР.</p>
      <ul className="footer-social">
        <li><a className="facebook hb-xs-margin" href="https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD-%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD%D0%B0-101737828085355/" target="_blank"><span className="hb hb-xs spin hb-facebook"><i className="fab fa-facebook-f"></i></span></a></li>
        <li><a className="instagram hb-xs-margin" href="https://www.instagram.com/komitetzhenshin.kr/" target="_blank"><span className="hb hb-xs spin hb-instagram"><i className="fab fa-instagram"></i></span></a></li>
      </ul>
    </div>	
    <div className="col-lg-3 col-md-6 col-sm-6">
      <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
      <ul className="footer_ul_amrc">
        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Default Version</a></li>
        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Boxed Version</a></li>
        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Our Team </a></li>
        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>About Us</a></li>
        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Our Services</a></li>
        <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Get In Touch</a></li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
    </div>	
    <div className="col-lg-3 col-md-6 col-sm-6 ">
      <div className="news-box">
        <h5 className="headin5_amrc col_white_amrc pt2">Newsletter</h5>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        <form action="#">
          <div className="input-group">
            <input className="form-control" placeholder="Search for..." type="text" />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Footer;
