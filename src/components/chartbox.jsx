import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ChartBox({title,info}) {
    const theme = useTheme();
  
return (
  <div >
    <Card sx={{ display: 'flex' ,mb: 4}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h9"  component="div">
            <a href={info}>click here</a>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  </div>
)}