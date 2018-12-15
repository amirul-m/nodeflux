class Value extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "col-sm", style: { paddingBottom: "40px" } },
      React.createElement("img", { src: this.props.imageValue, width: "40%", style: { marginBottom: "30px" } }),
      React.createElement(
        "h5",
        { style: { marginBottom: "20px" } },
        this.props.titleValue
      ),
      React.createElement(
        "p",
        { style: { color: "grey" } },
        this.props.descValue
      )
    );
  }
}

class Values extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(Value, { imageValue: "images/value1.png",
        titleValue: "Openness",
        descValue: "Straight to the point, is what we expect on every discussion. No need to insult others as long you maintain the context and work-related matter."
      }),
      React.createElement(Value, { imageValue: "images/value2.png",
        titleValue: "Dedication",
        descValue: "Put all heart and effort on nodeflux. This company started by passion to create values and we still keeping it that way."
      }),
      React.createElement(Value, { imageValue: "images/value3.png",
        titleValue: "Serve",
        descValue: "All of our work eventually will be used in the market. Better to understand them well by serve them well"
      }),
      React.createElement("div", { className: "w-100" }),
      React.createElement(Value, { imageValue: "images/value4.png",
        titleValue: "Collaboration",
        descValue: "We believe in the power of teamwork. A common practices in our office to collaborate, and surely we\u2019ll expect a talent who could adjust with it"
      }),
      React.createElement(Value, { imageValue: "images/value5.png",
        titleValue: "Learn",
        descValue: "As the first Indonesian company to start on this industry, constant learning will be a vital habit for us. Learn with us!"
      }),
      React.createElement(Value, { imageValue: "images/value6.png",
        titleValue: "Genuine",
        descValue: "Stay real! Express yourself as you really are. Diversity brings us joy in working together."
      })
    );
  }
}

class ValuesPlace extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "value container" },
      React.createElement(
        "div",
        { className: "margin-intro" },
        React.createElement(
          "h3",
          { className: "center style1" },
          React.createElement(
            "strong",
            null,
            "This is Nodeflux"
          )
        ),
        React.createElement(
          "p",
          { className: "center style1" },
          "We believe our culture plays a huge role in determining our performance itself. Fit the culture and enjoy the rest!"
        )
      ),
      React.createElement(Values, null)
    );
  }
}