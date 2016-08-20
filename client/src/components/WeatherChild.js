var React=require('react');
var obj={};
var WeatherChild=React.createClass({
 componentDidMount:function()
 {
   console.log("childcomponent")
   console.log(this.props.data1);
 obj.lat=this.props.data1.coord.lat;
 console.log("lat"+obj.lat);
 obj.lon=this.props.data1.coord.lon;
 obj.humidity=this.props.data1.main.humidity;
 obj.pressure=this.props.data1.main.pressure;
 obj.sunset=this.props.data1.sys.sunset;
 obj.sunrise=this.props.data1.sys.sunrise;
 obj.cloud=this.props.data1.weather[0].description;
 console.log(obj.cloud);
 obj.deg=this.props.data1.wind.deg;
 obj.speed=this.props.data1.wind.speed;
 console.log(obj);
 $.ajax({
   url:'http://localhost:8080/data/',
   dataType:'json',
   async:false,
   type:'POST',
   data:obj,
   success:function(data)
   {

     console.log("DataWithLocation1");
     console.log(data);
   }.bind(this),
   error: function(xhr, status, err) {
         console.log("hello bob");
      console.error(err.toString());
    }.bind(this),

 });
},
 render:function()
 {
   return(<div>
     <table className="table table-bordered table-inverse" >
     <tr>
     <th>LATITUDE :</th><br/>
     <td>{this.props.data1.coord.lat}</td>
     </tr>
     <br/>
     <tr>
     <th>LONGITUDE :</th><br/>
     <td>{this.props.data1.coord.lon}</td>
     </tr>
     <br/>
     <tr>
     <th>HUMIDITY :</th><br/>
     <td>{this.props.data1.main.humidity}</td>
     </tr>
     <br/>
     <tr>
     <th>PRESSURE :</th><br/>
     <td>{this.props.data1.main.pressure}</td>
     </tr>
     <br/>
     <tr>
     <th>SUNSET :</th><br/>
     <td>{this.props.data1.sys.sunset}</td>
     </tr>
     <br/>
     <tr>
     <th>SUNSRISE :</th><br/>
     <td>{this.props.data1.sys.sunrise}</td>
     </tr>
     <br/>
     <tr>
     <th>CLOUD :</th><br/>
     <td>{this.props.data1.weather[0].description}</td>
     </tr>
     <br/>
     <tr>
     <th>WIND DEGREE :</th><br/>
     <td>{this.props.data1.wind.deg}</td>
     </tr>
     <br/>
     <tr>
     <th>WIND SPEED :</th><br/>
     <td>{this.props.data1.wind.speed}</td>
     </tr>
     </table>
   </div> )
 }
});
module.exports=WeatherChild
