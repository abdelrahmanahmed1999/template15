import {add,remove,clear} from './actionstypes';

export const addaction=(text,date)=>{
    const action={
        type:add,
        data:text,
        time:date
    }
    return action;
}

export const deleteaction=(pid)=>{
    const action={
        type:remove,
        id:pid
    }
    return action;
}

export const clearaction=()=>{
    const action={
        type:clear,
    }
    return action;
}