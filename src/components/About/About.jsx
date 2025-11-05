import React, { useContext } from "react";
import logo from "../../Assests/Logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const handleLogout = () => {
    localStorage.removeItem("sakhi_token");
    window.location.href = "/";
};

const About = () => {
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
            missionHeading: "Our Mission",
            missionText: "Sakhi Didi empowers women of all ages especially those who may not have easy access to healthcare to ask questions, learn, and take charge of their health. We provide free, anonymous health support in multiple Indian languages through a friendly WhatsApp chatbot. Our mission is to bridge the health information gap and help women make informed, confident decisions about their well being.",
            valuesHeading: "Our Values",
            values: [
                { title: "Trusted Partner", text: "We offer accurate, easy-to-understand health information reviewed by experts, so women can make informed choices about their bodies and minds." },
                { title: "Anonymity & Safety", text: "We respect privacy. Women can ask questions without fear or judgement." },
                { title: "Multilingual Access", text: "We break language barriers by supporting multiple Indian languages and culturally sensitive communication." },
                { title: "Digital Simplicity", text: "We meet women where they already are—on WhatsApp—with voice, text, and emojis." },
                { title: "Community Connection", text: "We connect women to certified doctors and verified resources when they need more personalised care." }
            ],
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
            missionHeading: "हमारा मिशन",
            missionText: "सखी दीदी सभी उम्र की महिलाओं को सशक्त बनाती है विशेष रूप से उन महिलाओं को जिनके लिए स्वास्थ्य सेवा तक पहुंच आसान नहीं है—वे सवाल पूछ सकें, सीख सकें और अपने स्वास्थ्य की जिम्मेदारी ले सकें। हम एक मित्रवत व्हाट्सएप चैटबोट के माध्यम से कई भारतीय भाषाओं में मुफ्त, गुमनाम स्वास्थ्य सहायता प्रदान करते हैं। हमारा मिशन स्वास्थ्य जानकारी के अंतर को पाटना और महिलाओं को उनकी भलाई के बारे में सूचित, आत्मविश्वासी निर्णय लेने में मदद करना है।",
            valuesHeading: "हमारे मूल्य",
            values: [
                { title: "विश्वसनीय साथी", text: "हम विशेषज्ञों द्वारा समीक्षा की गई सटीक, आसान-से-समझने योग्य स्वास्थ्य जानकारी प्रदान करते हैं, ताकि महिलाएँ अपने शरीर और मन के बारे में सूचित निर्णय ले सकें।" },
                { title: "गोपनीयता और सुरक्षा", text: "हम गोपनीयता का सम्मान करते हैं। महिलाएँ बिना डर या न्याय के सवाल पूछ सकती हैं।" },
                { title: "बहुभाषी पहुंच", text: "हम कई भारतीय भाषाओं और सांस्कृतिक रूप से संवेदनशील संचार का समर्थन करके भाषा की बाधाओं को दूर करते हैं।" },
                { title: "डिजिटल सरलता", text: "हम महिलाओं से वहीं मिलते हैं जहां वे पहले से मौजूद हैं—व्हाट्सएप पर—वॉइस, टेक्स्ट और इमोजी के साथ।" },
                { title: "सामुदायिक कनेक्शन", text: "जब उन्हें अधिक व्यक्तिगत देखभाल की आवश्यकता होती है, तो हम महिलाओं को प्रमाणित डॉक्टरों और सत्यापित संसाधनों से जोड़ते हैं।" }
            ],
            copyright: "© 2025। सर्वाधिकार सुरक्षित।",
            logout: "लॉगआउट"
        },
        te: {
            home: "హోమ్",
            team: "మన బృందం",
            blog: "బ్లాగ్",
            about: "మన గురించి",
            checkup: "ఆరోగ్య అంచనాలు",
            periodTracker: "పీరియడ్ ట్రాకర్",
            missionHeading: "మా లక్ష్యం",
            missionText: "సఖీ దిదీ అన్ని వయసుల మహిళలను శక్తివంతం చేస్తుంది—ప్రత్యేకంగా ఆరోగ్య సేవల వరకు సులభంగా లేని వారిని—వారు ప్రశ్నలు అడగగలగాలి, నేర్చుకోవాలి మరియు తమ ఆరోగ్యాన్ని దేనికంటే ముందుగా చూసుకోవాలి. మేము మిత్రమైన వాట్సాప్ చాట్‌బాట్ ద్వారా అనేక భారతీయ భాషలలో ఉచిత, గోప్యమైన ఆరోగ్య సహాయం అందిస్తాము. మా లక్ష్యం ఆరోగ్య సమాచారం లో ఉన్న అంతరం పూర్తిగా పోగొట్టడం మరియు మహిళలను స్వీయ-విశ్వాసంతో నిర్ణయాలు తీసుకోవడానికి సహాయపడటం.",
            valuesHeading: "మా విలువలు",
            values: [
                { title: "నమ్మదగిన భాగస్వామి", text: "మేము నిపుణుల సమీక్ష చేసిన ఖచ్చితమైన, సులభంగా అర్థమయ్యే ఆరోగ్య సమాచారాన్ని అందిస్తాము, అందువల్ల మహిళలు తమ శరీరం మరియు మానసిక స్థితి గురించి సమాచారంతో నిర్ణయాలు తీసుకోగలుగుతారు." },
                { title: "గోప్యత & భద్రత", text: "మేము గోప్యతను గౌరవిస్తాము. మహిళలు భయం లేదా తీర్పు లేకుండా ప్రశ్నలు అడగవచ్చు." },
                { title: "బహుభాషా ప్రవేశం", text: "మేము అనేక భారతీయ భాషలను మరియు సాంస్కృతికంగా సున్నితమైన కమ్యూనికేషన్‌ను మద్దతు ఇవ్వడం ద్వారా భాషా అడ్డంకులను తొలగిస్తాము." },
                { title: "డిజిటల్ సరళత", text: "మేము మహిళలను ఇప్పటికే ఉన్న చోట—వాట్సాప్‌లో—వాయిస్, టెక్స్ట్ మరియు ఎమోజీలతో కలుస్తాము." },
                { title: "సామాజిక కనెక్షన్", text: "వారు మరింత వ్యక్తిగతమైన సేవ అవసరమైతే, మేము మహిళలను ధృవీకృత డాక్టర్ల మరియు ప్రమాణీకృత వనరులకు కలుపుతాము." }
            ],
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
            missionHeading: "आमचे मिशन",
            missionText: "सखी दीदी सर्व वयोगटातील महिलांना सशक्त करते—विशेषतः त्या महिलांसाठी ज्या आरोग्य सेवा सहज उपलब्ध नाहीत—त्या प्रश्न विचारू शकतात, शिकू शकतात आणि त्यांच्या आरोग्याची जबाबदारी घेऊ शकतात. आम्ही मित्रवत व्हॉट्सअॅप चॅटबॉटद्वारे अनेक भारतीय भाषांमध्ये विनामूल्य, गुप्त आरोग्य समर्थन प्रदान करतो. आमचे ध्येय आरोग्य माहितीतील अंतर कमी करणे आणि महिलांना आत्मविश्वासपूर्ण निर्णय घेण्यास मदत करणे आहे.",
            valuesHeading: "आमची मूल्ये",
            values: [
                { title: "विश्वसनीय भागीदार", text: "आम्ही तज्ज्ञांनी पुनरावलोकन केलेली अचूक, समजण्यास सोपी आरोग्य माहिती प्रदान करतो, जेणेकरून महिला त्यांच्या शरीर आणि मनाबद्दल माहितीपूर्ण निर्णय घेऊ शकतील." },
                { title: "गोपनीयता & सुरक्षा", text: "आम्ही गोपनीयतेचा सन्मान करतो. महिला भीती किंवा निर्णयाशिवाय प्रश्न विचारू शकतात." },
                { title: "बहुभाषिक प्रवेश", text: "आम्ही अनेक भारतीय भाषांचा आणि सांस्कृतिकदृष्ट्या संवेदनशील संवादाचा समर्थन करून भाषा अडथळे दूर करतो." },
                { title: "डिजिटल सुलभता", text: "आम्ही महिला ज्या ठिकाणी आधीच आहेत तिथे—व्हॉट्सअॅपवर—व्हॉइस, मजकूर आणि इमोजी वापरून भेटतो." },
                { title: "सामुदायिक कनेक्शन", text: "जेव्हा त्यांना अधिक वैयक्तिक काळजीची आवश्यकता असते, तेव्हा आम्ही महिलांना प्रमाणित डॉक्टर आणि प्रमाणित संसाधनांशी जोडतो." }
            ],
            copyright: "© 2025. सर्व हक्क राखीव.",
            logout: "लॉगआउट"
        },
        gu: {
            home: "હોમ",
            team: "અમારી ટીમ",
            blog: "બ્લૉગ",
            about: "અમારા વિશે",
            checkup: "સ્વાસ્થ્ય મૂલ્યાંકન",
            periodTracker: "પિરિયડ ટ્રેકર",
            missionHeading: "અમારું મિશન",
            missionText: "સાખી દીદી દરેક ઉંમરના મહિલાઓને સશક્ત બનાવે છે—વિશેષ કરીને તે મહિલાઓ જેમને આરોગ્ય સેવા સરળતાથી મળી નથી—જેઓ પ્રશ્નો પૂછે, શીખે અને પોતાના આરોગ્યનો હિસાબ રાખે. અમે મૈત્રીપૂર્ણ વોટ્સએપ ચેટબોટ મારફતે બહુવિધ ભારતીય ભાષાઓમાં મફત, ગોપ્ય આરોગ્ય સહાયતા પ્રદાન કરીએ છીએ. અમારું મિશન આરોગ્ય માહિતીની ખાલી જગ્યા ભરવું અને મહિલાઓને માહિતીનાં આધારે, આત્મવિશ્વાસભર્યા નિર્ણયો લેવા માટે મદદ કરવું છે.",
            valuesHeading: "અમારી મૂલ્યો",
            values: [
                { title: "ભરોસાપાત્ર ભાગીદાર", text: "અમે નિષ્ણાતો દ્વારા સમીક્ષા કરેલી ચોક્કસ, સરળ આરોગ્ય માહિતી પ્રદાન કરીએ છીએ જેથી મહિલાઓ તેમના શરીર અને મન વિશે માહિતીને આધારે નિર્ણય લઈ શકે." },
                { title: "ગોપનીયતા & સલામતી", text: "અમે ગોપનીયતાને માન આપીએ છીએ. મહિલાઓ ડર કે નિર્ણય વગર પ્રશ્નો પુછે શકે છે." },
                { title: "બહુભાષી પ્રવેશ", text: "અમે અનેક ભારતીય ભાષાઓ અને સંસ્કૃતિક રીતે સંવેદનશીલ સંચારને સપોર્ટ કરીને ભાષાની અવરોધો દૂર કરીએ છીએ." },
                { title: "ડિજિટલ સરળતા", text: "અમે મહિલાઓને ત્યાં મળીએ જ્યાં તેઓ પહેલેથી હાજર છે—વોટ્સએપ પર—વોઇસ, લખાણ અને ઇમોજી સાથે." },
                { title: "સમુદાયિક કનેક્શન", text: "જ્યારે તેઓ વધુ વ્યક્તિગત કાળજીની જરૂરિયાત હોય ત્યારે અમે મહિલાઓને પ્રમાણિત ડૉક્ટર્સ અને પ્રમાણિત સંસાધનો સાથે જોડીએ છીએ." }
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
                    <Link to="/blog" className="hover:underline">{t.blog}</Link>
                    <Link to="/health-assessment" className="hover:underline">{t.checkup}</Link>
                    <Link to="/period-tracker" className="hover:underline">{t.periodTracker}</Link>
                    <Link to="/about" className="underline text-[#910AE4]">{t.about}</Link>
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className=" bg-purple-800 text-[#FFFFE0] px-3 py-1.5 rounded-md text-sm font-medium shadow-lg hover:bg-purple-900 transition"
                >
                    {t.logout}
                </button>
            </header>

            {/* Mission Section */}
            <section className="bg-[#FFFFE0] py-16 px-6 md:px-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">{t.missionHeading}</h2>
                    <p className="text-purple-800 text-base text-justify md:text-lg leading-relaxed">{t.missionText}</p>
                </div>

                {/* Values Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">{t.valuesHeading}</h2>
                    <div className="space-y-8">
                        {t.values.map((value, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-semibold text-purple-800 mb-2">{value.title}</h3>
                                <p className="text-purple-800 leading-relaxed">{value.text}</p>
                            </div>
                        ))}
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

export default About;
