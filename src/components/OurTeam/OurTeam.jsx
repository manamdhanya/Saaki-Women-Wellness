import React, { useContext } from "react";
import logo from "../../Assests/Logo.png";
import DrAnjali from "../../Assests/DrAnjali.png";
import DrKavitha from "../../Assests/DrKavitha.png";
import DrDeepa from "../../Assests/DrDeepa.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope, FaPhone } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const handleLogout = () => {
  localStorage.removeItem("sakhi_token");
  window.location.href = "/";
};

const OurTeam = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      home: "Home",
      team: "Our Team",
      blog: "Blog",
      about: "About",
      checkup: "Health Checkup",
      periodTracker: "Period Tracker",
      heading: "Dedicated Experts Our Team",
      description: "Our team of dedicated experts is committed to providing you with the best possible care and support",
      doctor1: "Dr. Anjali Mehra",
      doctor1Specialty: "Gynaecology & Obstetrics",
      doctor1Email: "anjali@sakhididi.com",
      doctor1Phone: "+91 9876543211",
      doctor2: "Dr. Kavitha Reddy",
      doctor2Specialty: "Endocrinology (Thyroid & PCOS)",
      doctor2Email: "kavitha@sakhididi.com",
      doctor2Phone: "+91 9876543212",
      doctor3: "Dr. Deepa Thomas",
      doctor3Specialty: "Reproductive Medicine & Fertility",
      doctor3Email: "deepa@sakhididi.com",
      doctor3Phone: "+91 9876543213",
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
      heading: "समर्पित विशेषज्ञ हमारी टीम",
      description: "हमारी समर्पित विशेषज्ञों की टीम आपको सर्वोत्तम देखभाल और समर्थन प्रदान करने के लिए प्रतिबद्ध है",
      doctor1: "डॉ. अंजलि मेहरा",
      doctor1Specialty: "गाइनेकोलॉजी और प्रसूति विज्ञान",
      doctor1Email: "anjali@sakhididi.com",
      doctor1Phone: "+91 9876543211",
      doctor2: "डॉ. काविता रेड्डी",
      doctor2Specialty: "एंडोक्रिनोलॉजी (थायरॉइड और PCOS)",
      doctor2Email: "kavitha@sakhididi.com",
      doctor2Phone: "+91 9876543212",
      doctor3: "डॉ. दीपा थॉमस",
      doctor3Specialty: "प्रजनन चिकित्सा और प्रजनन क्षमता",
      doctor3Email: "deepa@sakhididi.com",
      doctor3Phone: "+91 9876543213",
      copyright: "© 2025। सर्वाधिकार सुरक्षित।",
      logout: "लॉगआउट"
    },
    te: {
      home: "హోమ్",
      team: "మన బృందం",
      blog: "బ్లాగ్",
      about: "మన గురించి",
      checkup: "ఆరోగ్య తనిఖీ",
      periodTracker: "పీరియడ్ ట్రాకర్",
      heading: "నిపుణుల సమర్పిత బృందం",
      description: "మా నిపుణుల బృందం మీకు అత్యుత్తమ సేవ మరియు మద్దతు అందించడానికి సమర్పితంగా ఉంది",
      doctor1: "డా. అంజలి మెహ్రా",
      doctor1Specialty: "గైనకాలజీ & ప్రసూతి శాస్త్రం",
      doctor1Email: "anjali@sakhididi.com",
      doctor1Phone: "+91 9876543211",
      doctor2: "డా. కావితా రెడ్డి",
      doctor2Specialty: "ఎండోక్రైనాలజీ (థైరాయిడ్ & PCOS)",
      doctor2Email: "kavitha@sakhididi.com",
      doctor2Phone: "+91 9876543212",
      doctor3: "డా. దీపా థామస్",
      doctor3Specialty: "ప్రజన వైద్యము & ఫెర్టిలిటీ",
      doctor3Email: "deepa@sakhididi.com",
      doctor3Phone: "+91 9876543213",
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
      heading: "समर्पित तज्ज्ञ आमची टीम",
      description: "आमची समर्पित तज्ज्ञांची टीम तुम्हाला सर्वोत्तम काळजी आणि समर्थन देण्यासाठी वचनबद्ध आहे",
      doctor1: "डॉ. अंजली मेहरा",
      doctor1Specialty: "स्त्रीरोगशास्त्र आणि प्रसूति",
      doctor1Email: "anjali@sakhididi.com",
      doctor1Phone: "+91 9876543211",
      doctor2: "डॉ. कविता रेड्डी",
      doctor2Specialty: "एंडोक्रिनोलॉजी (थायरॉइड & PCOS)",
      doctor2Email: "kavitha@sakhididi.com",
      doctor2Phone: "+91 9876543212",
      doctor3: "डॉ. दीपा थॉमस",
      doctor3Specialty: "प्रजनन औषध & फलितता",
      doctor3Email: "deepa@sakhididi.com",
      doctor3Phone: "+91 9876543213",
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
      heading: "સમર્પિત નિષ્ણાત અમારી ટીમ",
      description: "અમારી ટીમ તમને શ્રેષ્ઠ સારવાર અને સહાયતા પ્રદાન કરવા પ્રતિબદ્ધ છે",
      doctor1: "ડૉ. અંજલી મેહરા",
      doctor1Specialty: "ગાયનેકોલોજી & ઓબ્સ્ટેટ્રિક્સ",
      doctor1Email: "anjali@sakhididi.com",
      doctor1Phone: "+91 9876543211",
      doctor2: "ડૉ. કવિતા રેડ્ડી",
      doctor2Specialty: "એન્ડોક્રિનોલોજી (થાયરોઈડ & PCOS)",
      doctor2Email: "kavitha@sakhididi.com",
      doctor2Phone: "+91 9876543212",
      doctor3: "ડૉ. દીપા થોમસ",
      doctor3Specialty: "પ્રજનન મેડિસિન & ફર્ટિલિટી",
      doctor3Email: "deepa@sakhididi.com",
      doctor3Phone: "+91 9876543213",
      copyright: "© 2025. સર્વ અધિકાર આરક્ષિત.",
      logout: "લૉગ આઉટ"
    },
  };

  const t = translations[language];

  const doctors = [
    {
      img: DrAnjali,
      name: t.doctor1,
      specialty: t.doctor1Specialty,
      email: t.doctor1Email,
      phone: t.doctor1Phone,
    },
    {
      img: DrKavitha,
      name: t.doctor2,
      specialty: t.doctor2Specialty,
      email: t.doctor2Email,
      phone: t.doctor2Phone,
    },
    {
      img: DrDeepa,
      name: t.doctor3,
      specialty: t.doctor3Specialty,
      email: t.doctor3Email,
      phone: t.doctor3Phone,
    },
  ];

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
          <Link to="/team" className="underline text-[#910AE4]">{t.team}</Link>
          <Link to="/blog" className="hover:underline">{t.blog}</Link>
          <Link to="/health-assessment" className="hover:underline">{t.checkup}</Link>
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


      {/* Team Section */}
      <section className="bg-purple-800 text-[#FFFFE0] text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heading}</h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">{t.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {doctors.map((doc, idx) => (
            <div key={idx} className="flex flex-col items-center bg-purple-900 rounded-xl p-4 shadow-lg">
              <img src={doc.img} alt={doc.name} className="w-48 h-56 object-cover rounded-xl shadow-lg" />
              <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">{doc.name}</h3>
              <p className="text-[#FFFFE0] font-bold">{doc.specialty}</p>
              <div className="mt-2 text-sm md:text-base space-y-1 text-[#FFFFE0]">
                <p className="flex items-center justify-center gap-2">
                  <FaEnvelope /> <a href={`mailto:${doc.email}`} className="underline hover:text-purple-300">{doc.email}</a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaPhone /> <a href={`tel:${doc.phone}`} className="underline hover:text-purple-300">{doc.phone}</a>
                </p>
              </div>
            </div>
          ))}
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

export default OurTeam;