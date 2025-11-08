import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/Logo.png";
import VillageWomen from "../../Assests/VillageWomen.png";
import Contact from "../../Assests/Contact.png";
import Chat from "../../Assests/Chat.png";
import Clock from "../../Assests/Clock.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const handleLogout = () => {
    localStorage.removeItem("sakhi_token");
    window.location.href = "/";
};


const MainPage = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const languages = [
        { code: "en", label: "English" },
        { code: "hi", label: "हिंदी" },
        { code: "te", label: "తెలుగు" },
        { code: "mr", label: "मराठी" },
        { code: "gu", label: "ગુજરાતી" },
    ];

    const translations = {
        en: {
            home: "Home",
            team: "Our Team",
            blog: "Blog",
            about: "About",
            checkup: "Health Assessment",
            periodTracker: "Period Tracker",
            logout: "Logout",
            heading: "Your Health, Your Way, Always",
            emergency: "Emergency Contact",
            emergencyInfo: "For emergencies, contact local services immediately.",
            chat: "Chat Now",
            chatInfo: "Schedule a private doctor callback for personalized advice.",
            workingHours: "Working Hours",
            hours: ["Mon - Fri 8:00 am - 9:00 pm", "Saturday 9:00 am - 8:00 pm", "Sunday 10:00 am - 7:00 pm"],
            copyright: "© 2025. All Rights Reserved.",
            logout: "Logout"
        },
        hi: {
            home: "होम",
            team: "हमारी टीम",
            blog: "ब्लॉग",
            about: "हमारे बारे में",
            checkup: "स्वास्थ्य मूल्यांकन",
            periodTracker: "पीरियड ट्रैकर",
            heading: "आपका स्वास्थ्य, आपका तरीका, हमेशा",
            emergency: "आपातकालीन संपर्क",
            emergencyInfo: "आपात स्थितियों में तुरंत स्थानीय सेवाओं से संपर्क करें।",
            chat: "अभी चैट करें",
            chatInfo: "व्यक्तिगत सलाह के लिए निजी डॉक्टर कॉलबैक शेड्यूल करें।",
            workingHours: "कार्य समय",
            hours: ["सोम - शु 8:00 पूर्वाह्न - 9:00 अपराह्न", "शनिवार 9:00 पूर्वाह्न - 8:00 अपराह्न", "रविवार 10:00 पूर्वाह्न - 7:00 अपराह्न"],
            copyright: "© 2025। सर्वाधिकार सुरक्षित।",
            logout: "लॉगआउट"
        },
        te: {
            home: "హోమ్",
            team: "మన బృందం",
            blog: "బ్లాగ్",
            about: "మన గురించి",
            checkup: "ఆరోగ్య అంచనా",
            periodTracker: "పీరియడ్ ట్రాకర్",
            heading: "మీ ఆరోగ్యం, మీ విధంగా, ఎల్లప్పుడూ",
            emergency: "అత్యవసర సంప్రదింపు",
            emergencyInfo: "అత్యవసర పరిస్థితులలో, స్థానిక సేవలను తక్షణమే సంప్రదించండి.",
            chat: "ఇప్పుడు చాట్ చేయండి",
            chatInfo: "వ్యక్తిగత సలహా కోసం ప్రైవేట్ డాక్టర్ కాల్‌బ్యాక్ షెడ్యూల్ చేయండి.",
            workingHours: "వర్కింగ్ అవర్స్",
            hours: ["సోం - వె 8:00 am - 9:00 pm", "శనివారం 9:00 am - 8:00 pm", "ఆదివారం 10:00 am - 7:00 pm"],
            copyright: "© 2025. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
            logout: "లాగ్ అవుట్"
        },
        mr: {
            home: "मुखपृष्ठ",
            team: "आमची टीम",
            blog: "ब्लॉग",
            about: "आमच्या विषयी",
            checkup: "आरोग्य मूल्यांकन",
            periodTracker: "पाळी ट्रॅकर",
            heading: "तुमचे आरोग्य, तुमच्या पद्धतीने, नेहमी",
            emergency: "तत्काळ संपर्क",
            emergencyInfo: "आपत्कालीन परिस्थितीत स्थानिक सेवेशी त्वरित संपर्क साधा.",
            chat: "आता चॅट करा",
            chatInfo: "वैयक्तिक सल्ल्यासाठी खास डॉक्टर कॉलबॅक शेड्यूल करा.",
            workingHours: "कामाचे तास",
            hours: ["सोम - शुक्र 8:00 पूर्वी - 9:00 नंतर", "शनिवार 9:00 पूर्वी - 8:00 नंतर", "रविवार 10:00 पूर्वी - 7:00 नंतर"],
            copyright: "© 2025. सर्व हक्क राखीव.",
            logout: "लॉगआउट"
        },
        gu: {
            home: "હોમ",
            team: "અમારી ટીમ",
            blog: "બ્લૉગ",
            about: "અમારા વિશે",
            checkup: "હેલ્થ અસેસમેન્ટ",
            periodTracker: "પિરિયડ ટ્રેકર",
            heading: "તમારું આરોગ્ય, તમારી રીત, હંમેશા",
            emergency: "જરૂરી સંપર્ક",
            emergencyInfo: "જરૂરી પરિસ્થિતિમાં સ્થાનિક સેવાઓ સાથે તરત સંપર્ક કરો.",
            chat: "હવે ચેટ કરો",
            chatInfo: "વ્યક્તિગત સલાહ માટે ખાનગી ડોક્ટર કોલબૅક શેડ્યૂલ કરો.",
            workingHours: "કાર્ય સમય",
            hours: ["સોમ - શુક્ર 8:00 AM - 9:00 PM", "શનિવાર 9:00 AM - 8:00 PM", "રવિવાર 10:00 AM - 7:00 PM"],
            copyright: "© 2025. સર્વ અધિકાર આરક્ષિત.",
            logout: "લૉગ આઉટ"
        }
    };

    const t = translations[language];

    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
            
            <header className="relative flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 space-y-4 sm:space-y-0">

                
                <div className="flex items-center space-x-2">
                    <Link to="/home">
                        <img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" />
                    </Link>
                </div>

                
                <nav className="flex flex-col sm:flex-row items-center sm:space-x-5 text-purple-800 font-medium text-xs sm:text-lg space-y-2 sm:space-y-0">
                    <Link to="/home" className="underline text-[#910AE4]">{t.home}</Link>
                    <Link to="/team" className="hover:underline">{t.team}</Link>
                    <Link to="/blog" className="hover:underline">{t.blog}</Link>
                    <Link to="/health-assessment" className="hover:underline">{t.checkup}</Link>
                    <Link to="/period-tracker" className="hover:underline">{t.periodTracker}</Link>
                    <Link to="/about" className="hover:underline">{t.about}</Link>
                </nav>

        
                <button
                    onClick={handleLogout}
                    className=" bg-purple-800 text-[#FFFFE0] px-3 py-1.5 rounded-md text-sm font-medium shadow-lg hover:bg-purple-900 transition"
                >
                    {t.logout}
                </button>
            </header>


            <section className="flex flex-col items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mt-8">{t.heading}</h1>
                <img src={VillageWomen} alt="Group of women" className="mt-6 rounded-3xl w-[90%] max-w-2xl object-cover" />
            </section>

            <section className="mt-12 bg-purple-800 text-[#FFFFE0] py-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <img src={Contact} alt="Contact Icon" className="w-10 h-10 mb-2" />
                            <h3 className="font-semibold text-lg">{t.emergency}</h3>
                            <p className="text-sm">{t.emergencyInfo}</p>
                            <p className="font-bold mt-2">123-456-7890</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <img src={Chat} alt="Chat Icon" className="w-10 h-10 mb-2" />
                            <h3 className="font-semibold text-lg">{t.chat}</h3>
                            <p className="text-sm">{t.chatInfo}</p>
                            <Link to="/chat">
                                <button className="mt-3 px-4 py-2 bg-[#FFFFE0] text-purple-800 rounded-md font-semibold hover:bg-[#e7e2cf]">
                                    {t.chat}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <img src={Clock} alt="Clock Icon" className="w-12 h-10 mb-2" />
                            <h3 className="font-semibold text-lg">{t.workingHours}</h3>
                            {t.hours.map((hour, index) => (
                                <p key={index} className="text-sm">{hour}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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

export default MainPage;
