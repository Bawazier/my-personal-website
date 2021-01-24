import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full max-h-screen flex items-center justify-between">
        <div className="flex space-y-10 flex-col w-full">
          <div className="flex flex-col space-y-1.5">
            <h4 className="font-sans text-lg font-semibold text-gray-400 uppercase">Hello</h4>
            <h1 className="font-serif text-6xl font-bold text-black capitalize">I'm Michael</h1>
            <p className="font-sans text-2xl font-semibold text-gray-600 capitalize">Freelance Web & Mobile Application</p>
          </div>
          <div>
            <button className="text-white text-base rounded-lg bg-yellow-500 font-bold font-sans text-center w-52 h-14">HIRE ME</button>
          </div>
        </div>
        <div className="w-full h-auto">
          <img src="/images/person.png" className="w-auto h-full" />
        </div>
      </section>
      <section id="aboutMe" className="w-full h-screen flex items-center justify-between">
        <div className="w-full">
          <div className=""></div>
          <div>
            <h1 className="font-serif text-4xl font-bold text-black capitalize">About Me</h1>
            <hr className="w-14 h-1 bg-yellow-500" />
          </div>
        </div>
        <div className="w-full flex flex-col space-y-6">
          <div>
            <p className="leading-relaxed break-words text-gray-600">However Emmet completions will not show up for the case you showed: the string "lorem5".
            The reason is that emmet sees the closing " immediately after the abbreviation so it decides not to return any completions.
            Instead, you have to use the Emmet: Expand Abbreviation command (which is bound to tab by default) to force emmet to expand lorem5:
            However Emmet completions will not show up for the case you showed: the string "lorem5".</p>&nbsp;&nbsp;
            <p className="leading-relaxed break-words text-gray-600">The reason is that emmet sees the closing " immediately after the abbreviation so it decides not to return any completions.
          Instead, you have to use the Emmet: Expand Abbreviation command (which is bound to tab by default) to force emmet to expand lorem5:</p>
          </div>
          <div className="flex space-x-4">
            <button className="text-white text-base rounded-lg bg-yellow-500 font-bold font-sans text-center w-52 h-14">VIEW WORKS</button>
            <button className="text-yellow-500 text-base rounded-lg border-2 border-yellow-500 font-bold font-sans text-center w-52 h-14">DOWNLOAD CV</button>
         </div>
        </div>
      </section>
      <section id="services" className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col space-y-4 items-center justify-center">
          <h1 className="font-serif text-4xl font-bold text-black capitalize">Services</h1>
          <hr className="w-20 h-1 bg-yellow-500" />
          <p className="leading-relaxed break-words text-gray-600 text-center">The reason is that emmet sees the closing " immediately after the abbreviation so it decides not to return any completions.
          Instead, you have to use the Emmet: Expand Abbreviation command (which is bound to tab by default) to force emmet to expand lorem5:</p>
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </Layout>
  )
}
