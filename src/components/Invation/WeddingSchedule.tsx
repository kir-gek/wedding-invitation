import React from "react";

export const WeddingSchedule: React.FC = () => {
  return (
    <div className="bg-purple-100 text-gray-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
      {/* Заголовок */}
      <h2 className="text-center text-4xl font-serif italic mb-10 text-black">
        Свадебное <br /> расписание
      </h2>

      {/* Событие 1 */}
      <div className="mb-12">
        <div className="flex space-x-8 items-start">
          {/* Время */}
          <div className="text-right font-bold text-xl min-w-[80px]">
            <div>12:40</div>
            <div className="text-sm font-normal mt-1">15.07.2025</div>
          </div>

          {/* Контент */}
          <div className="flex-1">
            <div className="text-xl font-semibold text-gray-900">
              Торжественная роспись
            </div>
            <div className="text-sm text-gray-700 mt-1 mb-2">
              проспект Мира, д. 119, стр. 421
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Приглашаем вас разделить вместе с нами радость создания новой
              семьи!
            </p>
          </div>
        </div>
      </div>

      {/* Событие 2 */}
      <div>
        <div className="mb-12 flex space-x-8 items-start">
          {/* Время */}
          <div className="text-right font-bold text-xl min-w-[80px]">
            <div>13:40</div>
            <div className="text-sm font-normal mt-1">15.07.2025</div>
          </div>

          {/* Контент */}
          <div className="flex-1">
            <div className="text-xl font-semibold text-gray-900">
              Фотосессия
            </div>
            <div className="text-sm text-gray-700 mt-1 mb-2">
              Выставочный комплекс ВДНХ
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Уважаемые гости, мы хотим сохранить память об этом дне вместе с
              вами. Давайте сделаем общее фото!
            </p>
          </div>
        </div>
      </div>

      {/* Событие 3 */}
      <div>
        <div className="flex space-x-8 items-start">
          {/* Время */}
          <div className="text-right font-bold text-xl min-w-[80px]">
            <div>16:00</div>
            <div className="text-sm font-normal mt-1">15.07.2025</div>
          </div>

          {/* Контент */}
          <div className="flex-1">
            <div className="text-xl font-semibold text-gray-900">
              Ресторан "Segreto"
            </div>
            <div className="text-sm text-gray-700 mt-1 mb-2">
              Ферганская ул., вл17-21
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              После росписи мы переместимся до банкетного зала. Именно здесь мы
              отметим наш незабываемый день.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
