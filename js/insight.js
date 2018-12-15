var Slider = React.createClass({
  displayName: "Slider",

  getInitialState: function () {
    return {
      slider: ["Alvin", "Billy", "Alfin", "Rizqi Okta"],
      activeIndex: 1,
      left: 0
    };
  },
  prevSlide() {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 400
    });
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left: this.state.left - this.props.sliderWidth * (this.state.slider.length - 1)
      });
    }
  },
  nextSlide() {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth
    });
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0
      });
    }
  },
  clickIndicator(e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.props.sliderWidth - parseInt(e.target.textContent) * this.props.sliderWidth
    });
  },
  render() {
    var style = {
      left: this.state.left,
      width: this.props.sliderWidth,
      height: this.props.sliderHeight
    };
    return React.createElement(
      "div",
      { id: "app", className: "float-right" },
      React.createElement(
        "div",
        { className: "slider-wrapper" },
        React.createElement(
          "ul",
          { className: "slider" },
          this.state.slider.map(function (item, index) {
            return React.createElement(
              "div",
              null,
              React.createElement(
                "li",
                { style: style, className: index + 1 === this.state.activeIndex ? 'slider-item' : 'hide' },
                item
              )
            );
          }, this)
        )
      ),
      React.createElement(
        "div",
        { className: "buttons-wrapper" },
        React.createElement("button", { className: "prev-button", onClick: this.prevSlide }),
        React.createElement("button", { className: "next-button", onClick: this.nextSlide })
      ),
      React.createElement(
        "div",
        { className: "indicators-wrapper" },
        React.createElement(
          "ul",
          { className: "indicators" },
          this.state.slider.map(function (item, index) {
            return React.createElement(
              "li",
              { className: index + 1 === this.state.activeIndex ? 'active-indicator' : '', onClick: this.clickIndicator },
              index + 1
            );
          }, this)
        )
      )
    );
  }
});

class PersonTought extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "row containerInsight" },
      React.createElement(
        "div",
        { className: "col-sm" },
        React.createElement(
          "div",
          { className: "personTought" },
          React.createElement(
            "blockquote",
            { className: "blockquote align-middle" },
            React.createElement(
              "p",
              { className: "mb-0" },
              "\"",
              this.props.thought,
              "\""
            ),
            React.createElement(
              "footer",
              { className: "blockquote-footer" },
              React.createElement(
                "strong",
                null,
                this.props.nama
              ),
              ", ",
              this.props.profesi
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col-sm" },
        React.createElement(
          "div",
          { className: "containerImg" },
          React.createElement("img", { src: this.props.personImg, width: "70%", className: "float-right personImg" }),
          React.createElement(
            "div",
            { className: "collegeInfo" },
            React.createElement(
              "p",
              null,
              this.props.degreeTitle,
              ", ",
              this.props.programName
            ),
            React.createElement(
              "h5",
              null,
              this.props.collegeName
            )
          )
        )
      )
    );
  }
}

class Insight extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h5",
        null,
        "Hear from Nodeflux"
      ),
      React.createElement(PersonTought, { thought: "I want to transform how people experience 'Halo' in their living rooms and on their PCs. We will never do anything that doesn't move universe forward.",
        nama: "Abdillah Israqi Zihni", profesi: "AI Engineer", personImg: "images/person1.png",
        degreeTitle: "Master of Science", programName: "Artificial Intellegence",
        collegeName: "The University of Edinburg" })
    );
  }
}

class SliderExp extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { id: "carouselExampleIndicators", className: "carousel slide", dataRide: "carousel" },
        React.createElement(
          "ol",
          { className: "carousel-indicators" },
          React.createElement("li", { dataTarget: "#carouselExampleIndicators", dataSlideTo: "0", className: "active" }),
          React.createElement("li", { dataTarget: "#carouselExampleIndicators", dataSlideTo: "1" }),
          React.createElement("li", { dataTarget: "#carouselExampleIndicators", dataSlideTo: "2" })
        ),
        React.createElement(
          "div",
          { className: "carousel-inner" },
          React.createElement(
            "div",
            { className: "carousel-item active" },
            React.createElement("img", { className: "d-block w-100", src: "images/photo1.jpg", alt: "First slide" })
          ),
          React.createElement(
            "div",
            { className: "carousel-item" },
            React.createElement("img", { className: "d-block w-100", src: "images/photo2.jpg", alt: "Second slide" })
          ),
          React.createElement(
            "div",
            { className: "carousel-item" },
            React.createElement("img", { className: "d-block w-100", src: "images/photo3.jpg", alt: "Third slide" })
          )
        ),
        React.createElement(
          "a",
          { className: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", dataSlide: "prev" },
          React.createElement("span", { className: "carousel-control-prev-icon", ariaHidden: "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Previous"
          )
        ),
        React.createElement(
          "a",
          { className: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", dataSlide: "next" },
          React.createElement("span", { className: "carousel-control-next-icon", ariaHidden: "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Next"
          )
        )
      )
    );
  }
}