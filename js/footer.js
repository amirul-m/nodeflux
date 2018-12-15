class FooterColumn extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "col-sm" },
      React.createElement(
        "h6",
        null,
        React.createElement(
          "strong",
          null,
          this.props.titleFooter
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: this.props.link1 },
          this.props.linkText1
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: this.props.link2 },
          this.props.linkText2
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: this.props.link3 },
          this.props.linkText3
        )
      )
    );
  }
}

class Footer extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "footer" },
      React.createElement(
        "div",
        { className: "", id: "cantFit" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md" },
            React.createElement(Intro, { titleIntro: "Don't see what you looking for?",
              descIntro: "Send us an email and tell us how you'd make an impact. We're alwasy looking for talented people to join the team."
            }),
            React.createElement(
              "a",
              { href: "mailto:jobs@nodeflux.io", className: "emailStyle" },
              "Contact Us"
            )
          ),
          React.createElement(
            "div",
            { className: "col-md" },
            React.createElement("img", { src: "images/photo1.jpg", width: "100%" })
          )
        )
      ),
      React.createElement(
        "div",
        { id: "footer", className: "container" },
        React.createElement(
          "div",
          { className: "" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-4" },
              React.createElement("img", { src: "images/logo.png" })
            ),
            React.createElement(
              "div",
              { className: "col-8" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(FooterColumn, { titleFooter: "Solutions",
                  link1: "#secNdef", linkText1: "Security & Defense",
                  link2: "#smartCity", linkText2: "Smart City",
                  link3: "#retail", linkText3: "Retail" }),
                React.createElement(FooterColumn, { titleFooter: "Product",
                  link1: "#enterprise", linkText1: "Enterprise",
                  link2: "#iris", linkText2: "IRIS" }),
                React.createElement(FooterColumn, { titleFooter: "Company",
                  link1: "#about", linkText1: "About",
                  link2: "#career", linkText2: "Career",
                  link3: "#blog", linkText3: "Blog's" }),
                React.createElement(FooterColumn, { titleFooter: "Get In Touch",
                  link1: "telp:02170000", linkText1: "02170000",
                  link2: "mailto:hi@nodeflux.io", linkText2: "hi@nodeflux.io" })
              )
            )
          )
        )
      )
    );
  }
}