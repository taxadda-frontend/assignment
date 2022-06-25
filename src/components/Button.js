import Spinner from "./Spinner";


const Button =({text,icon,loadingState,action,width,height})=>{
    switch(loadingState){
        case 'loading':
            return(
                <div 
                    style={{
                        width:width,
                        height:height
                    }}
                    className={`loadingBtn`}
                    >
                    <Spinner/>
                </div>
            )
        case 'none':
            return(
                <div 
                    style={{
                        width:width,
                        height:height
                    }}
                    className={`btn`}
                    onClick={action}
                    >
                    {text}
                </div>
            )
        case 'disabled':
            return(
                <div 
                    style={{
                        width:width,
                        height:height,
                        opacity:0.2
                    }}
                    className={`disabledBtn`}
                    >
                    {text}
                </div>
            )
    } 
}

export default Button;