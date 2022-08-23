import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';


function Loader() {
  return (
    <Stack alignItems="center">
      <CircularProgress color="secondary" />
    </Stack>
   );
}

export default Loader;
