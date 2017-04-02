MyComponents.Task = React.createClass({

  render: function() {
    console.log(this.props.task)
    if (this.props.task.priority == "High") return (
      <div className="card light-green z-depth-3">
        <div className="card-content black-text">
          <span className="card-title collection-item task.priority "><h5> {this.props.task.title}</h5></span>
            <p><h6>
              Deadline: {this.props.task.deadline}
              <br/>Priority: {this.props.task.priority}
              <br/>Type: {this.props.task.type}
          </h6>  </p>
        </div>
      </div>
    );
    else if (this.props.task.priority == "Medium") return (
      <div className="card yellow lighten-1 z-depth-3">
        <div className="card-content  black-text">
          <span className="card-title collection-item task.priority "><h5> {this.props.task.title}</h5></span>
            <p><h6>
              Deadline: {this.props.task.deadline}
              <br/>Priority: {this.props.task.priority}
              <br/>Type: {this.props.task.type}
          </h6>  </p>
        </div>
      </div>
    );
    else if (this.props.task.priority == "Low") return (
      <div className="card hoverable light-green lighten-1">
        <div className="card-content center-align black-text">
          <span className="card-title collection-item task.priority "> {this.props.task.title}</span>
            <p>
              Deadline: {this.props.task.deadline}
              <br/>Priority: {this.props.task.priority}
              <br/>Type: {this.props.task.type}
            </p>
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">

        {taskElements}

        </div>
      </div>
    );
  }
});
