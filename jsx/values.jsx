class Value extends React.Component {
  render() {
    return (
      <div className="col-sm" style={{paddingBottom:"40px"}}>
        <img src={this.props.imageValue} width="40%" style={{marginBottom:"30px"}}></img>
        <h5 style={{marginBottom:"20px"}}>{this.props.titleValue}</h5>
        <p style={{color:"grey"}}>{this.props.descValue}</p>
      </div>
    );
  }
}

class Values extends React.Component {
  render() {
    return (
      <div className="row">
        <Value imageValue="images/value1.png"
          titleValue = "Openness"
          descValue = "Straight to the point, is what we expect on every discussion. No need to insult others as long you maintain the context and work-related matter."
        />
        <Value imageValue="images/value2.png"
          titleValue = "Dedication"
          descValue = "Put all heart and effort on nodeflux. This company started by passion to create values and we still keeping it that way."
        />
        <Value imageValue="images/value3.png"
          titleValue = "Serve"
          descValue = "All of our work eventually will be used in the market. Better to understand them well by serve them well"
        />
        <div className="w-100"></div>
        <Value imageValue="images/value4.png"
          titleValue = "Collaboration"
          descValue = "We believe in the power of teamwork. A common practices in our office to collaborate, and surely we’ll expect a talent who could adjust with it"
        />
        <Value imageValue="images/value5.png"
          titleValue = "Learn"
          descValue = "As the first Indonesian company to start on this industry, constant learning will be a vital habit for us. Learn with us!"
        />
        <Value imageValue="images/value6.png"
          titleValue = "Genuine"
          descValue = "Stay real! Express yourself as you really are. Diversity brings us joy in working together."
        />
      </div>
    );
  }
}

class ValuesPlace extends React.Component {
  render() {
    return (
      <div className="value container">
        <div className="margin-intro">
          <h3 className="center style1"><strong>This is Nodeflux</strong></h3>
          <p className="center style1">We believe our culture plays a huge role in determining our performance itself. Fit the culture and enjoy the rest!</p>
        </div>
        <Values/>
      </div>
    );
  }
}