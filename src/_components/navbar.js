const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
            <div className="navbar-brand">Demo Streaming</div>
            
            <div>
                <span className="mr-2 text-light">Login</span>
                <button type="button" className="btn btn-dark">Start your free trial</button>
            </div>
        </nav>
    )
}

export default Navbar;