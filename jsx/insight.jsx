var Slider = React.createClass({
  getInitialState: function() {
    return {
      slider: ["Alvin",
        "Billy", "Alfin", "Rizqi Okta"],
      activeIndex: 1,
      left: 0
    }
  },
  prevSlide() {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 400
    })
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left: this.state.left - this.props.sliderWidth * (this.state.slider.length - 1)
      })
    }
  },
  nextSlide() {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth
    })
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0
      })
    }
  },
  clickIndicator(e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.props.sliderWidth - parseInt(e.target.textContent) * this.props.sliderWidth
    })
  },
  render() {
    var style = {
      left: this.state.left,
      width: this.props.sliderWidth,
      height: this.props.sliderHeight
    };
    return (
      <div id="app" className="float-right">
        <div  className="slider-wrapper">
          <ul className="slider">
            {this.state.slider.map(function(item,index) {
              return (
                <div>
                  <li style={style} className={index+1 === this.state.activeIndex ? 'slider-item' : 'hide'}>{item}</li>
                </div>
                )
              },this)
            }
          </ul>
        </div>
        <div className="buttons-wrapper">
          <button className="prev-button" onClick={this.prevSlide}></button>
          <button className="next-button" onClick={this.nextSlide}></button>
        </div>
        <div className="indicators-wrapper">
          <ul className="indicators">
            {this.state.slider.map(function(item,index) {
              return (
                <li className={index+1 === this.state.activeIndex ? 'active-indicator' : ''}onClick={this.clickIndicator}>{index+1}</li>
                )
              },this)
            }
          </ul>
        </div>
      </div>
    );
  }
});

class PersonTought extends React.Component {
  render() {
    return (
      <div className="row containerInsight">
        <div className="col-sm">
          <div className="personTought">
            <blockquote className="blockquote align-middle">
              <p className="mb-0">"{this.props.thought}"</p>
              <footer className="blockquote-footer"><strong>{this.props.nama}</strong>, {this.props.profesi}</footer>
            </blockquote>
          </div>
        </div>
        <div className="col-sm">
          <div className="containerImg">
            <img src={this.props.personImg} width="70%" className="float-right personImg"></img>
            <div className="collegeInfo">
              <p>{this.props.degreeTitle}, {this.props.programName}</p>
              <h5>{this.props.collegeName}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Insight extends React.Component {
  render() {
    return (
      <div className="container">
        <h5>Hear from Nodeflux</h5>
        <PersonTought thought="I want to transform how people experience 'Halo' in their living rooms and on their PCs. We will never do anything that doesn't move universe forward."
            nama="Abdillah Israqi Zihni" profesi="AI Engineer" personImg="images/person1.png"
            degreeTitle="Master of Science" programName="Artificial Intellegence"
            collegeName="The University of Edinburg"/>
      </div>
    );
  }
}

class SliderExp extends React.Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" dataRide="carousel">
          <ol className="carousel-indicators">
            <li dataTarget="#carouselExampleIndicators" dataSlideTo="0" className="active"></li>
            <li dataTarget="#carouselExampleIndicators" dataSlideTo="1"></li>
            <li dataTarget="#carouselExampleIndicators" dataSlideTo="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="images/photo1.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/photo2.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="images/photo3.jpg" alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" dataSlide="prev">
            <span className="carousel-control-prev-icon" ariaHidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" dataSlide="next">
            <span className="carousel-control-next-icon" ariaHidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
