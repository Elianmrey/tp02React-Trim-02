
import FormComponent from "./Form";

interface DiaperProps {
    data: 
    {
        name: string;
        start_date?: string | undefined;
        type?: number;
        observation?: string | undefined;
    };
    setData: (data: object) => void;
    translate: (key: string) => string;
}

export default function Diaper ({ data, setData, translate }: DiaperProps)  {
    const fields: {
        name: string;
        label: string;
        type: "number" | "date" | "select" | "text";
        options?: { value: string | number; label: string; }[];
    }[] = [
            { name: "start_date", label: translate("start-date"), type: "date" },
            { name: "type", label: translate("type"), type: "select", options: [{ value: 1, label: "diaper-wet" }, { value: 2, label: "diaper-dirty" },{ value: 3, label: "diaper-both" }] },
            { name: "observation", label: translate("observation"), type: "text" },
        ];

    const handleSubmit = () => {
        console.log("Dados enviados:", data);
    };
    
    return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};

