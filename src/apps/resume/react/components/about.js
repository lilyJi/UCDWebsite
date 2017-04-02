MyComponents.About = React.createClass({

  render: function() {
      return (
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s3">
                <div class="row about-me-face">
                    <img src="img/face.jpg" class="img-circle" alt="Cinque Terre" width="150" height="150"/>
                </div>

              </div>
              <div className="col s5">
                <ul>
                  <li><b>Name:</b> Lili Ji</li>
                  <li><b>Major:</b> Computer Science</li>
                  <li><b>Birth Place:</b> China </li>
                  <li><b>Github Link:</b> <a href="https://github.com/LilyJi">www.github.com/LilyJi</a></li>
                </ul>
              </div>
              <div className="col s2">

              </div>
            </div>
          </div>
        </div>
    );
  }

});
