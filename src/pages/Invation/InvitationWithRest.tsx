import { useParams } from "react-router-dom";
import { Start } from "../../components/Invation/Start";
import { DearName } from "../../components/Invation/DearName";
import { WeddingSchedule } from "../../components/Invation/WeddingSchedule";
import { PreferencesForm } from "../../components/Invation/PreferencesForm";

export const InvitationWithRest: React.FC = () => {
 
  const { encoded } = useParams<{ encoded: string }>();

let decodedName = "Гость";
let decodedGender = "g";

if (encoded) {
  try {
    const decoded = decodeURIComponent(escape(atob(encoded)));
    const [gender, name] = decoded.split("|");
    decodedName = name;
    decodedGender = gender;
  } catch (error) {
    console.error("Ошибка при декодировании:", error);
  }
}




  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-rose-200 relative">
        {/* Красивая шапка */}
        <div className="bg-rose-600 py-12 px-6 text-center relative overflow-hidden rounded-t-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-500 opacity-50 z-0"></div>
          <h1 className="text-5xl font-serif font-bold text-white mb-2 relative z-10">
            Кирюша & Катюша
          </h1>
          <h2 className="text-xl text-white font-semibold relative z-10">
            Свадьба мечты
          </h2>
        </div>

        <div className="px-8 py-6">
          <Start />
          <DearName
            nameGuest={decodedName ? decodedName : "Гость"}
            gender={decodedGender ? decodedGender : "g"}
          />

          {/* Информация */}
          <div className="p-8 md:p-12 space-y-6">
            <h2 className="text-2xl font-semibold text-rose-600">Меню</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Меню разнообразно, поэтому сообщите нам заранее, если у вас есть
              какие-либо предпочтения или диетические ограничения. После
              подтверждения вы сможете пройти опрос о своих вкусовых
              предпочтениях и напитках.
            </p>

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

            <WeddingSchedule />

            <PreferencesForm nameGuest={decodedName} />
          </div>
        </div>

        {/* Фон с узорами */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-200 to-transparent opacity-20 z-0"></div>
      </div>
    </div>
  );
};
