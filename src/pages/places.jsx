import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Title } from '../components/utils'
import { BsChevronDoubleDown } from 'react-icons/bs'

const placeList = [
    {title: 'Qila Mubarak', image: '/images/Qila-Mubarak.jpg', description: 'The Qila Mubarak complex is a rampart fort cum palace built in Sikh Palace architectural style- a derivative of Mughal and Rajput style of architecture in India.', url: 'https://en.wikipedia.org/wiki/Qila_Mubarak'},
    {title: 'Patiala Kali Mata Mandir', image: '/images/Shri-Kali-Devi-Patiala.jpg', description: 'The Kali Devi Mandir at Patiala was built by the Maharaja of Patiala, Bhupinder Singh, in 1936, who was inspired to build the temple by the Hindu goddess Kali Devi.', url: 'https://en.wikipedia.org/wiki/Shri_Kali_Devi_Temple,_Patiala'},
    {title: 'Sheesh Mahal', image: '/images/Sheesh-Mahal.jpg', description: 'Literally meaning the Palace of Mirrors, Sheesh Mahal was built as a part of the Old Moti Bagh Palace in the 19th century. There are a lot of frescoes', url: 'https://en.wikipedia.org/wiki/Sheesh_Mahal_(Lahore_Fort)'},
    {title: 'Gurdwara Dukh Nivaran Sahib Patiala', image: '/images/Gurdwara-Dukh-Nivaran-Sahib-Patiala.jpg', description: 'One of the most popular Gurudwaras in Punjab, Gurudwara Dukh Niwan Sahib is a Gurdwara in  Lehal which is now a part of Patiala and is quite famous for curating virtues.', url: 'https://en.wikipedia.org/wiki/Gurdwara_Dukh_Nivaran_Sahib'},
    {title: 'Moti Bagh Palace', image: '/images/Moti-Bagh-Palace.jpg', description: 'Located in Moti Bagh in Patiala, Moti Bagh Palace is an ancient magnificent palace that attracts a lot of tourists to the place. Originally built in the 1840s by the Maharaja of Patiala.', url: 'https://en.wikipedia.org/wiki/Moti_Bagh_Palace'},
    {title: 'Baradari Gardens', image: '/images/Baradari-Gardens.jpg', description: 'Baradari Gardens, located north of Old Patiala city nearby Sheranwala Gate was built during the reign of Maharaja Rajinder Singh. It houses a lot of rare trees, shrubs and flowers along which graces the presence of colonial buildings.', url: 'https://en.wikipedia.org/wiki/Baradari_(building)'}
]

const Card = ({ title, description, image, url }) => {
    return <div>
        <div className="card text-center shadow-2xl">
            <figure className="px-10 pt-10">
                <Image src={image} className="rounded-xl" width={600} height={400} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{title}</h2>
                <p>{description}</p>
                <div className="justify-center card-actions py-1">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline btn-accent py-1">More info</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

const Places = () => {
    return (
        <div>
            <section className={`${styles.hero} text-gray-700 body-font`}>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image alt="hero" src="/images/Qila-Mubarak.jpg" className="object-cover object-center rounded" layout="responsive" width={1000} height={600} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-700">Best places to visit in <b className="text-primary-focus"> PATIALA </b> </h1>
                        <p className="mb-8 leading-relaxed"> Must to visit historical places in Patiala. </p>
                        <p className="mb-8 text-left">There are many places for visiters to visit in Patiala, We've listed some of them here. </p>

                        <div className="flex lg:flex-row md:flex-col my-4">
                            <a href="#places">
                                <button type="button" onCli k={() => { }} className="bg-gray-100 inline-flex py-3 px-8 rounded-lg items-center hover:bg-blue-200 focus:outline-none">
                                    <BsChevronDoubleDown />
                                    <span className="ml-7 flex items-start flex-col leading-none text-primary-focus font-bold">Read more</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="md:px-20 px-2 py-4">
                <Title title="Best Places In Patiala" />
            </div>
            <section id='places' className="body-font md:pl-16 md:pr-40 md:py-10 px-5 py-6">
                <div class="container mx-auto space-y-5 space-x-5 lg:space-y-5 lg:gap-2 lg:grid lg:grid-cols-3">
                    {placeList.map((place, index) => {
                        return <Card key={index} title={place.title} description={place.description} image={place.image} url={place.url} />
                    })}
                </div>
                
            </section>
        </div>
    )
}

Places.seo = {
    title: 'Places to visit in Patiala',
    description: 'Must to visit historical places in Patiala.',
    images: [{url: '/images/Qila-Mubarak.jpg'}],
}

export default Places