import { useState } from "react";
import CardsContainer from "./CardsContainer";
import Form from "./Form";

export default function App() {
  const [user, setUser] = useState([]);

  const handleSubmitFormData = (data) => {
    setUser((pre) => ({ ...pre, data }));
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <Form handleSubmitFormData={handleSubmitFormData} />
      <CardsContainer user={user} />
    </div>
  );
}
