'use strict';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div>
              <div id="card-header text-center header-color">Welcome!</div>
              <br /><p1 id="black">This is Find Your Fish, the online fish identification guide.</p1> <br />


              <button type="button" id="btn btn-primary">Identify A Fish</button>
              <button type="button" id="btn btn-primary">About</button>
          </div>
        );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));