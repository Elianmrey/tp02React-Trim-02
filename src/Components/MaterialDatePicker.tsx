
import { DateTimePicker } from '@mui/x-date-pickers-pro';
import MaterialBox from './MaterialBox.tsx';
import {  handleInputChange } from "../Utils/Utils.tsx";
import { useAppContext } from '../../Context/Context.tsx';
import dayjs, { Dayjs } from 'dayjs';
interface MaterialDatePickerProps {
    data: {
        start_date?: Date | null | undefined,
        end_date?: Date | null | undefined,
    },
    setData: (data: object) => void
}

export default function MaterialDatePicker({ data, setData }: MaterialDatePickerProps) {

    const { translate } = useAppContext();

    return (
        <MaterialBox styles={styles.container}>
            
            <DateTimePicker
                value={data?.start_date ? dayjs(data.start_date).format('DD/MM/YYYY HH:mm') : null}
                label={translate("data-hour-start")}
                name="start_date"
                sx={{ width: '100%' }}
                ampm={false}
                format="DD/MM/YYYY HH:mm"
                onChange={(value: Dayjs | null) => {
                    if (value) {
                        handleInputChange("start_date", value.toDate(), data, setData);
                    }
                }}
            />
        </MaterialBox>

    );
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#181717',
        borderRadius: 15,
    }
};