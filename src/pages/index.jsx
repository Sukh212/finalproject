import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ImageGallery from '../components/ImageGallery'
import {Title} from '../components/Utils'

const TableRow = ({ param, value }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ml-3 font-bold"> {param} </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap font-bold">{value}</p>
      </td>
    </tr>
  )
}

const Home = () => {
  return (
    <div>
      <section className={`${styles.hero} text-gray-700 body-font`}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <Image alt="hero" src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="object-cover object-center rounded" layout="responsive" width={1000} height={600} /> */}
            <Image alt="hero" src="https://telegra.ph/file/42058e6bcc89cb82576ed.png" className="object-cover object-center rounded" layout="responsive" width={1000} height={600} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-700"><b className="text-primary-focus">PATIALA</b>, the royal city of Punjab. </h1>
            <p className="mb-8 leading-relaxed"> Know everything about the royal city of Punjab. </p>
            <p className="mb-8 text-left">Patiala is a city in southeastern Punjab, northwestern India. It is the fourth largest city in the state and is the administrative capital of Patiala district. Patiala is located around the Qila Mubarak (the 'Fortunate Castle') constructed by the Sidhu Jat chieftain Ala Singh, who founded the royal dynasty of Patiala State in 1763, and after whom the city is named.</p>

            <div className="flex lg:flex-row md:flex-col">
              <a href="https://en.wikipedia.org/wiki/Patiala" target="_blank">
                <button type="button" className="bg-gray-100 inline-flex py-3 px-8 rounded-lg items-center hover:bg-blue-200 focus:outline-none">
                  <Image src="https://telegra.ph/file/f77664da4d7f0fa56718e.png" width={35} height={35} layout='intrinsic' alt="Try now" />
                  <span className="ml-7 flex items-start flex-col leading-none text-primary-focus font-bold">Read more on Wikipedia</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-10 px-10 body-font">
        <Title title="Images" />
        <ImageGallery
          images={[
            'https://telegra.ph/file/268fbcea6401534f306fa.png',
            'https://telegra.ph/file/4c6a08c1f49a594cac9df.png',
            'https://telegra.ph/file/a006388eb091eaee0a5f1.png',
            'https://telegra.ph/file/20a7be1de0253024c392e.png',
            'https://telegra.ph/file/59856d40c33446f6ffbed.png',
            'https://telegra.ph/file/5a70998e2caeb73b32fee.png'
          ]}
        />
      </section>
      <section className="md:py-10 md:px-10 body-font">
        <Title title="Basic Details" />
        <div className="bg-white p-8 rounded-md w-full">
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="font-bold px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary-focus text-lg uppercase tracking-wider"> Parameter</th>
                      <th className="font-bold px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-primary-focus text-lg uppercase tracking-wider"> Value </th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow param='Founder' value='Ala Singh' />
                    <TableRow param='Founded In' value='1754' />
                    <TableRow param='Area' value='155.4 km²' />
                    <TableRow param='Elevation' value='257 m' />
                    <TableRow param='Weather' value='13 °C, Wind NW at 6 km/h, 84% Humidity' />
                    <TableRow param='Population' value='7.63 Lkahs (As per 2020)' />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.seo = {
  title: 'Explore Patiala!',
  description: 'Explore the royal city of Punjab, Patiyala!',
  images:[{ url: '/metadata/android-chrome-512x512.png', width: 512, height: 512 }] 
}

export default Home
