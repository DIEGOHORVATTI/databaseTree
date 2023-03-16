import merge from 'lodash/merge'
import { useTheme } from '@mui/material/styles'
import { Card, Typography, Stack, Divider } from '@mui/material'
import useResponsive from '../../../../hooks/useResponsive'
import ReactApexChart, { BaseOptionChart } from '@Components/chart'

const CHART_SIZE = { width: 106, height: 106 }

type Props = {
  TOTAL_CHECK_IN: string
  TOTAL_CHECK_OUT: string
}

const BookingCheckInWidgets = ({ TOTAL_CHECK_IN, TOTAL_CHECK_OUT }: Props) => {
  const theme = useTheme()
  const CHART_DATA_CHECK_IN = [Number(TOTAL_CHECK_IN) * 100]
  const CHART_DATA_CHECK_OUT = [Number(TOTAL_CHECK_OUT) * 100]

  const isDesktop = useResponsive('up', 'sm')

  const chartOptionsCheckIn = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    grid: {
      padding: {
        top: -9,
        bottom: -9
      }
    },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '64%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            fontSize: theme.typography.subtitle2.fontSize
          }
        }
      }
    }
  })

  const chartOptionsCheckOut = {
    ...chartOptionsCheckIn,
    colors: [theme.palette.chart.yellow[0]]
  }

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation={isDesktop ? 'vertical' : 'horizontal'}
            flexItem
            sx={{ borderStyle: 'dashed' }}
          />
        }
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          sx={{ width: 1, py: 5 }}
        >
          <ReactApexChart
            type="radialBar"
            series={CHART_DATA_CHECK_IN}
            options={chartOptionsCheckIn}
            {...CHART_SIZE}
          />
          <div>
            <Typography variant="h4" sx={{ mb: 0.5 }}>
              {TOTAL_CHECK_IN}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.72 }}>
              Com indices
            </Typography>
          </div>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          sx={{ width: 1, py: 5 }}
        >
          <ReactApexChart
            type="radialBar"
            series={CHART_DATA_CHECK_OUT}
            options={chartOptionsCheckOut}
            {...CHART_SIZE}
          />
          <div>
            <Typography variant="h4" sx={{ mb: 0.5 }}>
              {TOTAL_CHECK_OUT}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.72 }}>
              Sem indices
            </Typography>
          </div>
        </Stack>
      </Stack>
    </Card>
  )
}

export default BookingCheckInWidgets
