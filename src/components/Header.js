import {Link} from 'react-router-dom'

const Header =()=>{
    return(
        <div className="fixed left-0 right-0 top-0 h-[3rem] bg-primary-theme-light text-primary-text flex justify-center items-center gap-10">
            <Link to={'/invoices'}>
                <p>Invoices</p>
            </Link>
            <Link to={'create'}>
                <p>Create</p>
            </Link>
        </div>
    )
}

export default Header;