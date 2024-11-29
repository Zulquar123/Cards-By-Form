export default function Card({ user, deleteCard, id }) {
  const { image, name, email } = user;
  return (
    <div className="w-64 h-80 border-2 rounded-xl border-sky-600 flex-col justify-center items-center ">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="Profle Picture"
          className="w-[110px] h-[110px] rounded-full "
        />
      </div>
      <div className="flex flex-col gap-0.5 justify-center items-center">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-sm text-gray-400 font-semibold">{email}</p>
      </div>
      <p className="text-justify p-3 leading-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        obcaecati aperiam nihil omnis dolor sit consectetur.
      </p>

      <div className="flex justify-center">
        <button
          className="border-2 border-sky-600 px-2 rounded text-sky-500 font-semibold"
          onClick={() => deleteCard(id)}
        >
          Delete ❌
        </button>
      </div>
    </div>
  );
}
