import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import image from './reminder.png';
import {addaction,deleteaction,clearaction} from '../actions/actions';
 
class App extends React.Component{
  state={
    text:'',
    date:new Date()
  }

  renderinfo=()=>{
    const allreminder=this.props.reminderinfo;

    return(
      <ul className="list-group">
        {
          allreminder.map(elem=>{
            return(
              <li key={elem.id} className="list-group-item">
                <div>{elem.text}</div>
                <div>{moment(new Date(elem.date)).fromNow()}</div>
                <div className="closeIcon btn btn-danger" onClick={
                  (e)=>{e.preventDefault();
                  this.props.deleteaction(elem.id)}
                  }>X</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    let textinput='';

    return (
      <section className="App text-center">
        <div className="conatiner">
          <img src={image} alt=""/>
          <h1 className="reminder-title">What Shoud i Do ? </h1>
          <form>
            <input type="text" ref={( v ) => textinput = v} className="form-control" placeholder="What Should i do...?"
                  value={this.state.text}
                  onChange={(e)=>this.setState({text:e.target.value})}/>
            <DatePicker 
              className="form-control"
              value={this.state.date}
              placeholderText="Enter Date"
              selected={this.state.date}
              onChange={(datetime)=>{this.setState({date:datetime})}}              
              showTimeSelect
              timeFormat='HH:mm'
              dateFormat='MMMM d, yyyy h:mm aa'
              timeCaption='time'
            />
            <button className="btn btn-primary btn-block" onClick={(e)=>{
              e.preventDefault();
              console.log(textinput.value);
              if(textinput.value!==''){ 
                this.setState({
                  text:'',
                  date:''
                });
                this.props.addaction(this.state.text,this.state.date); 
              }
              else{
                return false;}
              }}>
                Add Reminder
            </button>
            {this.renderinfo()}
            <button className="btn btn-danger btn-block clearReminder" onClick={(e)=>{
              e.preventDefault();
              this.props.clearaction();
            }
            }>Clear Reminder</button>
          </form>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state){
  return{
    reminderinfo:state
  }
}

export default connect(mapStateToProps,{addaction,deleteaction,clearaction})(App);