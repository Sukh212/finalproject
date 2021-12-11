import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Title} from '../components/Utils'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Img = ({src, alt, width, height}) => {
    return <div className="py-10 px-auto flex justify-center items-center w-full">
        <Image alt={alt} src={src} className="object-cover object-center rounded my-10 mx-auto" width={width ? width : 600} height={height ? height : 400} />
    </div>
}

const History = () => {
    return (
        <div>
            <section className={`${styles.hero} text-gray-700 body-font`}>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-700">History of the Punjab's royal city, <b className="text-primary-focus">PATIALA</b></h1>
                        <p className="mb-8 text-left md:px-4">Famous for ‘peg’, ‘pagri’, ‘paranda’ (tasselled tag for braiding hair and ‘Jutti’ (footwear), joyous buoyance, royal demeanor, sensuous and graceful feminine gait and Aristocracy, Patiala presents a beautiful bouquet of life-style even to a casual visitor to the city. A brilliant spectrum of Rajput, Mughal and Punjabi cultures, a fine blend of modernity and tradition and a judicious synthesis of all that is beautiful in form and bold in spirit conjure up a vision called ‘Patiala’.</p>

                        <div className="flex lg:flex-row md:flex-col my-4">
                            <button type="button" onCli k={() => {}} className="bg-gray-100 inline-flex py-3 px-8 rounded-lg items-center hover:bg-blue-200 focus:outline-none">
                                <BsChevronDoubleDown />
                                <span className="ml-7 flex items-start flex-col leading-none text-primary-focus font-bold">Read more</span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image alt="hero" src="https://telegra.ph/file/0e5e76c3869a0e7f51683.png" className="object-cover object-center rounded" layout="responsive" width={1000} height={600} />
                    </div>
                </div>
            </section>
            <div className="md:px-20 px-2 py-4">
                <Title title="History" />
            </div>
            <section className="body-font md:pl-16 md:pr-40 md:py-10 px-5 py-6">
                <p>
                    Patiala, an erstwhile princely state, capital of PEPSU and a district headquarters of Punjab are situated in the Malwa region of Punjab. Malwa has the largest number Of districts in the reorganised Punjab, and antiquity of some of the cities goes back to the ancient and early medieval period. Patiala is relatively a young city, a few years more than two centuries old.
                    In the 18th century, the political vacuum created by the downfall of the Mughals was successfully filled up by the Sikh Misldars in Punjab by thwarting the designs of both the Marathas and the Afghans. One among these independent principalities of the Sikhs was that established by Baba Ala Singh at Patiala.
                </p>
                <Img src='/images/img-history1.jpg' alt="history" width={250} height={350} />
                <p>
                    The early history of the founders of Patiala state is more of a myth mystery than reality. The rulers of the erstwhile states of Patiala, Nabha and Jind trace their ancestry to one Chaudhary Phul. Apparently the appellation of dynasty ‘Phulkian’ is derived from their common founder. One of his sons, Chaudhary Ram Singh was baptised and blessed by Guru Gobind Singh. His son Ala Singh assumed the leadership in 1714 A.D. when Banda Bahadur was engaged in the fierce struggle against the Mughals. A man with vision and courage, Ala Singh carved out an independent principality from a petty Zamindari of 30 villages. Under his successors, it expanded into a big State, touching the Shivaliks in north, Rajasthan in the south and upper courses of the Jamuna and the Sutlej. While confronting the most trying and challenging circumstances in the middle eighteenth century, Baba Ala Singh, unlike many of his contemporaries, displayed tremendous courage and shrewdness in dealing with the Mughals, Afghans and Marathas, and successfully established and maintained a state which he had started building up bit by bit from its nucleus Barnala. In 1763 Baba Ala Singh laid the foundation of the Patiala fort known as Qila Mubarak, around ‘which the present city of Patiala is built.
                </p>
                <Img src='/images/Qila-Mubarak.jpg' alt="history" />
                <p>
                    After the third Battle of Panipat in 1761 in which the Marathas were defeated, the writ of the Afghans prevailed throughout Punjab. It is at this stage that the rulers of Patiala began to acquire ensigns of royalty. Ahmad Shah Abdali bestowed upon Ala Singh drum and banner after latter’s death, his grandson Amar Singh, succeeded and received the title of Raja-i-Rajgan. He was also allowed to strike coins, After forty years of ceaseless struggle with the Mughals, Afghans and Marathas, the borders of the Patiala state witnessed the trailing blaze of Ranjit Singh in the north and that of the British in the east. Bestowed with the gift and instinct of survival, and of making right choice at the right time, the Raja of Patiala entered into a treaty with the British against Ranjit Singh in 1808, thus becoming collaborator in the grand empire building process by the British in, the sub-continent of India. The rulers of Patiala such as Karam Singh, Narinder Singh, Mahendra Singh, Rajinder Singh, Bhupinder Singh and Yadvindra Singh were treated with respect and dignity by the British.
                </p>
                <Img src='/images/Bhupinder-Singh.png' alt="history" width={250} height={350} />
                <p>
                    It was Maharaja Bhupinder Singh (1900-1930) who gave the Patiala state a prominent place on the political map of India and, in the field of international sports. Most of the buildings with splendid architectural designs were constructed during his reign. His son Yadvindra Singh was among those Indian princes who, readily came forward to sign the Instrument of Accession, thus facilitating the process of national integration. In recognition of his services, he was appointed the Rajpramukh of the newly established state of PEPSU. Eulogizing his role of the Maharaja in fighting against the intrigues and manoeuvres of the unfriendly and hostile princes of India, Sardar Vallabh Bhai Patel the then Deputy Prime Minister and in charge of Home Affairs Ministry remarked :”1 must mention the notable contribution which His Highness, the Maharaja of Patiala, has made to the unity and integrity of India. He took the cause of the country at a time when there were few friends amongst the princely order and when serious attempts were being made to balkanize India. It was his patriotic lead that contributed in a large measure, to a change in the attitude of the princes to the problem of accession to the Indian Dominion.”
                </p>
            </section>
        </div>
    )
}

History.seo = {
    title: 'History of Patiala',
    description: 'History of the royal city Patiala',
    images: [{url: '/images/Bhupinder-Singh.png'}]
}

export default History