import './Header.css';

const Header = () => {
    return (
        /* Navbar completa do site */
        <nav className="navbar bg-dark">
            {/* Logo da aplicação */}
            <div className="container-fluid d-flex flex-row justify-content-center">
                <a className="navbar-brand" href="#">
                    <h3 className="m-2 text-white d-flex align-items-center">MovieList
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-film ms-3" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg>
                    </h3>
                </a>
                {/* Barra de pesquisa da aplicação */}
                <form className="d-flex align-items-center" role="search">
                    <input type="shearch" className="rounded-1 border m-2 w-100" ></input>
                    <button className="border rounded-1 w-50 h-50" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header