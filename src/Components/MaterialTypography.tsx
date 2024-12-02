import { Typography, TypographyProps } from "@mui/material";


interface MaterialTypographyProps {
    children: React.ReactNode;
    variant: TypographyProps['variant'];
    styles: React.CSSProperties;
    component: TypographyProps['component'];
}

export default function MaterialTypography({ children, variant, styles, component = 'span' }: MaterialTypographyProps) {
    return (
        <Typography variant={variant} sx={styles} component={component}>
            {children}
        </Typography>
    );
}