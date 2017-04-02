class DeleteProj extends React.Component {
  render() {
    var projectID = window.location.hash.substring(1);
    var url = "delProj.html#"+projectID
    return (
      <div className="black-text center">
        <h5>Delete Event   <a href={url} target="_blank" className="btn-floating btn-medium waves-effect waves-light light-green darken-3"><i className="material-icons">delete</i></a></h5>
      </div>
    );
  }
}
MyComponents.DeleteProj = DeleteProj
