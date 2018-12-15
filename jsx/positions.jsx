class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state = {selected:this.props.selected || 0}
    
  }
  handleChange(index){
    this.setState({selected:index})
  }
  render(){
    return (
      <div className="d-flex align-items-center flex-column tabsStyle">
        <ul className="inline">
          {this.props.children.map((elem,index)=>{
            let style = index == this.state.selected ? 'selected': '';
            return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
          })}
        </ul>
        <div className="tab">{this.props.children[this.state.selected]}</div>
      </div>
    )
  }
}

class Panel extends React.Component{
  render(){
    return <div className="">{this.props.children}</div>
  }
}

class Position extends React.Component {
  render() {
    return (
      <a className="blueSquare col-sm" style={{padding:"10px"}} href={this.props.linkJob}>
        <div>
          <p className="positionTitle"><strong>{this.props.positionTitle}</strong></p>
          <p className="positionPlace">{this.props.positionPlace}</p>
        </div>
      </a>
    );
  }
}

Position.defaultProps = {positionPlace: "Jakarta, Indonesia"}

class App extends React.Component {
  render(){
    return (
      <div className="margin-intro">
        <Intro titleIntro="Find the Perfect fit" classIntro="d-flex align-items-center flex-column" 
          descIntro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Tabs selected={0}>
          <Panel title="All Position">
            <div className="engineerSec">
              <div className="row">
                <Position positionTitle="Web Developer" linkJob="#webDev"/>
                <Position positionTitle="Software Engineeer Backend (Applied Machine Learning)" linkJob="#appliedML"/>
                <Position positionTitle="Software Engineeer Backend (Video Streaming and Processing)" linkJob="#videoStream"/>
              </div>
              <div className="row">
                <Position positionTitle="Software Engineeer Backend" linkJob="#backend"/>
                <Position positionTitle="Technology Copywriter" linkJob="#techWriter"/>

              </div>
            </div>
            <div className="designSec">
              <div className="row">
                <Position positionTitle="UI/UX" linkJob="#uiux"/>
                <Position positionTitle="Front End Designer / UI Designer" linkJob="#frontend"/>
              </div>
            </div>
            <div className="productSec">
              <div className="row">
                <Position positionTitle="Software QA Engineer" linkJob="#qaEngineer"/>
                <Position positionTitle="Project Manager" linkJob="#projectMan"/>
                <Position positionTitle="Product Owner" linkJob="#productOwner"/>
              </div>
            </div>
          </Panel>

          <Panel title="Engineering">
            <div className="engineerSec">
              <div className="row">
                <Position positionTitle="Web Developer" linkJob="#webDev"/>
                <Position positionTitle="Software Engineeer Backend (Applied Machine Learning)" linkJob="#appliedML"/>
                <Position positionTitle="Software Engineeer Backend (Video Streaming and Processing)" linkJob="#videoStream"/>
              </div>
              <div className="row">
                <Position positionTitle="Software Engineeer Backend" linkJob="#backend"/>
                <Position positionTitle="Technology Copywriter" linkJob="#techWriter"/>
              </div>
            </div>
          </Panel>
          
          <Panel title="Design">
            <div className="designSec">
              <div className="row">
                <Position positionTitle="UI/UX" linkJob="#uiux"/>
                <Position positionTitle="Front End Designer / UI Designer" linkJob="#frontend"/>
              </div>
            </div>
          </Panel>

          <Panel title="Product">
            <div className="productSec">
              <div className="row">
                <Position positionTitle="Software QA Engineer" linkJob="#qaEngineer"/>
                <Position positionTitle="Project Manager" linkJob="#projectMan"/>
                <Position positionTitle="Product Owner" linkJob="#productOwner"/>
              </div>
            </div>
          </Panel>

          <Panel title="Marketing">
            <span className="d-flex align-items-center flex-column">This position is not available for now</span>
          </Panel>
          
          <Panel title="Support">
            <span className="d-flex align-items-center flex-column">This position is not available for now</span>
          </Panel>
        </Tabs>
      </div>
    )
  }
}