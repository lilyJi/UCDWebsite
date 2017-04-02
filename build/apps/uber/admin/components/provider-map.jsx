const {Map, Marker, CircleMarker, Popup, TileLayer, MapLayer}  = window.ReactLeaflet
class ProviderMap extends React.Component {
  render(){

    const providerElements = this.props.users.map( function(u,i){
      return <Marker position={u.pos} >
        <Popup>
          <span>{u.name}-{u.vendor} <br />
		  </span>
        </Popup>
      </Marker>
    })

    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card">
		  <h4>Provider Map</h4>
			<Map center={[40.701749, -73.922]} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
				{providerElements}

			  </Map>
          </div>
        </div>
      </div>

	)
  }

}

MyComponents.ProviderMap = ProviderMap
