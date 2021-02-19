import React, {Component} from 'react'
import Navigaion from './navigation';
import Logo from './logo';
import ImageLinkform from './imagelinkform';
import Rank from './rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Facerecognition from './facerecognition';
import Signin from './signin';
import Register from './register'
import './App.css';
const app = new Clarifai.App({
  apiKey:'4f0f2b01ec1a425492a00936fb29366c'
});

const Particleoption = {
  particles:{
    number:{
      value:100,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
 }

class App extends Component{
  constructor(){
    super()
      this.state = {
       input:'',
       ImageUrl :'',
       box:{},
       route:'signin'
       
    }
  }
  Onroutechnage = (route) =>{
    this.setState({route:route})
  }
  calculateFacelocation = (data) =>{
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputchange')
    const width = Number(image.width);
    const height = Number(image.height)
     
    return {
      leftCol:ClarifaiFace.left_col * width,
      topRow:ClarifaiFace.top_row * height,
      rightCol: width - (ClarifaiFace.right_col * width),
      bottomRow : height - ClarifaiFace.bottom_row * height
      
    }

  }
  Oninputchange = (event) =>{
    this.setState({input:event.target.value})
  }
  displayFacebox = (box) =>{
     
    this.setState({box:box})
  }
  OnButtonclick = () => {
    this.setState({ImageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(response =>this.displayFacebox(this.calculateFacelocation(response)))
    .catch(err => console.log(err))

  }


 
  render(){
    return (
      <div className="App">
      <Particles 
      className = "particles" 
                params={Particleoption} />

    

    <Navigaion  Onroutechnage = {this.Onroutechnage} />
    {this.state.route === 'home'
    ?<div>
        <Logo/>
        <Rank/>
        <ImageLinkform Oninputchange = {this.Oninputchange}OnButtonclick={this.OnButtonclick}/>
        <Facerecognition box = {this.state.box} ImageUrl = {this.state.ImageUrl}/>
      </div>
      :(this.state.route === 'signin'
        ?<Signin Onroutechnage = {this.Onroutechnage}/>
        :<Register Onroutechnage = {this.Onroutechnage}/>
        )
    }
    </div>
   );

  }
  
}

export default App;
