import { Grid, Container } from '@mui/material'
import useSettings from '@Hooks/useSettings'
import Layout from '@Layouts/index'
import Page from '@Components/Page'
import {
  BookingBookedRoom,
  BookingTotalIncomes,
  BookingRoomAvailable,
  BookingWidgetSummary,
  BookingReservationStats
} from '../../sections/@dashboard/general/booking'
import {
  BookingIllustration,
  CheckInIllustration,
  CheckOutIllustration
} from '../../assets'

GeneralBooking.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default function GeneralBooking() {
  const { themeStretch } = useSettings()

  return (
    <Page title="General: Banking">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <BookingWidgetSummary
              title="Total Booking"
              total={714000}
              icon={<BookingIllustration />}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary
              title="Check In"
              total={311000}
              icon={<CheckInIllustration />}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary
              title="Check Out"
              total={124000}
              icon={<CheckOutIllustration />}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <BookingTotalIncomes />
              </Grid>

              <Grid item xs={12} md={8}>
                <BookingBookedRoom />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BookingRoomAvailable />
              </Grid>

              <Grid item xs={12} md={6}>
                <BookingReservationStats />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}
