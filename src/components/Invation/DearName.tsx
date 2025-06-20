import React from "react";
import k_k from "../../assets/K-K.jpg";

interface DearNameProps {
  nameGuest: string;
  gender: string;
}

export const DearName: React.FC<DearNameProps> = ({ nameGuest, gender }) => {
  return (
    <div className="bg-white text-center px-6 py-10 max-w-md mx-auto font-serif text-gray-800 space-y-6">
      {/* Заголовок */}
      <h1 className="text-4xl font-[Great_Vibes] text-black italic">
        {gender === "m" ? "Дорогой " : gender === "w" ? "Дорогая " : "ПРЕКОЛ"}
        {nameGuest}!
      </h1>

      {/* Описание */}
      <p className="text-[17px] leading-relaxed">
        Мы рады сообщить Вам, что <br />
        <span className="font-semibold">15.07.2025</span> состоится самое
        главное торжество в нашей жизни — день нашей свадьбы!
        <br />
        <br />
        Приглашаем Вас разделить с нами радость этого незабываемого дня.
      </p>

      {/* Дата и время */}
      <div className="text-lg font-medium text-black">15.07.2025 в 12:40</div>

      {/* Фото */}
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-[50%/35%] border border-gray-300 w-[240px] h-[340px]">
          <img
            src={k_k} // путь к фото
            alt="Couple"
            className="w-full h-full 
            "
          />
        </div>
      </div>
    </div>
  );
};
