class Intro extends React.Component {
  render() {
    return (
      <div className={this.props.classIntro}>
        <h2>{this.props.titleIntro}</h2>
        <p>{this.props.descIntro}</p>
      </div>
    );
  }
}

class IntroDisplay extends React.Component {
  render() {
    return (
      
      <img src={this.props.srcIntroDisp} className="imgIntroDisp d-flex align-items-center flex-column" width="100%" id="imgDisplay"></img>

    );
  }
}

class Preface extends React.Component {
  render() {
    return (
      <div>
        <div className="preface">
          <div className="container">
            <Intro titleIntro="Be you at Nodeflux"
              descIntro="In Nodeflux, we’ll expecting you to develop yourself everyday with challenging task and high expectation in our team. But don’t worry, call us nothing but family because we’ll be there whenever you need us!"
              classIntro = "margin-intro col-md-6"
            />
            <div className="intro">
              <IntroDisplay srcIntroDisp="images/introdisplay.jpg"/>
              <div className="squarePreface">
                <h3>Challenging</h3>
                <p>Yes it is. As the pioneer of IVA (Intelligent Video Analytic) company in Indonesia, you could expect nothing but the challenge itself. Since research is our main focus, you’ll be empowered to create a new value endlessly.</p>
                <a>Browse All Jobs</a>
                
              </div>
            </div>
          </div>
          </div>
          
          <div id="clipHeader">
        </div>
      </div>
    );
  }
}