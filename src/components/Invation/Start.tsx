import React from "react";
import kirill from "../../assets/Kirill.jpg";
import katya from "../../assets/Katya.jpg";
import { FaHeart } from "react-icons/fa";
import { CountdownTimer } from "../CountDownTimer";

export const Start: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center font-serif p-4 space-y-6">
      <div className="space-y-2">
        <div className="relative inline-block">
          <img
            src={kirill} // замени на путь к первой фотографии
            alt="Groom childhood"
            width={200}
            height={200}
            className="rounded-md"
          />
          <span className="absolute -top-2 -left-4 text-xl text-gray-500">
            ♡
          </span>
        </div>

        <div className="text-2xl font-bold">+</div>

        <div className="relative inline-block">
          <img
            src={katya} // замени на путь ко второй фотографии
            alt="Bride childhood"
            width={200}
            height={200}
            className="rounded-md"
          />
          <span className="absolute -top-2 -right-4 text-xl text-gray-500">
            ♡
          </span>
        </div>
      </div>

      <div className="text-3xl font-cursive">
        <span className="italic">K</span> + <span className="italic">E</span> ={" "}
        <FaHeart className="inline text-pink-500" />
      </div>

      <div className="uppercase text-lg tracking-widest mt-2">
        Мы выросли, и теперь нам можно
      </div>

      <div className="text-2xl font-medium">15 июля 2025</div>

      <div className="mt-4">
        <CountdownTimer />
      </div>
    </div>
  );
};
