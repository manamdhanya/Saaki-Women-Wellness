import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../Assests/Logo.png";
import { LanguageContext } from "../../context/LanguageContext";

const handleLogout = () => {
    localStorage.removeItem("sakhi_token");
    window.location.href = "/";
};

const HealthCheckup = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            home: "Home",
            team: "Our Team",
            blog: "Blog",
            about: "About",
            checkup: "Health Checkup",
            periodTracker: "Period Tracker",
            heading: "Hi, I Am Your Sakhi Didi, Please Answer Following Questions",
            scenarios: [
                "Do you experience irregular periods or missed cycles?",
                "Do you have burning or pain during urination?",
                "Have you ever noticed lumps or unusual changes in your chest area?",
                "Do you experience frequent chest pain or shortness of breath?",
                "Do you often feel dizzy or faint?",
                "Do you suffer from persistent anxiety or stress?",
                "Do you experience severe headaches or migraines frequently?",
                "Do you feel extreme fatigue or weakness despite rest?",
                "Do you have abdominal pain or bloating regularly?",
                "Do you experience pain or discomfort during intimacy?"
            ],
            yes: "Yes",
            no: "No",
            next: "Next",
            finish: "Finish",
            reportHeading: "📝 Your Health Assessment Report 📝",
            normal: "✅ Normal / OK.",
            warning: "⚠️ Consider consulting a doctor.",
            score: "Your Health Score",
            badHealth: "⚠️ Your health requires attention. Please consult a doctor or connect with our experts!",
            goodHealth: "🎉 Excellent! Your health seems good. Keep regular checkups!",
            copyright: "© 2025. All Rights Reserved.",
            logout: "Logout"
        },
        hi: {
            home: "होम",
            team: "हमारी टीम",
            blog: "ब्लॉग",
            about: "हमारे बारे में",
            checkup: "स्वास्थ्य जांच",
            periodTracker: "पीरियड ट्रैकर",
            heading: "हाय, मैं आपकी सखी दीदी हूँ, कृपया निम्नलिखित प्रश्नों का उत्तर दें",
            scenarios: [
                "क्या आपको मासिक धर्म अनियमित या चूक जाते हैं?",
                "क्या पेशाब करते समय जलन या दर्द होता है?",
                "क्या आपने अपने सीने में कोई गांठ या असामान्य बदलाव महसूस किया है?",
                "क्या आपको बार-बार सीने में दर्द या सांस फूलना होता है?",
                "क्या आपको अक्सर चक्कर या बेहोशी आती है?",
                "क्या आप लगातार चिंता या तनाव से पीड़ित हैं?",
                "क्या आपको बार-बार गंभीर सिरदर्द या माइग्रेन होता है?",
                "क्या आपको आराम करने के बाद भी अत्यधिक थकान या कमजोरी महसूस होती है?",
                "क्या आपको नियमित रूप से पेट दर्द या सूजन रहती है?",
                "क्या आपको अंतरंगता के दौरान दर्द या असुविधा होती है?"
            ],
            yes: "हाँ",
            no: "नहीं",
            next: "अगला",
            finish: "समाप्त",
            reportHeading: "📝 आपका स्वास्थ्य मूल्यांकन रिपोर्ट 📝",
            normal: "✅ सामान्य / ठीक है।",
            warning: "⚠️ कृपया डॉक्टर से परामर्श करें।",
            score: "आपका स्वास्थ्य स्कोर",
            badHealth: "⚠️ आपके स्वास्थ्य को ध्यान देने की आवश्यकता है। कृपया डॉक्टर से मिलें या हमारे विशेषज्ञों से संपर्क करें!",
            goodHealth: "🎉 शानदार! आपका स्वास्थ्य अच्छा लगता है। नियमित जांच करवाते रहें!",
            copyright: "© 2025। सर्वाधिकार सुरक्षित।",
            logout: "लॉगआउट"
        },
        te: {
            home: "హోమ్",
            team: "మన బృందం",
            blog: "బ్లాగ్",
            about: "మన గురించి",
            checkup: "ఆరోగ్య పరీక్ష",
            periodTracker: "పీరియడ్ ట్రాకర్",
            heading: "హాయ్, నేను మీ సఖి దిది, దయచేసి క్రింది ప్రశ్నలకు సమాధానం ఇవ్వండి",
            scenarios: [
                "మీకు అసమాన్యమైన మాసిక చక్రాలు లేదా మిస్ అవుతున్నాయా?",
                "మూత్రం సమయంలో మంట లేదా నొప్పి అనుభవిస్తున్నారా?",
                "మీ ఛాతీ ప్రాంతంలో ఎలాంటి గడ్డలు లేదా అసాధారణ మార్పులు గమనించారా?",
                "మీకు తరచుగా ఛాతి నొప్పి లేదా శ్వాస తీసుకోవడంలో ఇబ్బంది కలుగుతుందా?",
                "మీకు తరచుగా తలనొప్పి లేదా మూర్ఛ అనిపిస్తుందా?",
                "మీరు నిరంతర ఆందోళన లేదా ఒత్తిడితో బాధపడుతున్నారా?",
                "మీకు తరచుగా తీవ్రమైన తలనొప్పులు లేదా మైగ్రేన్లు వస్తున్నాయా?",
                "విశ్రాంతి తర్వాత కూడా తీవ్ర అలసట లేదా బలహీనత అనిపిస్తుందా?",
                "మీకు తరచుగా కడుపు నొప్పి లేదా ఉబ్బరం కలుగుతుందా?",
                "మీరు సాన్నిహిత్యం సమయంలో నొప్పి లేదా అసౌకర్యం అనుభవిస్తున్నారా?"
            ],
            yes: "అవును",
            no: "కాదు",
            next: "తదుపరి",
            finish: "ముగించు",
            reportHeading: "📝 మీ ఆరోగ్య అంచనా నివేదిక 📝",
            normal: "✅ సాధారణం / బాగుంది.",
            warning: "⚠️ డాక్టర్‌ను సంప్రదించండి.",
            score: "మీ ఆరోగ్య స్కోరు",
            badHealth: "⚠️ మీ ఆరోగ్యానికి శ్రద్ధ అవసరం ఉంది. డాక్టర్‌ను సంప్రదించండి లేదా మా నిపుణులను సంప్రదించండి!",
            goodHealth: "🎉 అద్భుతం! మీ ఆరోగ్యం బాగుంది. క్రమం తప్పకుండా తనిఖీలు చేయించుకోండి!",
            copyright: "© 2025. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
            logout: "లాగ్ అవుట్"
        },
        mr: {
            home: "मुखपृष्ठ",
            team: "आमची टीम",
            blog: "ब्लॉग",
            about: "आमच्या विषयी",
            checkup: "आरोग्य तपासणी",
            periodTracker: "पाळी ट्रॅकर",
            heading: "हाय, मी तुमची सखी दीदी आहे, कृपया खालील प्रश्नांची उत्तरे द्या",
            scenarios: [
                "आपल्याला मासिक पाळी अनियमित किंवा चुकते का?",
                "लघवी करताना जळजळ किंवा वेदना होतात का?",
                "आपल्या छातीमध्ये गाठ किंवा असामान्य बदल जाणवले आहेत का?",
                "आपल्याला वारंवार छातीत वेदना किंवा श्वास घेण्यास त्रास होतो का?",
                "आपल्याला वारंवार चक्कर येते किंवा बेशुद्ध पडता का?",
                "आपण सतत चिंता किंवा तणावाने त्रस्त आहात का?",
                "आपल्याला वारंवार तीव्र डोकेदुखी किंवा मायग्रेन होतात का?",
                "विश्रांती घेतल्यानंतरही थकवा किंवा अशक्तपणा जाणवतो का?",
                "आपल्याला वारंवार पोटदुखी किंवा सूज येते का?",
                "आपल्याला जवळिकीच्या वेळी वेदना किंवा अस्वस्थता होते का?"
            ],
            yes: "होय",
            no: "नाही",
            next: "पुढे",
            finish: "समाप्त",
            reportHeading: "📝 आपला आरोग्य अहवाल 📝",
            normal: "✅ सामान्य / ठीक आहे.",
            warning: "⚠️ कृपया डॉक्टरांचा सल्ला घ्या.",
            score: "आपला आरोग्य स्कोअर",
            badHealth: "⚠️ आपल्या आरोग्याकडे लक्ष द्या. डॉक्टरांना भेटा किंवा आमच्या तज्ज्ञांशी संपर्क साधा!",
            goodHealth: "🎉 उत्कृष्ट! आपले आरोग्य चांगले आहे. नियमित तपासणी करत राहा!",
            copyright: "© 2025. सर्व हक्क राखीव.",
            logout: "लॉगआउट"
        },
        gu: {
            home: "હોમ",
            team: "અમારી ટીમ",
            blog: "બ્લૉગ",
            about: "અમારા વિશે",
            checkup: "હેલ્થ ચેકઅપ",
            periodTracker: "પિરિયડ ટ્રેકર",
            heading: "હાય, હું вашей સખી દીદી છું, કૃપા કરીને નીચેના પ્રશ્નોના જવાબ આપો",
            scenarios: [
                "શું તમને અનિયમિત પિરિયડ્સ અથવા ચૂકી જાય છે?",
                "શું તમને પેશાબ દરમિયાન બળતરા અથવા દુખાવો થાય છે?",
                "શું તમે તમારા છાતીના વિસ્તારમાં ગાંઠો અથવા અસામાન્ય ફેરફાર જોયા છે?",
                "શું તમને વારંવાર છાતીમાં દુખાવો અથવા શ્વાસ લેવામાં તકલીફ થાય છે?",
                "શું તમને વારંવાર ચક્કર આવે છે અથવા બેભાન થઈ જાવ છો?",
                "શું તમે સતત ચિંતા અથવા તણાવનો અનુભવ કરો છો?",
                "શું તમને વારંવાર ગંભીર માથાનો દુખાવો અથવા માઇગ્રેન થાય છે?",
                "શું તમને આરામ પછી પણ અત્યંત થાક અથવા નબળાઈ અનુભવાય છે?",
                "શું તમને વારંવાર પેટમાં દુખાવો અથવા ફૂલાવો થાય છે?",
                "શું તમને નજીકતા દરમિયાન દુખાવો અથવા અસ્વસ્થતા અનુભવાય છે?"
            ],
            yes: "હા",
            no: "ના",
            next: "આગળ",
            finish: "સમાપ્ત",
            reportHeading: "📝 તમારો આરોગ્ય અહેવાલ 📝",
            normal: "✅ સામાન્ય / ઠીક છે.",
            warning: "⚠️ કૃપા કરીને ડૉક્ટરને સલાહ લો.",
            score: "તમારો આરોગ્ય સ્કોર",
            badHealth: "⚠️ તમારા આરોગ્ય પર ધ્યાન આપવાની જરૂર છે. ડૉક્ટરને મળો અથવા અમારા નિષ્ણાતો સાથે જોડાઓ!",
            goodHealth: "🎉 શાનદાર! તમારું આરોગ્ય સારું છે. નિયમિત તપાસ કરાવતા રહો!",
            copyright: "© 2025. સર્વ અધિકાર આરક્ષિત.",
            logout: "લૉગ આઉટ"
        }
    };

    const t = translations[language];
    const scenarios = t.scenarios;

    const [currentScenario, setCurrentScenario] = useState(0);
    const [healthAnswers, setHealthAnswers] = useState([]);
    const [showReport, setShowReport] = useState(false);

    const handleOptionSelect = (answer) => {
        const updatedAnswers = [...healthAnswers];
        updatedAnswers[currentScenario] = answer;
        setHealthAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(currentScenario + 1);
        } else {
            setShowReport(true);
        }
    };

    const renderReport = () => {
        let goodCount = 0;

        return (
            <div className="bg-[#FFFFE0]rounded-2xl shadow-lg p-6 mt-6 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                    {t.reportHeading}
                </h2>
                <ul className="space-y-3">
                    {scenarios.map((q, i) => {
                        const ans = healthAnswers[i];
                        if (ans === t.yes) {
                            return (
                                <li
                                    key={i}
                                    className="p-3 rounded-lg bg-red-50 border-l-4 border-red-500 text-red-800"
                                >
                                    ⚠️ {q} — {t.warning}
                                </li>
                            );
                        } else {
                            goodCount++;
                            return (
                                <li
                                    key={i}
                                    className="p-3 rounded-lg bg-green-50 border-l-4 border-green-500 text-green-800"
                                >
                                    ✅ {q} — {t.normal}
                                </li>
                            );
                        }
                    })}
                </ul>

                <div className="mt-6 text-center text-lg font-semibold text-purple-700">
                    {t.score}: {goodCount}/10
                </div>

                {goodCount < 10 ? (
                    <div className="mt-6 flex justify-center">
                        <Link
                            to="/team"
                            className="flex justify-center items-center px-6 py-4 bg-red-100 text-red-900 rounded-2xl font-bold text-center shadow-md hover:bg-red-200 transition-all duration-300 w-full sm:w-auto"
                        >
                            {t.badHealth}
                        </Link>
                    </div>
                ) : (
                    <div className="mt-6 flex justify-center">
                        <div className="px-6 py-4 bg-green-100 text-green-900 rounded-2xl font-bold text-center shadow-md w-full sm:w-auto">
                            {t.goodHealth}
                        </div>
                    </div>
                )}
            </div>
        );
    };


    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
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
                    <Link to="/health-assessment" className="underline text-[#910AE4]">{t.checkup}</Link>
                    <Link to="/period-tracker" className="hover:underline">{t.periodTracker}</Link>
                    <Link to="/about" className="hover:underline">{t.about}</Link>
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className=" bg-purple-800 text-[#FFFFE0] px-3 py-1.5 rounded-md text-sm font-medium shadow-lg hover:bg-purple-900 transition"
                >
                    {t.logout}
                </button>
            </header>


            <section className="flex flex-col items-center py-10 px-6 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-800 mb-6">
                    {t.heading}
                </h2>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                    alt="Woman Health"
                    className="w-64 h-72 object-cover rounded-2xl shadow-lg"
                />
            </section>

            <div className="flex-grow flex flex-col items-center px-6">
                {!showReport ? (
                    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
                        <div className="text-lg md:text-xl font-medium text-purple-900 mb-6 text-center">
                            {scenarios[currentScenario]}
                        </div>
                        <div className="flex justify-center space-x-6 mb-6">
                            {[t.yes, t.no].map((opt) => (
                                <button
                                    key={opt}
                                    className={`px-6 py-2 rounded-lg font-semibold transition ${healthAnswers[currentScenario] === opt
                                        ? "bg-purple-800 text-white"
                                        : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                                        }`}
                                    onClick={() => handleOptionSelect(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                        {healthAnswers[currentScenario] && (
                            <button
                                onClick={handleNext}
                                className="w-full bg-purple-800 text-[#FFFFE0] py-2 rounded-lg font-bold hover:bg-purple-900 transition"
                            >
                                {currentScenario === scenarios.length - 1 ? t.finish : t.next}
                            </button>
                        )}
                    </div>
                ) : (
                    renderReport()
                )}
            </div>

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

export default HealthCheckup;
