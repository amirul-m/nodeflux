class Intro extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: this.props.classIntro },
      React.createElement(
        "h2",
        null,
        this.props.titleIntro
      ),
      React.createElement(
        "p",
        null,
        this.props.descIntro
      )
    );
  }
}

class IntroDisplay extends React.Component {
  render() {
    return React.createElement("img", { src: this.props.srcIntroDisp, className: "imgIntroDisp d-flex align-items-center flex-column", width: "100%", id: "imgDisplay" });
  }
}

class Preface extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "preface" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(Intro, { titleIntro: "Be you at Nodeflux",
            descIntro: "In Nodeflux, we\u2019ll expecting you to develop yourself everyday with challenging task and high expectation in our team. But don\u2019t worry, call us nothing but family because we\u2019ll be there whenever you need us!",
            classIntro: "margin-intro col-md-6"
          }),
          React.createElement(
            "div",
            { className: "intro" },
            React.createElement(IntroDisplay, { srcIntroDisp: "images/introdisplay.jpg" }),
            React.createElement(
              "div",
              { className: "squarePreface" },
              React.createElement(
                "h3",
                null,
                "Challenging"
              ),
              React.createElement(
                "p",
                null,
                "Yes it is. As the pioneer of IVA (Intelligent Video Analytic) company in Indonesia, you could expect nothing but the challenge itself. Since research is our main focus, you\u2019ll be empowered to create a new value endlessly."
              )
            )
          )
        )
      ),
      React.createElement("div", { id: "clipHeader" })
    );
  }
}