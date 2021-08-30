const Header = () => {
    return (
        <header className="page-header flex h-1/6">
            <div className="header-items container flex my-auto mx-auto items-center lg:px-10 lg:pt-10 px-5 py-5 justify-between text-gray-400">
                <div id="main-heading-link" className="left-header-links">
                    {/*eslint-disable-next-line*/}
                    <div className="2xs:text-sm sm:text-xl md:text-2xl lg:text-4xl">{"<>"}</div>
                </div>
            </div>
        </header>
    );
}


export default Header;