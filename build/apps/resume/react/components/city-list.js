MyComponents.City = React.createClass({

  render: function() {
    //<img src= {this.props.city.currently.icon} width=40px; height=40px></img>
    //div style="height:40px">
                  //<p style="font-size:15px">{this.props.city.daily.summary}</p>
                //</div>
    this.props.city.currently.icon = "img/" + this.props.city.currently.icon + ".png"
    return (
      <div className="card">
        <div className="card-content">
        <span className="card-title"><img src= {this.props.city.currently.icon} height="80" width="80"/><h4>{this.props.city.name.toUpperCase()} </h4></span>

          <div className="col s6">
            <div className="card light-blue lighten-3 z-depth-3 ">
              <div className="card-content black-text">
                <h5>Daily Summary</h5>
                  <p><h6>{this.props.city.daily.summary}</h6></p>
                <h5>Current information</h5>
                <ul>
                  <li><h6>Humidity: {this.props.city.currently.humidity}%</h6></li>
                  <li><h6>Temperature: {this.props.city.currently.temperature} F</h6></li>
                  <li><h6>Conditions: {this.props.city.currently.summary}</h6></li>
                  <li><h6>Visibility: {this.props.city.currently.visibility}</h6></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">

        {cityElements}

        </div>
      </div>
    );
  }
});
