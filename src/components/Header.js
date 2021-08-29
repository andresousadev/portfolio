const Header = () => {
    return (
        <header className="page-header flex h-1/6 max-w-7xl m-auto items-center px-10 pt-10 justify-between">
            <div id="main-heading-link" className="left-header-links">
                {/*eslint-disable-next-line*/}
                <a href="#" className="p-3">{"<André />"}</a>
            </div>
            <div className="right-header-links">
                <a href="https://www.linkedin.com/in/andre-reis-sousa" className="px-3">linkedin</a>
                <a href="https://github.com/andresousadev" className="px-3">github</a>
            </div>
        </header>
    );
}


export default Header;