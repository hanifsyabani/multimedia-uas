import { FaRegCompass } from "react-icons/fa";
import { Button } from "./ui/button";

export default function ButtonJelajah() {
  return (
    <Button className="bg-blue-600 hover:bg-blue-800 mt-4 cursor-pointer">
      <FaRegCompass size={20} />
      Mulai Jelajah
    </Button>
  );
}
