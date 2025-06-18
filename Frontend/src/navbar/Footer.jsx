function Footer()
{
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="flex flex-col items-center text-lg p-8 border-1 border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-center">© {year} Name. All rights reserved.</h1>
        </div>
    );
}

export default Footer;