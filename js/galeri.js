class Photo extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("img", { src: this.props.imgPath, style: { width: this.props.imgWidth }, className: "enlarge" })
    );
  }
}

class Galeri extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "d-flex align-items-center flex-column bgGaleri" },
      React.createElement(Intro, { titleIntro: "Life at Nodeflux",
        descIntro: "Through ups and down, we learned, and developed as both personally and collectively. It\u2019s gonna be endless yet meaningful journey for us",
        classIntro: "d-flex align-items-center flex-column introGaleri"
      }),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(Photo, { imgPath: "images/photo1.jpg", imgWidth: "400px" })
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(Photo, { imgPath: "images/photo2.jpg", imgWidth: "200px" }),
          React.createElement(Photo, { imgPath: "images/photo3.jpg", imgWidth: "200px" })
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(Photo, { imgPath: "images/photo4.jpg", imgWidth: "200px" }),
          React.createElement(Photo, { imgPath: "images/photo5.jpg", imgWidth: "200px" })
        )
      )
    );
  }
}