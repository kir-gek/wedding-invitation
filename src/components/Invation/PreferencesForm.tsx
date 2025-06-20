import React, { useState } from "react";
import { createZapis } from "../../api";

interface Forminterface {
  nameGuest: string | null;
}

export const PreferencesForm: React.FC<Forminterface> = ({ nameGuest }) => {
  const [foodPreference, setFoodPreference] = useState("");
  const [alcoholPreference, setAlcoholPreference] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reqDone, setReqDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // начинаем загрузку

    try {
      await createZapis(
        nameGuest ? nameGuest : "Гость",
        "идёт",
        foodPreference,
        alcoholPreference,
        comment
      );
      setReqDone(true)
      alert("Спасибо! Ваши предпочтения учтены 💌");
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-rose-50 rounded-2xl p-8 shadow-xl border border-rose-100 max-w-2xl mx-auto">
      <h2 className="text-center text-3xl font-serif text-rose-800 mb-6">
        Ваши предпочтения
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-gray-800  relative z-10"
      >
        {/* Блок: предпочтения по еде */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-rose-700">
            Есть ли у вас особые предпочтения по еде?
          </h3>
          <div className="space-y-2 pl-2">
            {[
              "нет",
              "предпочитаю мясо",
              "предпочитаю рыбу",
              "вегетарианец",
            ].map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name="food"
                  value={option}
                  checked={foodPreference === option}
                  onChange={(e) => setFoodPreference(e.target.value)}
                  className="mr-2 accent-rose-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Блок: алкоголь */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-rose-700">
            Какой алкоголь вы предпочитаете?
          </h3>
          <div className="space-y-2 pl-2">
            {[
              "красное вино",
              "белое вино",
              "шампанское",
              "виски",
              "коньяк",
              "не буду пить алкоголь",
            ].map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name="alcohol"
                  value={option}
                  checked={alcoholPreference === option}
                  onChange={(e) => setAlcoholPreference(e.target.value)}
                  className="mr-2 accent-rose-500"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Блок: комментарий */}
        <div>
          <label
            htmlFor="comment"
            className="block font-medium text-rose-700 mb-2"
          >
            Комментарий
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full border border-rose-200 rounded-lg p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Напишите здесь, если хотите что-то добавить..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {/* Кнопка */}
        <div className="text-center pt-4">
          {!isLoading ? (
            <button
              type="submit"
              className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full shadow-lg transform hover:scale-105 transition duration-300"
              disabled={isLoading}
            >
              Подтвердить присутствие
            </button>
          ) : (
            // Простой спиннер (можно заменить на любую анимацию)
            <div className="inline-block w-8 h-8 border-4 border-rose-600 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>

        {reqDone && (
  <div className="text-white bg-green-600 text-xl font-bold px-6 py-4 rounded-lg animate-pulse select-none">
    Спасибо, ваш ответ учтён!
  </div>
)}

      </form>
    </div>
  );
};
