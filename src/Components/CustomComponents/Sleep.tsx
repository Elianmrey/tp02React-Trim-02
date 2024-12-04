import FormComponent from "./Form";

interface SleepProps {
  data: {
    start_date?: string | undefined;
    end_date?: string | undefined;
    observation?: string | undefined;
    action_type?: number | undefined;
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
  { name: "start_date", label: translate("Start Date"), type: "date" },
  { name: "end_date", label: translate("End Date"), type: "date" },
  { name: "observation", label: translate("Observation"), type: "text" },
];
  const handleSubmit = () => {
    console.log("Submitted data:", data);
  };

  return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};


