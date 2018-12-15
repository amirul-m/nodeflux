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
      { id: "app", className: "mx-auto" },
      React.createElement(
        "div",
        { className: "slider-wrapper" },
        React.createElement(
          "ul",
          { className: "slider" },
          this.state.slider.map(function (item, index) {
            return React.createElement(
              "li",
              { style: style, className: index + 1 === this.state.activeIndex ? 'slider-item' : 'hide' },
              item
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