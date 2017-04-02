MyComponents.event = React.createClass({
   deleteClick: function(even) {
    var prolannerRef = new Firebase('https://prolanner.firebaseio.com')
    var projectID = window.location.hash.substring(1);
    var key = this.props.event.key

    var eventRef = prolannerRef.child('events').child(projectID).child(key)
     eventRef = eventRef.remove();
   },
  render(){

    return (
      <div className="col s4">
        <ul className="collection">
          <li className="collection-item avatar teal lighten-1">
            <i className="material-icons circle white teal-text">event</i>
            <span className="title">{this.props.event.eventName}</span>
              <p><b>Location</b>: {this.props.event.location}<br/>
              <b>Date</b>: {this.props.event.eventDate}</p>
              <div className="row">
                   <a className="btn-floating btn-flat waves-effect green" onClick={this.deleteClick}><i className="material-icons delete">delete</i></a>
              </div>

         </li>
        </ul>
      </div>
    );
  }
});
//              <a href={url}><span className="card-title white-text"><h4>{this.props.proj.projectMetaData.projectName}</h4></span></a>
// <a href={url} target="_blank" className="btn-floating btn-medium waves-effect light-green darken-3"><i className="material-icons">add</i></a>

//
// Event List
//
class EventList extends React.Component {
  render() {

    var event = this.props.events.map(function(e, i){
      return <MyComponents.event event={e} key={i} />
    });
    return (
      <div className="row">
        {event}
      </div>
    );
  }
}

MyComponents.EventList = EventList
