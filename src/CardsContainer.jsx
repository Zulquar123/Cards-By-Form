import Card from "./Card";

export default function CardsContainer({ user }) {
  return (
    <div>
      {user.map((item, index) => (
        <Card user={item} key={index} />
      ))}
    </div>
  );
}
