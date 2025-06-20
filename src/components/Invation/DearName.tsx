import React from "react";
import k_k from "../../assets/K-K.jpg";

interface DearNameProps {
  nameGuest: string;
  gender: string;
}

export const DearName: React.FC<DearNameProps> = ({ nameGuest, gender }) => {
  return (
    <div className="bg-white text-center px-4 py-10 max-w-md mx-auto font-serif text-gray-800 space-y-6 relative overflow-hidden">

  {/* 💫 Декоративный фон */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-transparent opacity-60 z-0 pointer-events-none"></div>

  {/* 💌 Заголовок */}
  <h1 className="font-great relative z-10 text-4xl sm:text-5xl font-[Great_Vibes] italic text-rose-600 drop-shadow-sm leading-snug">
    {gender === "m" ? "Дорогой " : gender === "w" ? "Дорогая " : "ПРЕКОЛ"}{nameGuest}!
  </h1>

  {/* 📖 Текст */}
  <p className="relative z-10 text-[17px] leading-relaxed text-gray-700 px-2">
    Мы рады сообщить Вам, что <br />
    <span className="font-semibold text-rose-500">15.07.2025</span> состоится самое важное торжество в нашей жизни —
    день нашей свадьбы!
    <br /><br />
    Приглашаем Вас разделить с нами радость этого незабываемого дня.
  </p>

  {/* 🕒 Дата и время */}
  <div className="relative z-10 text-lg font-medium text-gray-900 tracking-wide">
    15 июля 2025 в 12:40
  </div>

  {/* 👩‍❤️‍👨 Фото */}
  <div className="relative z-10 flex justify-center">
    <div className="overflow-hidden rounded-[50%/35%] border-[3px] border-white shadow-lg w-[240px] h-[340px] bg-white">
      <img
        src={k_k}
        alt="Couple"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</div>

  );
};
