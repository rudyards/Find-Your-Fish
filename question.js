'use strict';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div>
            <div id="card-header text-center header-color">Identification Questions </div>
            <br />
            <p id="black text-center"> Does your fish have a skull?</p>

            <button type="button" id="btn btn-primary">Yes</button>
            <button type="button" id="btn btn-primary">No</button>
          </div>
        );
  }
}

ReactDOM.render(<Question />, document.getElementById('app'));