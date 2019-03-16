import React from 'react';

export default({input,type,label,required})=>{
    //console.log(input)
    return (
        <div className="form-group">
            <label className="title">{label}  {required && <span className="text-danger">*</span>}</label>
            <input className="form-control" required={required} type={type}/>
        </div>
    )
}