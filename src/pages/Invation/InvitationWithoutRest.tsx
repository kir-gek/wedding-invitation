import { useParams } from "react-router-dom";

export const InvitationWithoutRest: React.FC = () => {
  const { name } = useParams();
  const decodedName = name ? decodeURIComponent(name) : null;
  console.log(decodedName);

  return (
   <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center p-6">
  <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-100">
    {/* Красивая шапка */}
    <div className="bg-rose-500 py-8 px-6 text-center">
      <h1 className="text-4xl font-serif font-bold text-white mb-2">Кирюша & Катюша</h1>
      <p className="text-rose-100 text-lg">15 июля 2025</p>
    </div>

    <div className="p-8 md:p-12 space-y-6">
      <h1 className="text-3xl font-serif text-rose-800 text-center">
        Дорогой(ая) <span className="font-bold">{decodedName}!</span>
      </h1>

      <div className="space-y-4 text-gray-700 text-center">
        <p className="text-xl">Приглашаем вас на нашу свадьбу!</p>
        
        <div className="flex flex-col items-center space-y-1">
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>15 июля 2025 года</span>
          </p>
          
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>ВДНХ, Москва</span>
          </p>
          
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Начало в 12:30</span>
          </p>
        </div>
      </div>

      {/* Ваш оригинальный контент */}
      <div className="text-center py-4 border-t border-b border-rose-100 my-6">
        <h1 className="text-2xl font-bold text-rose-600">Вы пососёте хуй</h1>
        <h2 className="text-xl text-rose-500">Никакого нахуй ресторана</h2>
      </div>

      {/* Кнопка подтверждения */}
      <div className="text-center pt-4">
        <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition duration-300">
          Подтвердить присутствие
        </button>
      </div>
    </div>
  </div>
</div>
  );
};
