import { FC } from 'react'

import { Box, CircularProgress } from '@mui/material'

const Loader: FC = () => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
);

export { Loader }
