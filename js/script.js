ReactDOM.render(React.createElement(
  "div",
  { className: "" },
  React.createElement(
    Header,
    null,
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-3" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("img", { src: "images/logo.png" })
          )
        ),
        React.createElement(
          "div",
          { className: "col-9" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(SingleNav, { linkNav: "#solutions", textNav: "Solutions" }),
            React.createElement(SingleNav, { linkNav: "#product", textNav: "Product" }),
            React.createElement(SingleNav, { linkNav: "#analytic", textNav: "Analytic" }),
            React.createElement(SingleNav, { linkNav: "#caseStudy", textNav: "Case Study" }),
            React.createElement(SingleNav, { linkNav: "#contactUs", textNav: "Contact Us" }),
            React.createElement(SingleNav, { linkNav: "#weAreHiring", textNav: "We Are Hiring" })
          )
        )
      )
    )
  ),
  React.createElement(Preface, null),
  React.createElement(
    "div",
    { className: "" },
    React.createElement(ValuesPlace, null),
    React.createElement(Insight, null),
    React.createElement(Galeri, null),
    React.createElement(App, null),
    React.createElement(Footer, null)
  )
), document.getElementById('content'));