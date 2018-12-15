class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected || 0 };
  }
  handleChange(index) {
    this.setState({ selected: index });
  }
  render() {
    return React.createElement(
      "div",
      { className: "d-flex align-items-center flex-column tabsStyle" },
      React.createElement(
        "ul",
        { className: "inline" },
        this.props.children.map((elem, index) => {
          let style = index == this.state.selected ? 'selected' : '';
          return React.createElement(
            "li",
            { className: style, key: index, onClick: this.handleChange.bind(this, index) },
            elem.props.title
          );
        })
      ),
      React.createElement(
        "div",
        { className: "tab" },
        this.props.children[this.state.selected]
      )
    );
  }
}

class Panel extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "" },
      this.props.children
    );
  }
}

class Position extends React.Component {
  render() {
    return React.createElement(
      "a",
      { className: "blueSquare col-sm", style: { padding: "10px" }, href: this.props.linkJob },
      React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { className: "positionTitle" },
          React.createElement(
            "strong",
            null,
            this.props.positionTitle
          )
        ),
        React.createElement(
          "p",
          { className: "positionPlace" },
          this.props.positionPlace
        )
      )
    );
  }
}

Position.defaultProps = { positionPlace: "Jakarta, Indonesia" };

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "margin-intro" },
      React.createElement(Intro, { titleIntro: "Find the Perfect fit", classIntro: "d-flex align-items-center flex-column",
        descIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }),
      React.createElement(
        Tabs,
        { selected: 0 },
        React.createElement(
          Panel,
          { title: "All Position" },
          React.createElement(
            "div",
            { className: "engineerSec" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "Web Developer", linkJob: "#webDev" }),
              React.createElement(Position, { positionTitle: "Software Engineeer Backend (Applied Machine Learning)", linkJob: "#appliedML" }),
              React.createElement(Position, { positionTitle: "Software Engineeer Backend (Video Streaming and Processing)", linkJob: "#videoStream" })
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "Software Engineeer Backend", linkJob: "#backend" }),
              React.createElement(Position, { positionTitle: "Technology Copywriter", linkJob: "#techWriter" })
            )
          ),
          React.createElement(
            "div",
            { className: "designSec" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "UI/UX", linkJob: "#uiux" }),
              React.createElement(Position, { positionTitle: "Front End Designer / UI Designer", linkJob: "#frontend" })
            )
          ),
          React.createElement(
            "div",
            { className: "productSec" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "Software QA Engineer", linkJob: "#qaEngineer" }),
              React.createElement(Position, { positionTitle: "Project Manager", linkJob: "#projectMan" }),
              React.createElement(Position, { positionTitle: "Product Owner", linkJob: "#productOwner" })
            )
          )
        ),
        React.createElement(
          Panel,
          { title: "Engineering" },
          React.createElement(
            "div",
            { className: "engineerSec" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "Web Developer", linkJob: "#webDev" }),
              React.createElement(Position, { positionTitle: "Software Engineeer Backend (Applied Machine Learning)", linkJob: "#appliedML" }),
              React.createElement(Position, { positionTitle: "Software Engineeer Backend (Video Streaming and Processing)", linkJob: "#videoStream" })
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "Software Engineeer Backend", linkJob: "#backend" }),
              React.createElement(Position, { positionTitle: "Technology Copywriter", linkJob: "#techWriter" })
            )
          )
        ),
        React.createElement(
          Panel,
          { title: "Design" },
          React.createElement(
            "div",
            { className: "designSec" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "UI/UX", linkJob: "#uiux" }),
              React.createElement(Position, { positionTitle: "Front End Designer / UI Designer", linkJob: "#frontend" })
            )
          )
        ),
        React.createElement(
          Panel,
          { title: "Product" },
          React.createElement(
            "div",
            { className: "productSec" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(Position, { positionTitle: "Software QA Engineer", linkJob: "#qaEngineer" }),
              React.createElement(Position, { positionTitle: "Project Manager", linkJob: "#projectMan" }),
              React.createElement(Position, { positionTitle: "Product Owner", linkJob: "#productOwner" })
            )
          )
        ),
        React.createElement(
          Panel,
          { title: "Marketing" },
          React.createElement(
            "span",
            { className: "d-flex align-items-center flex-column" },
            "This position is not available for now"
          )
        ),
        React.createElement(
          Panel,
          { title: "Support" },
          React.createElement(
            "span",
            { className: "d-flex align-items-center flex-column" },
            "This position is not available for now"
          )
        )
      )
    );
  }
}