import { useParams } from "react-router-dom";
import { Start } from "../../components/Invation/Start";
import { DearName } from "../../components/Invation/DearName";

export const InvitationWithoutRest: React.FC = () => {
  const { name } = useParams();
  const { gender } = useParams();
  const decodedName = name ? decodeURIComponent(name) : null;
  const decodedGender = gender ? decodeURIComponent(gender) : null;

  console.log(decodedName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-rose-200 relative">
        {/* Красивая шапка */}
        <div className="bg-rose-600 py-12 px-6 text-center relative overflow-hidden rounded-t-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-500 opacity-50 z-0"></div>
          <h1 className="text-5xl font-serif font-bold text-white mb-2 relative z-10">
            Кирюша & Катюша
          </h1>
        </div>

        <div className="px-8 py-6">
          <Start />
          <DearName
            nameGuest={decodedName ? decodedName : "Гость"}
            gender={decodedGender ? decodedGender : "g"}
          />

          {/* Информация */}
          <div className="p-8 md:p-12 space-y-6">
            <h2 className="text-2xl font-semibold text-rose-600">
              Пожелания по подаркам
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Ваше присутствие в день нашей свадьбы - самый значимый подарок для
              нас! Мы понимаем, что дарить цветы на свадьбу - это традиция и
              если для вас это важно, то мы с радостью примем их!
            </p>

            <h2 className="text-2xl font-semibold text-rose-600">Примечание</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Будем благодарны, если вы воздержитесь от криков "Горько" на
              празднике, ведь поцелуй — это знак выражения чувств, он не может
              быть по заказу и считаем, что он должен оставаться семейным
              таинством!
            </p>
          </div>
        </div>

        {/* Кнопка подтверждения */}
        <div className="text-center pt-4">
          <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Подтвердить присутствие
          </button>
        </div>
      </div>
    </div>
  );
};
