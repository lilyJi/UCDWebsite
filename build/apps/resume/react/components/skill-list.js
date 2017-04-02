MyComponents.Skill = React.createClass({

  render: function() {
    var skill = this.props.skill;
    return (
      <li className="card light-blue lighten-3 z-depth-3">
        <div className="card-content">
          <span className="card-title">{skill.name}</span>
        <p><h6>Years: {skill.Years}</h6></p>
        </div>
      </li>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        <ul>
        {skillElements}
        </ul>
        </div>
      </div>
    );
  }
});
