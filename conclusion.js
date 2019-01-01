'use strict';

class Conclusion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <div>
          <div id="card-header text-center header-color">Identified!</div>
          <p id="black"> We think this is your fish: </p>
          <img src="https://cdn.shopify.com/s/files/1/2549/2660/products/53cb029b057a2dc4c753969a3ce83ff4.jpg?v=1510851759" width="232" height="300" /> <br />
          <p id="black"><i> Carassius Auratus </i></p>


          <button type="button" id="btn btn-primary">Identify Another Fish</button>
          </div>
        );
  }
}

ReactDOM.render(<Conclusion />, document.getElementById('app'));