class Photo extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgPath} style={{width: this.props.imgWidth}} className="enlarge"></img> 
      </div>
    );
  }
}

class Galeri extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-column bgGaleri">
        
        <Intro titleIntro="Life at Nodeflux"
          descIntro="Through ups and down, we learned, and developed as both personally and collectively. It’s gonna be endless yet meaningful journey for us"
          classIntro="d-flex align-items-center flex-column introGaleri"
        />
        <div className="row">
          <div className="column">
            <Photo imgPath="images/photo1.jpg" imgWidth="400px"></Photo>
          </div>
          <div className="column">
            <Photo imgPath="images/photo2.jpg" imgWidth="200px"></Photo>
            <Photo imgPath="images/photo3.jpg" imgWidth="200px"></Photo>
          </div>
          <div className="column">
            <Photo imgPath="images/photo4.jpg" imgWidth="200px"></Photo>
            <Photo imgPath="images/photo5.jpg" imgWidth="200px"></Photo>
          </div>
        </div>
        
      </div>
    );
  }
}