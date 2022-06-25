

const Form =({title,children})=>{
    return(
        <form className="form">
            <h2 className="w-full flex justify-center items-center text-lg font-black">{title}</h2>
            {children}
        </form>
    )
}

export default Form;