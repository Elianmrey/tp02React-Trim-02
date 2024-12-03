
import { DateTimePicker } from '@mui/x-date-pickers-pro';
import MaterialBox from './MaterialBox.tsx';
import { adjustDateTimeForTimezone, handleInputChange } from "../Core/Corefunctions";
import { useAppContext } from '../../Context/Context.tsx';
import dayjs from 'dayjs';
interface MaterialDatePickerProps {
    data: {
        start_date?: Date | null;
        end_date?: Date | null;
     },
     setData: (data: object) => void
 }

export default function MaterialDatePicker({ data }: MaterialDatePickerProps) { 
    
    const { translate } = useAppContext();

    return (
        <MaterialBox styles={styles.container}>
               <DateTimePicker
    value={data?.start_date ? adjustDateTimeForTimezone(dayjs(data.start_date)) : null}
                    label={translate("data-hour-start")}
                    name="start_date"
                    fullWidth
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    onChange={(value: Date | null) => {
                        if (value) {
                            handleInputChange("start_date", value, data, setData);
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