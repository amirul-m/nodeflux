class HeaderBg extends React.Component {
  render() {
    return React.createElement('header', null);
  }
}

class Header extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { height: undefined };
    this._containerDOM = null;
    this._scrollPosition = 0;
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (this.props.scrollAction >= scrollTop) {
      const step = this._scrollPosition - scrollTop;
      const actualHeight = this._containerDOM.offsetHeight;
      const height = actualHeight + step;
      this.setState({ height });
      this._scrollPosition = scrollTop;
    }
  }

  render() {
    return React.createElement(
      'header',
      {
        className: 'heroHeader',
        ref: n => this._containerDOM = n,
        style: { height: this.state.height } },
      React.createElement(
        'div',
        { className: 'heroHeader-content' },
        this.props.children
      )
    );
  }
}

Header.propTypes = {
  scrollAction: React.PropTypes.string
};

Header.defaultProps = {
  scrollAction: 250
};

class SingleNav extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'col-sm singleNav' },
      React.createElement(
        'p',
        null,
        React.createElement(
          'a',
          { href: this.props.linkNav },
          this.props.textNav
        )
      )
    );
  }
}