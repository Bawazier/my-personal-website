import Head from 'next/head';

export const siteTitle = "M."

function layout({children}) {
    return (
        <div className="container">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="flex flex-row mx-auto px-20 py-4 justify-between items-center w-screen">
                <div>
                    <h1 className="font-sans text-5xl font-black text-yellow-500 uppercase">{siteTitle}</h1>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="font-sans">Home</a>
                    <a href="#aboutMe" className="font-sans">About Us</a>
                    <a href="#" className="font-sans">Services</a>
                    <a href="#" className="font-sans">Portfolio</a>
                    <a href="#" className="font-sans">News</a>
                    <a href="#" className="font-sans">Contact</a>
                </div>
            </header>
            <main className="flex flex-col mx-auto px-20 py-4 w-screen">{children}</main>
        </div>
    )
}

export default layout
