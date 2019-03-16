import React from 'react';

export default({input,type,label,required,meta : {error,touched}})=>{

    return (
        <div className="form-group">
            <label className="title">{label}  {required && <span className="text-danger">*</span>}</label>
            <input  {...input} className="form-control" required={required} type={type}/>
            {
                error && touched &&
                <div className="mt-2 text-danger title"><strong>{error}</strong></div>
            }
        </div>
    )
}