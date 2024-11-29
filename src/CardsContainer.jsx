import Card from "./Card";
import PropTypes from "prop-types";

export default function CardsContainer({ user, deleteCard }) {
  return (
    <div className="flex gap-2 w-[95%] flex-wrap justify-center">
      {user.map((item, index) => (
        <Card user={item} key={index} id={index} deleteCard={deleteCard} />
      ))}
    </div>
  );
}

CardsContainer.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
};