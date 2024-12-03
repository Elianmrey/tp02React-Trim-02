import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const adjustDateTimeForTimezone = (dateString: string | undefined | null): Date => {
    if (!dateString) return new Date();
    const dateUTC = dayjs.utc(dateString); // Converter para UTC
    const dateInLocalTimezone = dateUTC.tz("America/Sao_Paulo"); // Ajustar para o fuso horário local
    return new Date(dateInLocalTimezone.format()); // Converter para `Date`
};

interface DataObject {
    [key: string]: { value: any };
}

const handleChange = (
    data: DataObject,
    setData: (data: DataObject) => void,
    value: any,
    field: string
): void => {
    const updatedData = { ...data, [field]: { value } };
    setData(updatedData);
};

export { handleChange, adjustDateTimeForTimezone };
