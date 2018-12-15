ReactDOM.render(
  <div className="">
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-3">

            <a href="#">
              <img src="images/logo.png"/>
            </a>
          </div>
          <div className="col-9">
            <div className="row">
              <SingleNav linkNav="#solutions" textNav="Solutions"/>
              <SingleNav linkNav="#product" textNav="Product"/>
              <SingleNav linkNav="#analytic" textNav="Analytic"/>
              <SingleNav linkNav="#caseStudy" textNav="Case Study"/>
              <SingleNav linkNav="#contactUs" textNav="Contact Us"/>
              <SingleNav linkNav="#weAreHiring" textNav="We Are Hiring"/>
            </div>
          </div>
        </div>
        {/* 
        <ul id="ulNav">
          <li className="float-left"><h5><a href="#home">nodeflux</a></h5></li>
          <li><a href="#weAreHiring" className="" id="weAreHiring">We Are Hiring</a></li>
          <li><a href="#contactUs">Contact Us</a></li>
          <li><a href="#caseStudy">Case Study</a></li>
          <li><a href="#analytic">Analytic</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#solutions">Solutions</a></li>        
        </ul>
         */}

      </div>
    </Header>
    <Preface/>
    <div className="">
      <ValuesPlace/>
      <Insight/>
      <Galeri/>
      <App/>
      <Footer/>
    </div>
  </div>,
  document.getElementById('content')
)