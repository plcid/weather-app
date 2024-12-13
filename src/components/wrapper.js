import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import PreviewIcon from '@mui/icons-material/Preview';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { Air, AppSettingsAlt, CalendarToday, Compress, Description, EventRepeat, IosShare, Notifications, NotificationsActive, NotificationsNone, Opacity, Reply, Share, Thermostat, Today, Update, Warning, WbCloudy } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { event_types, future_events, past_events } from '../const';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Dashboard',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <PreviewIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Conditions',
  },
  {
    segment: 'windspeed',
    title: 'Wind',
    icon: <Air />,
  },
  {
    segment: 'humidity',
    title: 'Humidity',
    icon: <Opacity />,
  },
  {
    segment: 'pressure',
    title: 'Pressure',
    icon: <Compress />,
  },

  {
    segment: 'temperature',
    title: 'Temperature',
    icon: <Thermostat />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Alerts',
  },
  {
    segment: 'pastalerts',
    title: 'Past Alerts',
    icon: <NotificationsNone />,
    children: [{}]
  },
  {
    segment: 'activealerts',
    title: 'Active Alerts',
    icon: <NotificationsActive />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Events',
  },
  {
    segment: 'pastevents',
    title: 'Past Events',
    icon: <EventRepeat />,
    children: past_events.map((event, idx) => ({
      segment: `${idx}`,
      title: `${event_types[event.eventType].replaceAll('_', ' ')} on ${event.startDate.toLocaleDateString()}`,
      icon: <Warning />
    })),
  },
  {
    segment: 'futureevents',
    title: `Future Events`,
    icon: <Today />,
    children: future_events.map((event, idx) => ({
      segment: `${idx}`,
      title: `${event_types[event.eventType].replaceAll('_', ' ')} on ${event.startDate.toLocaleDateString()}`,
      icon: <Warning />
    })),
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Actions',
  },
  {
    segment: 'settings',
    title: 'Edit Settings',
    icon: <AppSettingsAlt />,
  },
  {
    segment: 'updatestatus',
    title: 'Update Status',
    icon: <Update />,
  },
  {
    segment: 'generatereport',
    title: 'Generate Report',
    icon: <Description />,
  },
  {
    segment: 'share',
    title: 'Share Weather Data',
    icon: <Share />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
      xxl:1728,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);
  const navigate = useNavigate();

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        setPathname(path);
        navigate(path)
      }
    };
  }, [pathname]);

  return router;
}

export default function Wrapper({Content}) {
  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: ``,
        title: 'Weather App',
      }}
    >
      <DashboardLayout
        
      >
        <PageContainer
          breadcrumbs={[' ']}
        >
          <Content/>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}