import React from "react";
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";


const SliderComponent = ({min, max, defaultValue, step, onChange, value, label, unit, amount}) => {
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">{unit} {amount}</Typography>
            </Stack>
            <Slider
                min={min}
                max={max}
                defaultValue={defaultValue}
                step={step}
                marks
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={value}
            />
            <Stack justifyContent="space-between" direction="row">
                <Typography variant='caption' color='text.secondary'>{unit} {min}</Typography>
                <Typography variant='caption' color='text.secondary'>{unit} {max}</Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponent