import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assests/Logo.png";
import { LanguageContext } from "../../../context/LanguageContext";

const AuthPage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const BASE_URL = "http://localhost:5004";

  const translations = {
    en: {
      login: "Login",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      haveAccount: "Already have an account?",
      noAccount: "Don't have an account?",
      getStarted: "Create Account",
      welcome: "Welcome to Sakhi Didi",
      subtitle: "Your trusted women's health companion",
      name: "Full Name"
    },
    hi: {
      login: "लॉगिन",
      signup: "साइन अप",
      email: "ईमेल",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड की पुष्टि करें",
      haveAccount: "पहले से खाता है?",
      noAccount: "खाता नहीं है?",
      getStarted: "खाता बनाएं",
      welcome: "सखी दीदी में आपका स्वागत है",
      subtitle: "आपका विश्वसनीय महिला स्वास्थ्य साथी",
      name: "पूरा नाम"
    },
    te: {
      login: "లాగిన్",
      signup: "సైన్ అప్",
      email: "ఇమెయిల్",
      password: "పాస్వర్డ్",
      confirmPassword: "పాస్వర్డ్ నిర్ధారించండి",
      haveAccount: "ఖాతా ఇప్పటికే ఉందా?",
      noAccount: "ఖాతా లేదా?",
      getStarted: "ఖాతా సృష్టించండి",
      welcome: "సఖి దీదిలోకి స్వాగతం",
      subtitle: "మీ నమ్మకమైన మహిళా ఆరోగ్య సహచరి",
      name: "పూర్తి పేరు"
    },
    mr: {
      login: "लॉगिन",
      signup: "साइन अप",
      email: "ईमेल",
      password: "पासवर्ड",
      confirmPassword: "पासवर्डची पुष्टी करा",
      haveAccount: "आधीच खाते आहे?",
      noAccount: "खाते नाही?",
      getStarted: "खाते तयार करा",
      welcome: "सखी दीदी मध्ये स्वागत आहे",
      subtitle: "तुमचा विश्वासू महिला आरोग्य साथी",
      name: "पूर्ण नाव"
    },
    gu: {
      login: "લોગિન",
      signup: "સાઇન અપ",
      email: "ઈમેઇલ",
      password: "પાસવર્ડ",
      confirmPassword: "પાસવર્ડની પુષ્ટિ કરો",
      haveAccount: "પહેલેથી જ એકાઉન્ટ છે?",
      noAccount: "એકાઉન્ટ નથી?",
      getStarted: "એકાઉન્ટ બનાવો",
      welcome: "સખી દીદીમાં આપનું સ્વાગત છે",
      subtitle: "તમારો વિશ્વાસુ મહિલાઓનો આરોગ્ય સાથી",
      name: "પૂર્ણ નામ"
    }
  };

  const t = translations[language];

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all fields");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const url = isLogin 
      ? `${BASE_URL}/api/auth/login`
      : `${BASE_URL}/api/auth/signup`;

    const body = isLogin
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      if (isLogin) {
        localStorage.setItem("sakhi_token", data.token);
        navigate("/home");
      } else {
        alert("Signup successful, please login");
        setIsLogin(true);
      }
    } catch (err) {
      alert("Server connection error");
      console.error(err);
    }
  };

  return (
    <>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="absolute top-5 right-5 bg-purple-800 text-[#FFFFE0] px-2 py-1 rounded text-sm font-medium"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="te">తెలుగు</option>
        <option value="mr">मराठी</option>
        <option value="gu">ગુજરાતી</option>
      </select>

      <div className="min-h-screen bg-[#FFFFE0] flex flex-col items-center justify-center p-4">
        <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
        <h2 className="text-3xl font-bold text-purple-800 mb-1">{t.welcome}</h2>
        <p className="text-purple-700 mb-6 text-sm">{t.subtitle}</p>

        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm border border-purple-300">
          <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">
            {isLogin ? t.login : t.signup}
          </h3>

          <div className="flex flex-col space-y-3">

            {!isLogin && (
              <input
                type="text"
                placeholder={t.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-purple-300 rounded px-3 py-2 focus:outline-purple-600"
              />
            )}

            <input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-purple-600"
            />

            <input
              type="password"
              placeholder={t.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-purple-300 rounded px-3 py-2 focus:outline-purple-600"
            />

            {!isLogin && (
              <input
                type="password"
                placeholder={t.confirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-purple-300 rounded px-3 py-2 focus:outline-purple-600"
              />
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-purple-800 text-[#FFFFE0] py-2 rounded-md font-semibold mt-2 hover:bg-purple-900"
            >
              {isLogin ? t.login : t.getStarted}
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-purple-700">
            {isLogin ? t.noAccount : t.haveAccount}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-purple-900 underline"
            >
              {isLogin ? t.signup : t.login}
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default AuthPage;
