import { Container, Grid } from '@mui/material'
import useSettings from '@Hooks/useSettings'
import Layout from '@Layouts/index'
import Page from '@Components/Page'
import { BookingCheckInWidgets } from '../../sections/@dashboard/general/booking'
import JsonData_1 from 'public/data_1.json'
import JsonData_2 from 'public/data_2.json'
import { AppAreaInstalled } from '../../sections/@dashboard/general/app'
import { objChartData } from '../../sections/@dashboard/general/app/types'

GeneralApp.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function GeneralApp() {
  const { themeStretch } = useSettings()
  const DisplayDataString_1 = JsonData_1.resultFinal
  const DisplayDataArray_1 = JsonData_1.resultFinalArray

  const DisplayDataString_2 = JsonData_2.resultFinal
  const DisplayDataArray_2 = JsonData_2.resultFinalArray

  const numberArray_1 = DisplayDataArray_1.map((str) => Number(str))
  const numberArray_2 = DisplayDataArray_2.map((str) => Number(str))

  const CHART_DATA: objChartData = [
    {
      id: 1,
      data: [
        {
          name: 'Com indices',
          data: numberArray_1
        }
      ]
    },
    {
      id: 2,
      data: [
        {
          name: 'Sem indices',
          data: numberArray_2
        }
      ]
    }
  ]

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <BookingCheckInWidgets
                  TOTAL_CHECK_IN={DisplayDataString_1}
                  TOTAL_CHECK_OUT={DisplayDataString_2}
                />
              </Grid>
              <Grid item xs={12}>
                <AppAreaInstalled objChartData={CHART_DATA} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}
