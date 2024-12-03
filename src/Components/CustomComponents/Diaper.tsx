import { useEffect } from "react";
import { Button, Grid2, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { handleInputChange, selectItem } from '../../Utils/Utils.tsx';
import { adjustDateTimeForTimezone } from "../../Utils/Core.tsx";
import dayjs from 'dayjs';
import MaterialDatePicker from "../MaterialDatePicker.tsx";
interface DiaperProps {
    data: {
        start_date?: Date | null;
        type?: number;
        observation?: string;
        action_type?: number;
    };
    setData: (data: object) => void;
    translate: (key: string) => string;
}

const Diaper = ({ data, setData, translate }: DiaperProps) => {
    useEffect(() => {
        if (!data?.action_type) {
            setData({ ...data, action_type: 3 });
        }
    }, [data, setData]);

    const handleTypeSelection = (type: number) => {
        selectItem(type, "type", data, setData);
    };

    return (
        <Grid2 container spacing={2}>
            <Grid2 item xs={12}>
               <MaterialDatePicker data={data} setData={setData} translate={translate} />
            </Grid2>
            <Grid2 item xs={12}>
                <Button
                    color={data.type === 1 ? "secondary" : "primary"}
                    onClick={() => handleTypeSelection(1)}
                >
                    {translate("diaper-wet")}
                </Button>
                <Button
                    color={data.type === 2 ? "secondary" : "primary"}
                    onClick={() => handleTypeSelection(2)}
                >
                    {translate("diaper-dirty")}
                </Button>
                <Button
                    color={data.type === 3 ? "secondary" : "primary"}
                    onClick={() => handleTypeSelection(3)}
                >
                    {translate("diaper-both")}
                </Button>
                <Button
                    color={data.type === 4 ? "secondary" : "primary"}
                    onClick={() => handleTypeSelection(4)}
                >
                    {translate("diaper-clean")}
                </Button>
            </Grid2>
            <Grid2 item xs={12}>
                <TextField
                    value={data?.observation || ""}
                    label={translate("observation")}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("observation", event.target.value, data, setData)
                    }
                    name="observation"
                    rows={6}
                    fullWidth
                    multiline
                />
            </Grid2>
        </Grid2>
    );
};

export default Diaper;
