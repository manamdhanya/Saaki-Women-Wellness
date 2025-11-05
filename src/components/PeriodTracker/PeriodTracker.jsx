import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../Assests/Logo.png";
import { translations } from "./translation";

const handleLogout = () => {
  localStorage.removeItem("sakhi_token");
  window.location.href = "/";
};

const PeriodTracker = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [calendarDays, setCalendarDays] = useState([]);
  const [calendarHeader, setCalendarHeader] = useState("");

  const generateCalendar = () => {
    if (!lastPeriod || !cycleLength) {
      alert(t.pleaseEnterDetails);
      return;
    }

    const startDate = new Date(lastPeriod);
    const nextMonth = new Date(startDate);
    nextMonth.setMonth(startDate.getMonth() + 1);

    const month = nextMonth.getMonth();
    const year = nextMonth.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    setCalendarHeader(
      `📅 ${nextMonth.toLocaleDateString(language, {
        month: "long",
        year: "numeric",
      })}`
    );

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysArray = [];

    // Add empty cells before 1st date
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push({ label: "", type: "" });
    }

    // Loop through each day of the target month
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const currentDay = new Date(year, month, dayNum);
      const diffDays = Math.floor(
        (currentDay - startDate) / (1000 * 60 * 60 * 24)
      );

      // Cycle repeats every `cycleLength`
      const phaseDay =
        ((diffDays % cycleLength) + cycleLength) % cycleLength + 1;

      let type = "";
      let emoji = "";

      // ✅ Correct phase mapping
      if (phaseDay >= 1 && phaseDay <= 5) {
        type = "menstruation";
        emoji = "🩸";
      } else if (phaseDay >= 6 && phaseDay <= 11) {
        type = "follicular";
        emoji = "💧";
      } else if (phaseDay >= 12 && phaseDay <= 16) {
        type = "ovulation";
        emoji = "🌞";
      } else if (phaseDay >= 17 && phaseDay <= cycleLength) {
        type = "luteal";
        emoji = "🌙";
      }

      daysArray.push({ label: `${dayNum} ${emoji}`, type });
    }

    setCalendarDays(daysArray);
    setShowCalendar(true);
    setShowTips(false);
  };

  const getPhaseStyle = (type) => {
    switch (type) {
      case "menstruation":
        return "bg-pink-300 border-pink-500 text-pink-900 font-semibold";
      case "follicular":
        return "bg-blue-300 border-blue-500 text-blue-900 font-semibold";
      case "ovulation":
        return "bg-yellow-300 border-yellow-500 text-yellow-900 font-semibold";
      case "luteal":
        return "bg-purple-300 border-purple-500 text-purple-900 font-semibold";
      default:
        return "bg-gray-100 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFE0] text-purple-900">
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
          <Link to="/period-tracker" className="underline text-[#910AE4]">{t.periodTracker}</Link>
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


      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 py-10 w-full">
        {/* Input Section */}
        {!showCalendar && (
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col">
            <label className="font-semibold mb-2">🩸 {t.lastPeriodDate}</label>
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              className="border-2 border-purple-700 rounded-lg p-2 mb-4 w-full"
            />

            <label className="font-semibold mb-2">📅 {t.cycleLength}</label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              placeholder="28"
              className="border-2 border-purple-700 rounded-lg p-2 mb-4 w-full"
            />

            <button
              onClick={generateCalendar}
              className="bg-purple-700 text-yellow-50 py-2 rounded-lg font-bold hover:bg-purple-900 transition w-full"
            >
              {t.showCalendar}
            </button>
          </div>
        )}

        {/* Calendar Section */}
        {showCalendar && !showTips && (
          <div className="w-full max-w-3xl mt-6 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {calendarHeader}
            </h2>

            <div className="grid grid-cols-7 gap-2 text-center w-full">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-bold">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg border min-h-[60px] flex items-center justify-center text-sm sm:text-base ${getPhaseStyle(
                    day.type
                  )}`}
                >
                  {day.label}
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-center">
              🩸 = {t.period} (Day 1–5) <br />
              💧 = {t.follicular} (Day 6–11) <br />
              🌞 = {t.ovulation} (Day 12–16) <br />
              🌙 = {t.luteal} (Day 17–28)
            </p>

            <button
              onClick={() => setShowTips(true)}
              className="mt-4 bg-purple-700 text-yellow-50 py-2 px-4 rounded-lg font-bold hover:bg-purple-900 transition"
            >
              🌟 {t.phaseTips}
            </button>
          </div>
        )}

        {/* Tips Section */}
        {showTips && (
          <div className="w-full max-w-3xl mt-6 flex flex-col items-center space-y-4">
            <h3 className="bg-pink-200 w-full text-center py-2 rounded-lg font-semibold">
              🩸 {t.period} (Day 1–5)
            </h3>
            <p className="text-center">{t.tipPeriod}</p>
            <p className="text-center">{t.tipIronFood}</p>

            <h3 className="bg-blue-200 w-full text-center py-2 rounded-lg font-semibold">
              💧 {t.follicular} (Day 6–11)
            </h3>
            <p className="text-center">{t.tipHydrate}</p>
            <p className="text-center">{t.tipWalk}</p>

            <h3 className="bg-yellow-200 w-full text-center py-2 rounded-lg font-semibold">
              🌞 {t.ovulation} (Day 12–16)
            </h3>
            <p className="text-center">{t.tipFertile}</p>
            <p className="text-center">{t.tipProtein}</p>

            <h3 className="bg-purple-200 w-full text-center py-2 rounded-lg font-semibold">
              🌙 {t.luteal} (Day 17–28)
            </h3>
            <p className="text-center">{t.tipRest}</p>
            <p className="text-center">{t.tipWarmDrink}</p>

            <button
              onClick={() => setShowTips(false)}
              className="mt-6 bg-purple-700 text-yellow-50 py-2 px-4 rounded-lg font-bold hover:bg-purple-900 transition"
            >
              ⬅ {t.backToCalendar}
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-14 px-4">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Sakhi Didi Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
          <span className="font-semibold text-purple-800 text-xs sm:text-lg">
            {t.copyright}
          </span>
        </div>

        <div className="flex space-x-6 pb-2 text-xl sm:text-2xl justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="https://www.facebook.com/"
            className="text-purple-500 hover:text-[#9a02f8]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-purple-500 hover:text-[#9a02f8]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/i/flow/login"
            className="text-purple-500 hover:text-[#9a02f8]"
          >
            <FaXTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PeriodTracker;