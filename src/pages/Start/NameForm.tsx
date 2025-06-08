import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NameForm() {
  const [name, setName] = useState("");
  const [restState, setRestState] = useState("");
  const [gender, setGender] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim()) {
      navigate(`/invite${restState}/${gender}/${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Создать приглашение
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя гостя"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="" disabled>
              Пол человека
            </option>
            <option value="m">Мужчина</option>
            <option value="w">Женщина</option>
            <option value="g">Фу а это че</option>
          </select>
        </div>
        <div>
          <select
            value={restState}
            onChange={(e) => setRestState(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="" disabled>
              Едут в ресторан?
            </option>
            <option value="456">Ясен хуй</option>
            <option value="876">Ннихуя не едут</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Создать ссылку
        </button>
      </form>

      {name.trim() && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-2">
            Ссылка для <span className="font-semibold">{name}</span>:
          </p>

          <div className="flex items-center space-x-2">
            <code className="flex-1 p-2 bg-white border border-gray-300 rounded text-sm overflow-x-auto">
              {window.location.origin}/invite{restState}/{gender}/
              {encodeURIComponent(name)}
            </code>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `${
                    window.location.origin
                  }/invite${restState}/${gender}/${encodeURIComponent(name)}`
                )
              }
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition duration-200"
              title="Копировать"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
