class FooterColumn extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <h6><strong>{this.props.titleFooter}</strong></h6>
        <p><a href={this.props.link1}>{this.props.linkText1}</a></p>
        <p><a href={this.props.link2}>{this.props.linkText2}</a></p>
        <p><a href={this.props.link3}>{this.props.linkText3}</a></p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="" id="cantFit">
          <div className="row">
            <div className="col-md">
              <Intro titleIntro="Don't see what you looking for?"
                descIntro="Send us an email and tell us how you'd make an impact. We're alwasy looking for talented people to join the team."
              />
              <a href="mailto:jobs@nodeflux.io" className="emailStyle">Contact us 
              </a>
            </div>
            <div className="col-md">
              <img src="images/photo1.jpg" width="100%"></img>
            </div>
          </div>
        </div>

        <div id="footer" className="container">
          <div className="">
            <div className="row">
              <div className="col-4">
                <img src="images/logo.png"/>
              </div>
              <div className="col-8">
                <div className="row">
                  <FooterColumn titleFooter="Solutions"
                    link1="#secNdef" linkText1="Security & Defense"
                    link2="#smartCity" linkText2="Smart City"
                    link3="#retail" linkText3="Retail"/>
                  <FooterColumn titleFooter="Product"
                    link1="#enterprise" linkText1="Enterprise"
                    link2="#iris" linkText2="IRIS"/>
                  <FooterColumn titleFooter="Company"
                    link1="#about" linkText1="About"
                    link2="#career" linkText2="Career"
                    link3="#blog" linkText3="Blog's"/>
                  <FooterColumn titleFooter="Get In Touch"
                    link1="telp:02170000" linkText1="02170000"
                    link2="mailto:hi@nodeflux.io" linkText2="hi@nodeflux.io"/>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
