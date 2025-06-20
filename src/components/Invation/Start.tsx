import React from "react";
import kirill from "../../assets/Kirill.jpg";
import katya from "../../assets/Katya.jpg";
import { FaHeart } from "react-icons/fa";
import { CountdownTimer } from "../CountDownTimer";
import wedLogo from "../../assets/weddingLogo.png"

export const Start: React.FC = () => {
  return (
    <div className=" bg-blue-100 flex flex-col items-center justify-center text-center font-serif px-4 py-5 pt-10 space-y-4">
        
        
        
        {/* Логотип и приглашение в левом верхнем углу */}
  <div className="absolute top-4 left-4 flex items-center space-x-3">
    <img
      src={wedLogo}
      alt="Логотип свадьбы"
      className="w-8 h-8 sm:w-12 sm:h-12 object-cover"
    />
    <span className="font-great text-gray-700 text-xl sm:text-base font-semibold">
      Приглашение
    </span>
  </div>



      {/* 👶 Фото с подписями */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-10  sm:space-y-0">
        {/* Кирилл */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative p-1 bg-white  shadow-lg">
            <img
              src={kirill}
              alt="Кирилл в детстве"
              className="w-32 h-32 sm:w-40 sm:h-40  object-cover"
            />
            <div className="flex justify-center">
              <span className="font-great text-xl text-gray-700 pt-2">Кирилл</span>
            </div>
          </div>
        </div>

        {/* Плюс */}
        <div className="font-great text-5xl sm:text-5xl font-bold text-black-500">
          +
        </div>

        {/* Екатерина */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative p-1 bg-white  shadow-lg">
            <img
              src={katya}
              alt="Катя в детстве"
              className="w-32 h-32 sm:w-40 sm:h-40  object-cover"
            />

            <div className="flex justify-center">
              <span className="font-great text-xl text-gray-700 pt-2">
                Екатерина
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ❤️ K + E = ❤️ */}
      <div className="text-2xl sm:text-5xl font-cursive font-bold text-black-600 drop-shadow-sm mt-4">
        <span className="font-great">K</span> +{" "}
        <span className="font-great">E</span> ={" "}
        <FaHeart className="inline text-red-500 animate-bounce" />
      </div>

      {/* ✨ Подпись */}
      <div className="uppercase text-sm sm:text-base tracking-widest text-gray-600">
        Мы выросли, и теперь нам можно
      </div>

      {/* 📅 Дата */}
      <div className=" text-m sm:text-3xl font-medium text-gray-800">
        15 июля 2025
      </div>

      {/* ⏳ Таймер */}
      <div className="mt-6">
        <CountdownTimer />
      </div>
    </div>
  );
};
