import Head from 'next/head';

export const siteTitle = "M."

function layout({children}) {
    return (
      <div className="container mx-auto">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header className="flex flex-row mx-auto py-4 justify-between items-center w-4/5">
          <div>
            <h1 className="font-sans text-5xl font-black text-yellow-500 uppercase">
              {siteTitle}
            </h1>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="font-sans">
              Home
            </a>
            <a href="#aboutMe" className="font-sans">
              About Us
            </a>
            <a href="#services" className="font-sans">
              Services
            </a>
            <a href="#" className="font-sans">
              Portfolio
            </a>
            <a href="#" className="font-sans">
              News
            </a>
            <a href="#" className="font-sans">
              Contact
            </a>
          </div>
        </header>
        <main className="flex flex-col mx-auto py-4 w-4/5">{children}</main>
      </div>
    );
}

export default layout
