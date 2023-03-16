import merge from 'lodash/merge'
import { useState } from 'react'
import { Card, CardHeader, Box, TextField } from '@mui/material'
import ReactApexChart, { BaseOptionChart } from '@Components/chart'
import { objChartData } from './types'

const AppAreaInstalled = (props: { objChartData: objChartData }) => {
  const [seriesData, setSeriesData] = useState(1)

  const handleChangeSeriesData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSeriesData(Number(event.target.value))
  }

  const chartOptions = merge(BaseOptionChart())

  return (
    <Card>
      <CardHeader
        title="Consultas sequidas para teste de performace em ambiente controlado"
        subheader="Teste de velocidade de tabelas com e sem indices"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': {
                pl: 1,
                py: 0.5,
                pr: '24px !important',
                typography: 'subtitle2'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0.75,
                bgcolor: 'background.neutral'
              },
              '& .MuiNativeSelect-icon': {
                top: 4,
                right: 0,
                width: 20,
                height: 20
              }
            }}
          >
            {props.objChartData.map((item, index) => (
              <option key={index} value={item.id}>
                {item.id}
              </option>
            ))}
          </TextField>
        }
      />

      {props.objChartData.map((item) => (
        <Box key={item.id} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.id === seriesData && (
            <ReactApexChart
              type="line"
              series={item.data}
              options={chartOptions}
              height={364}
            />
          )}
        </Box>
      ))}
    </Card>
  )
}

export default AppAreaInstalled
