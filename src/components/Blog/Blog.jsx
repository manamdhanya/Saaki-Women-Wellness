import React, { useContext } from "react";
import logo from "../../Assests/Logo.png";
import CheckupImg from "../../Assests/CheckupImg.png";
import LungCancerImg from "../../Assests/LungCancerImg.png";
import MeditationImg from "../../Assests/MeditationImg.png";
import BipolarImg from "../../Assests/BipolarImg.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const handleLogout = () => {
    localStorage.removeItem("sakhi_token");
    window.location.href = "/";
};

const Blog = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            home: "Home",
            team: "Our Team",
            blog: "Blog",
            about: "About",
            checkup: "Health Checkup",
            periodTracker: "Period Tracker", // Added
            trending: "Trending",
            selfCare: "SELF-CARE & MENTAL HEALTH",
            posts: [
                {
                    img: CheckupImg,
                    title: "Making the Most of Your Annual Checkup",
                    link: "https://www.healthywomen.org/your-health/making-the-most-of-your-annual-checkup"
                },
                {
                    img: LungCancerImg,
                    title: "Lung Cancer Symptoms",
                    link: "https://www.healthywomen.org/condition/symptoms-of-lung-cancer"
                },
                {
                    img: MeditationImg,
                    title: "5 Best Apps to Cultivate a Meditation Habit",
                    link: "https://www.healthywomen.org/your-wellness/self-care--mental-health/5-best-apps-to-cultivate-a-meditation-habit"
                },
                {
                    img: BipolarImg,
                    title: "I Live with Bipolar Disorder, but I Don’t Let It Define Who I Am",
                    link: "https://www.healthywomen.org/real-women-real-stories/living-with-bipolar-disorder"
                }
            ],
            copyright: "© 2025. All Rights Reserved.",
            logout: "Logout"
        },
        hi: {
            home: "होम",
            team: "हमारी टीम",
            blog: "ब्लॉग",
            about: "हमारे बारे में",
            checkup: "स्वास्थ्य जांच",
            periodTracker: "पीरियड ट्रैकर", // Added
            trending: "रुझानशील",
            selfCare: "स्वयं-देखभाल और मानसिक स्वास्थ्य",
            posts: [
                {
                    img: CheckupImg,
                    title: "आपकी वार्षिक जांच का सर्वोत्तम उपयोग कैसे करें",
                    link: "https://www.healthywomen.org/your-health/making-the-most-of-your-annual-checkup"
                },
                {
                    img: LungCancerImg,
                    title: "फेफड़े के कैंसर के लक्षण",
                    link: "https://www.healthywomen.org/condition/symptoms-of-lung-cancer"
                },
                {
                    img: MeditationImg,
                    title: "ध्यान की आदत विकसित करने के लिए 5 सर्वश्रेष्ठ ऐप्स",
                    link: "https://www.healthywomen.org/your-wellness/self-care--mental-health/5-best-apps-to-cultivate-a-meditation-habit"
                },
                {
                    img: BipolarImg,
                    title: "मैं द्विध्रुवीय विकार के साथ जीती हूं, लेकिन यह मुझे परिभाषित नहीं करता",
                    link: "https://www.healthywomen.org/real-women-real-stories/living-with-bipolar-disorder"
                }
            ],
            copyright: "© 2025। सर्वाधिकार सुरक्षित।",
            logout: "लॉगआउट"
        },
        te: {
            home: "హోమ్",
            team: "మన బృందం",
            blog: "బ్లాగ్",
            about: "మన గురించి",
            checkup: "ఆరోగ్య తనిఖీ",
            periodTracker: "పీరియడ్ ట్రాకర్", // Added
            trending: "ట్రెండింగ్",
            selfCare: "స్వీయ సంరక్షణ & మానసిక ఆరోగ్యం",
            posts: [
                {
                    img: CheckupImg,
                    title: "మీ వార్షిక చెక్అప్‌ను అత్యంత సమర్థవంతంగా ఉపయోగించడం",
                    link: "https://www.healthywomen.org/your-health/making-the-most-of-your-annual-checkup"
                },
                {
                    img: LungCancerImg,
                    title: "ఫెఫసు కాన్సర్ లక్షణాలు",
                    link: "https://www.healthywomen.org/condition/symptoms-of-lung-cancer"
                },
                {
                    img: MeditationImg,
                    title: "ధ్యానం అలవాటు పెంచడానికి 5 ఉత్తమ యాప్స్",
                    link: "https://www.healthywomen.org/your-wellness/self-care--mental-health/5-best-apps-to-cultivate-a-meditation-habit"
                },
                {
                    img: BipolarImg,
                    title: "నేను బైపోలర్ డిసార్డర్ తో జీవిస్తున్నాను, కానీ అది నా నిర్వచనాన్ని నిర్ధారించదు",
                    link: "https://www.healthywomen.org/real-women-real-stories/living-with-bipolar-disorder"
                }
            ],
            copyright: "© 2025. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
            logout: "లాగ్ అవుట్"
        },
        mr: {
            home: "मुखपृष्ठ",
            team: "आमची टीम",
            blog: "ब्लॉग",
            about: "आमच्या विषयी",
            checkup: "आरोग्य तपासणी",
            periodTracker: "पाळी ट्रॅकर", // Added
            trending: "ट्रेंडिंग",
            selfCare: "स्व-देखभाल आणि मानसिक आरोग्य",
            posts: [
                {
                    img: CheckupImg,
                    title: "आपल्या वार्षिक तपासणीचा सर्वोत्तम उपयोग कसा करावा",
                    link: "https://www.healthywomen.org/your-health/making-the-most-of-your-annual-checkup"
                },
                {
                    img: LungCancerImg,
                    title: "फुप्फुसांचे कर्करोग लक्षणे",
                    link: "https://www.healthywomen.org/condition/symptoms-of-lung-cancer"
                },
                {
                    img: MeditationImg,
                    title: "ध्यानाची सवय वाढवण्यासाठी 5 सर्वोत्तम अ‍ॅप्स",
                    link: "https://www.healthywomen.org/your-wellness/self-care--mental-health/5-best-apps-to-cultivate-a-meditation-habit"
                },
                {
                    img: BipolarImg,
                    title: "मी द्विध्रुवीय विकारासह जगते, परंतु हे मला व्याख्यायित करत नाही",
                    link: "https://www.healthywomen.org/real-women-real-stories/living-with-bipolar-disorder"
                }
            ],
            copyright: "© 2025. सर्व हक्क राखीव.",
            logout: "लॉगआउट"
        },
        gu: {
            home: "હોમ",
            team: "અમારી ટીમ",
            blog: "બ્લૉગ",
            about: "અમારા વિશે",
            checkup: "હેલ્થ ચેકઅપ",
            periodTracker: "પિરિયડ ટ્રેકર", // Added
            trending: "ટ્રેન્ડિંગ",
            selfCare: "સ્વ-સંભાળ & માનસિક આરોગ્ય",
            posts: [
                {
                    img: CheckupImg,
                    title: "તમારા વાર્ષિક ચેકઅપનો શ્રેષ્ઠ ઉપયોગ કેવી રીતે કરવો",
                    link: "https://www.healthywomen.org/your-health/making-the-most-of-your-annual-checkup"
                },
                {
                    img: LungCancerImg,
                    title: "ફેફસાના કેન્સરના લક્ષણો",
                    link: "https://www.healthywomen.org/condition/symptoms-of-lung-cancer"
                },
                {
                    img: MeditationImg,
                    title: "ધ્યાનની આદત વિકસાવવા માટે શ્રેષ્ઠ 5 એપ્સ",
                    link: "https://www.healthywomen.org/your-wellness/self-care--mental-health/5-best-apps-to-cultivate-a-meditation-habit"
                },
                {
                    img: BipolarImg,
                    title: "હું બાઇપોલર ડિસઓર્ડર સાથે જીવ છું, પરંતુ તે моей ઓળખને નિર્ધારિત નથી કરે",
                    link: "https://www.healthywomen.org/real-women-real-stories/living-with-bipolar-disorder"
                }
            ],
            copyright: "© 2025. સર્વ અધિકાર આરક્ષિત.",
            logout: "લૉગ આઉટ"
        }
    };

    const t = translations[language];

    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
            {/* Header */}
            <header className="relative flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 space-y-4 sm:space-y-0">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link to="/home">
                        <img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" />
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col sm:flex-row items-center sm:space-x-5 text-purple-800 font-medium text-xs sm:text-lg space-y-2 sm:space-y-0">
                    <Link to="/home" className="hover:underline">{t.home}</Link>
                    <Link to="/team" className="hover:underline">{t.team}</Link>
                    <Link to="/blog" className="underline text-[#910AE4]">{t.blog}</Link>
                    <Link to="/health-assessment" className="hover:underline">{t.checkup}</Link>
                    <Link to="/period-tracker" className="hover:underline">{t.periodTracker}</Link>
                    <Link to="/about" className="hover:underline">{t.about}</Link>
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="bg-purple-800 text-[#FFFFE0] px-3 py-1.5 rounded-md text-sm font-medium shadow-lg hover:bg-purple-900 transition"
                >
                    {t.logout}
                </button>
            </header>


            {/* Blog Sections */}
            <div className="bg-[#FFFFE0] py-12 px-6 md:px-16">
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">{t.trending}</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {t.posts.slice(0, 2).map((post, index) => (
                            <div key={index} className="flex flex-col w-full text-center">
                                <img src={post.img} alt={post.title} className="rounded-lg shadow-md h-48 w-full object-cover" />
                                <a href={post.link} className="mt-3 text-purple-800 font-semibold hover:underline">
                                    {post.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">{t.selfCare}</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {t.posts.slice(2, 4).map((post, index) => (
                            <div key={index} className="flex flex-col w-full text-center">
                                <img src={post.img} alt={post.title} className="rounded-lg shadow-md h-48 w-full object-cover" />
                                <a href={post.link} className="mt-3 text-purple-800 font-semibold hover:underline">
                                    {post.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-14 px-4">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Sakhi Didi Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    <span className="font-semibold text-purple-800 text-xs sm:text-lg">{t.copyright}</span>
                </div>

                <div className="flex space-x-6 pb-2 text-xl sm:text-2xl justify-center sm:justify-end w-full sm:w-auto">
                    <a href="https://www.facebook.com/" className="text-purple-500 hover:text-[#9a02f8]"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/" className="text-purple-500 hover:text-[#9a02f8]"><FaInstagram /></a>
                    <a href="https://x.com/i/flow/login" className="text-purple-500 hover:text-[#9a02f8]"><FaXTwitter /></a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
