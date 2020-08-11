import {add,remove,clear} from '../actions/actionstypes';
import {bake_cookie,read_cookie} from 'sfcookies';

const reducer=(state=[],action)=>{
    let reminder=null;

   state= read_cookie('keyreminder');

    if(action.type === add){
        reminder = [...state , {id: Math.random() , text: action.data , date:action.time }];
        bake_cookie("keyreminder",reminder);
        return reminder;
    }
    else if(action.type===remove){
        reminder=state.filter(elem => elem.id !== action.id)
        bake_cookie("keyreminder",reminder);
        return reminder;
    }
    else if(action.type === clear){
        reminder=[];
        bake_cookie("keyreminder",reminder);
        return reminder;
    }
    else{
        return state;
    }   
}

export default reducer;