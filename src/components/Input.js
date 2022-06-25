

const Input =({type,placeholder,required,classes,value,action,state,title,...props})=>{
    return(
        <input
            className={`input ${classes&&classes} `}
            type={type}
            value={value}
            onChange={action}
            placeholder={placeholder}
            required={required}
            
        />
    )
}

export default Input;