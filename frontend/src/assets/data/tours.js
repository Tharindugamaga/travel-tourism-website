import sigiriyaImg from '../images/sigiriya.jpg';
import ellaImg from '../images/ella.jpg';
import kandyImg from '../images/kandy.jpg';
import galleImg from '../images/galle.jpg';
import nuwaraEliyaImg from '../images/nuwaraeliya.jpeg';
import yalaImg from '../images/yala.jpg';
import anuradhapuraImg from '../images/anuradhapura.jpg';
import trincomaleeImg from '../images/trincomalee.jpg';
import nineArchImg from '../images/Nine Arch Bridge.png';
import polonnaruwaImg from '../images/polonnaruwa.avif';
import hortonPlainsImg from '../images/hortan.jpg';
import arugambayImg from '../images/aru.avif';
import dambullaImg from '../images/dabulla.jpg';
import ravanaFallsImg from '../images/ravana.jpg';
import jaffnaImg from '../images/jafna.jpg';
import adamPeakImg from '../images/adams.jpg';




const tours = [
  {
    id: "01",
    title: "Sigiriya Rock Fortress",
    city: "Sigiriya",
    distance: 180,
    maxGroupSize: 10,
    shortDesc: "A UNESCO World Heritage site, this ancient rock fortress is one of Sri Lanka’s most iconic landmarks.",
    desc: "Sigiriya, also known as Lion Rock, is a 5th-century fortress and palace built by King Kashyapa. Rising 200 meters above the surrounding jungle, it features stunning frescoes, landscaped gardens, and the iconic lion’s paws guarding its entrance. Sigiriya is celebrated for its advanced irrigation systems and remarkable urban planning, offering a glimpse into the engineering brilliance of ancient Sri Lanka.",
    reviews: [{ name: "John Doe", rating: 4.9 }],
    avgRating: 4.8,
    photo: sigiriyaImg,
    featured: true,
  },
  {
    id: "02",
    title: "Ella Scenic Hills",
    city: "Ella",
    distance: 200,
    maxGroupSize: 8,
    shortDesc: "Known for its breathtaking views, tea plantations, and hiking trails like Little Adam’s Peak.",
    desc: "Ella is a tranquil mountain town nestled in Sri Lanka’s central highlands. Surrounded by lush forests and endless tea plantations, it is famous for its cool climate, vibrant greenery, and panoramic viewpoints. Attractions include the Nine Arch Bridge, Ravana Falls, and the hike to Little Adam’s Peak, all of which make Ella a favorite among eco-tourists and hikers.",
    reviews: [{ name: "Jane Doe", rating: 4.7 }],
    avgRating: 4.6,
    photo: ellaImg,
    featured: true,
  },
  {
    id: "03",
    title: "Temple of the Tooth",
    city: "Kandy",
    distance: 120,
    maxGroupSize: 12,
    shortDesc: "Located in the heart of Kandy, this sacred temple houses the relic of the tooth of the Buddha.",
    desc: "The Temple of the Tooth Relic (Sri Dalada Maligawa) is one of the most venerated Buddhist sites in the world. Located in the royal palace complex of the former Kingdom of Kandy, it enshrines the sacred tooth of the Buddha. The temple plays a central role in Sri Lanka’s religious and cultural life, particularly during the Esala Perahera, a grand annual procession.",
    reviews: [{ name: "Sam Silva", rating: 4.5 }],
    avgRating: 4.5,
    photo: kandyImg,
    featured: false,
    price :'9'
  },
  {
    id: "04",
    title: "Galle Fort",
    city: "Galle",
    distance: 150,
    maxGroupSize: 15,
    shortDesc: "A historic Dutch fort with charming streets, cafes, and stunning coastal views.",
    desc: "Galle Fort, a UNESCO World Heritage site, is a 17th-century fortified city built by the Portuguese and later expanded by the Dutch. Its cobbled streets are lined with colonial-era architecture, boutique shops, art galleries, and cafes. The fort is a living monument where Sri Lankan history, culture, and European influence harmoniously coexist.",
    reviews: [{ name: "Lina", rating: 4.8 }],
    avgRating: 4.7,
    photo: galleImg,
    featured: true,
  },
  {
    id: "05",
    title: "Nuwara Eliya Tea Gardens",
    city: "Nuwara Eliya",
    distance: 170,
    maxGroupSize: 10,
    shortDesc: "Known as 'Little England', this town is famous for its cool climate and tea estates.",
    desc: "Nuwara Eliya, often called 'Little England' due to its colonial ambiance, is a highland resort town nestled among tea-covered hills. British planters introduced tea cultivation here in the 19th century, and the region still produces some of the world’s finest Ceylon tea. The cool climate, scenic lake, botanical gardens, and golf course make it a popular retreat.",
    reviews: [{ name: "Ravi", rating: 4.6 }],
    avgRating: 4.6,
    photo: nuwaraEliyaImg,
    featured: false,
  },
  {
    id: "06",
    title: "Yala National Park",
    city: "Yala",
    distance: 300,
    maxGroupSize: 6,
    shortDesc: "Home to leopards, elephants, and exotic wildlife in a scenic natural habitat.",
    desc: "Yala National Park is Sri Lanka’s most visited and second-largest wildlife reserve. Known for its high density of leopards, the park also hosts elephants, sloth bears, crocodiles, and hundreds of bird species. The park’s mix of forest, grassland, and lagoon ecosystems makes it a hotspot for nature lovers and wildlife photographers.",
    reviews: [{ name: "Carlos", rating: 4.9 }],
    avgRating: 4.8,
    photo: yalaImg,
    featured: true,
  },
  {
    id: "07",
    title: "Anuradhapura",
    city: "Anuradhapura",
    distance: 220,
    maxGroupSize: 10,
    shortDesc: "One of Sri Lanka’s ancient capitals filled with stupas and archaeological wonders.",
    desc: "Anuradhapura, a UNESCO World Heritage Site, was the first capital of ancient Sri Lanka and remains a sacred city for Buddhists. It’s renowned for colossal stupas like Ruwanwelisaya, ancient temples, monasteries, and the sacred Sri Maha Bodhi tree, grown from a cutting of the original Bodhi tree under which the Buddha attained enlightenment.",
    reviews: [{ name: "Priya", rating: 4.7 }],
    avgRating: 4.6,
    photo: anuradhapuraImg,
    featured: false,
  },
  {
    id: "08",
    title: "Beaches of Trincomalee",
    city: "Trincomalee",
    distance: 250,
    maxGroupSize: 8,
    shortDesc: "Stunning beaches, whale watching, and crystal-clear waters on the east coast.",
    desc: "Trincomalee is a coastal gem on Sri Lanka’s east coast, known for its pristine beaches like Nilaveli and Uppuveli. The area is ideal for snorkeling, diving, and whale watching. Rich in cultural history, Trinco is also home to the ancient Koneswaram Temple, perched on a cliff with sweeping ocean views.",
    avgRating: 0,
    photo: trincomaleeImg,
    featured: true,
  },
  {
    id: "16",
    title: "Nine Arch Bridge",
    city: "Ella",
    shortDesc: "Iconic colonial-era railway bridge in the hills.",
    desc: "The Nine Arch Bridge, also known as the Bridge in the Sky, is a spectacular piece of colonial railway engineering. Built entirely from stone and bricks without steel, it stands majestically amid lush greenery. Watching the train pass over the bridge is a favorite moment for many travelers.",
    photo: nineArchImg,
    distance: "203 km",
    avgRating: 4.9,
    featured: true,
  },
  {
    id: "13",
    title: "Ancient Polonnaruwa",
    city: "Polonnaruwa",
    shortDesc: "Medieval capital with ancient temples and statues.",
    desc: "Polonnaruwa served as the capital of Sri Lanka during the 11th and 12th centuries. This UNESCO-listed site is a treasure trove of well-preserved ruins, including temples, shrines, statues, and royal palaces. Highlights include the Gal Vihara rock-cut Buddha statues and the Parakrama Samudra reservoir.",
    photo: polonnaruwaImg,
    distance: "230 km",
    avgRating: 4.7,
    featured: true,
  },
  {
    id: "15",
    title: "Horton Plains National Park",
    city: "Nuwara Eliya",
    shortDesc: "Mist-covered plateau and World's End viewpoint.",
    desc: "Horton Plains is a highland plateau rich in biodiversity and home to Sri Lanka’s most scenic hike to 'World’s End'—a sheer cliff with a dramatic drop. The park also features Baker’s Falls and rare flora and fauna. It is one of the few national parks in the country where visitors can walk freely.",
    photo: hortonPlainsImg,
    distance: "182 km",
    avgRating: 4.6,
    featured: true,
  },
  {
    id: "10",
    title: "Arugam Bay",
    city: "Arugam Bay",
    shortDesc: "Surfer’s haven with laid-back beach vibes.",
    desc: "Arugam Bay on the east coast is a world-renowned surfing destination, attracting surfers from around the globe. Beyond the waves, it’s a peaceful seaside village with beach bars, yoga retreats, and nearby cultural sites like Muhudu Maha Viharaya. It’s also close to Kumana National Park.",
    photo: arugambayImg,
    distance: "320 km",
    avgRating: 4.5,
    featured: true,
  },
  {
    id: "09",
    title: "Dambulla Cave Temple",
    city: "Dambulla",
    shortDesc: "Rock temple complex filled with Buddha statues.",
    desc: "The Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a vast cave monastery filled with ancient Buddhist murals and over 150 Buddha statues. It dates back to the 1st century BCE and remains a living place of worship. The temple sits atop a rock offering panoramic views.",
    photo: dambullaImg,
    distance: "148 km",
    avgRating: 4.8,
    featured: true,
    price : '10'
  },
  {
    id: "29",
    title: "Ravana Falls",
    city: "Ella",
    distance: 205,
    maxGroupSize: 10,
    shortDesc: "A majestic waterfall in Ella, popular with nature lovers and photographers.",
    desc: "Ravana Falls is one of Sri Lanka’s most striking waterfalls, cascading from a height of 25 meters. It is named after the legendary King Ravana from the Ramayana epic, who is believed to have used the nearby caves as a hiding place. It’s a popular picnic and photo spot in the hill country.",
    reviews: [{ name: "Christopher Miller", rating: 4.7 }],
    avgRating: 4.6,
    photo: ravanaFallsImg,
    featured: true,
   
  },
  {
    id: "20",
    title: "Jaffna Peninsula",
    city: "Jaffna",
    shortDesc: "Northern charm with rich Tamil culture and history.",
    desc: "Jaffna is the cultural heart of Sri Lanka’s Tamil population, offering a unique blend of traditions, architecture, and cuisine. Key attractions include the Nallur Kandaswamy Temple, Jaffna Fort, and nearby islands like Delft. After years of isolation, the region is now welcoming more visitors eager to experience its distinct heritage.",
    photo: jaffnaImg,
    distance: "398 km",
    avgRating: 4.6,
    featured: true,
  },
  {
    id: "19",
    title: "Adam’s Peak",
    city: "Ratnapura",
    shortDesc: "Spiritual pilgrimage with sunrise hike to summit.",
    desc: "Adam’s Peak, or Sri Pada, is a conical mountain sacred to multiple faiths. Buddhists believe it bears the Buddha’s footprint, while Hindus and Muslims attribute it to Shiva and Adam respectively. The trek to the summit, especially at night to catch the sunrise, is a spiritual and unforgettable experience.",
    photo: adamPeakImg,
    distance: "136 km",
    avgRating: 4.7,
    
    featured: true,
  },
];

export default tours;
