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
<div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
  <div className="w-full max-w-3xl bg-white  shadow-xl overflow-hidden relative">

   

    {/* 🌷 Контент */}
    <div className="">
      <Start />
      <DearName
        nameGuest={decodedName ? decodedName : "Гость"}
        gender={decodedGender ? decodedGender : "g"}
      />

      {/* 🍽️ Блоки информации */}
    <div className="space-y-8 mt-6 sm:mt-8">



      <div
      className="px-4 space-y-8 mt-6 sm:mt-8">
{/* 🍽 Меню */}
<section className="bg-white bg-opacity-90 rounded-xl shadow-md px-5 py-6 border border-rose-100 text-center">
  <h2 className="text-2xl font-bold text-rose-600 mb-2 flex items-center justify-center gap-2">
    🍽 МЕНЮ
  </h2>
  <p className="text-base text-gray-700 leading-relaxed">
    Наше меню будет вкусным и разнообразным — от классических до вегетарианских блюд. <br />
    Пожалуйста, пройдите опрос ниже. Если у вас есть <span className="font-medium text-rose-500">аллергии</span> или предпочтения напишите об этом в поле "комментарий".
  </p>
</section>

{/* 🎁 Подарки */}
<section className="bg-white bg-opacity-90 rounded-xl shadow-md px-5 py-6 border border-rose-100 text-center">
  <h2 className="text-2xl font-bold text-rose-600 mb-2 flex items-center justify-center gap-2">
    🎁 ПОДАРКИ
  </h2>
  <p className="text-base text-gray-700 leading-relaxed">
    Самый лучший подарок — это <span className="text-rose-500 font-semibold">вы рядом с нами</span> в этот день. <br />
    Мы понимаем, что дарить цветы на свадьбу — это традиция и если для вас это важно, то мы с радостью <br></br>примем их! 🌷
  </p>
</section>

{/* 💌 Примечание */}
<section className="bg-white bg-opacity-90 rounded-xl shadow-md px-5 py-6 border border-rose-100 text-center">
  <h2 className="text-2xl font-bold text-rose-600 mb-2 flex items-center justify-center gap-2">
    💌 ПРИМЕЧАНИЕ
  </h2>
  <p className="text-base text-gray-700 leading-relaxed">
    Будем благодарны, если вы <span className="italic">воздержитесь</span> от криков <span className="line-through">"Горько"</span>. Поцелуй — это знак выражения <span className="font-medium text-rose-500">чувств</span>, он не может быть по заказу. Считаем, что он должен оставаться семейным таинством!
  </p>
</section>

</div>


  {/* ⏰ Расписание и форма */}
  <div className="  rounded-xl px-4 py-6 space-y-6 ">
    <WeddingSchedule />
    <PreferencesForm nameGuest={decodedName} />
  </div>
</div>

    </div>

    {/* 🌸 Мягкий декоративный узор */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_0%,_transparent_80%)] opacity-30 pointer-events-none z-0" />
  </div>
</div>

  );
};
