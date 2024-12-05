import { save } from "../../Services/Supabase";
import FormComponent from "./Form";

interface SleepProps {
  data: {
    start_date?: string | undefined;
    end_date?: string | undefined;
    observation?: string | undefined;
  };
  setData: (data: object) => void;
  translate: (key: string) => string;
}

export default function Sleep({ data, setData, translate }: SleepProps) {




const fields: {
  name: string;
  label: string;
  type: "number" | "date" | "text" | "select";
  options?: { value: string | number; label: string; }[];
}[] = [
  { name: "start_date", label: translate("date-hour-start"), type: "date" },
  { name: "end_date", label: translate("date-hour-end"), type: "date" },
  { name: "observation", label: translate("observation"), type: "text" },
];
  const handleSubmit = () => {
    save('items', {...data, action_type: 1}).then((res) => console.log(res));
    setData({});
  };
  
  return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};


