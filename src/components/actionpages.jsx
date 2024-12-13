import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Switch, FormControlLabel, Button, Grid, Alert, Snackbar } from '@mui/material';
import { Settings, Update, Description, Share } from '@mui/icons-material';

// Simple Settings Page
const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    autoUpdate: true
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  });

  const handleSettingChange = (setting) => (event) => {
    const newValue = event.target.checked;
    setSettings(prev => ({
      ...prev,
      [setting]: newValue
    }));
    setSnackbar({
      open: true,
      message: `${setting.charAt(0).toUpperCase() + setting.slice(1)} ${newValue ? 'enabled' : 'disabled'}`
    });
  };

  const handleSave = () => {
    setSnackbar({
      open: true,
      message: 'Settings saved successfully'
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        <Settings sx={{ mr: 1, verticalAlign: 'middle' }} />
        Settings
      </Typography>
      
      <Card>
        <CardContent>
          <FormControlLabel 
            control={
              <Switch 
                checked={settings.notifications} 
                onChange={handleSettingChange('notifications')}
              />
            }
            label="Enable Notifications"
          />
          <br />
          <FormControlLabel 
            control={
              <Switch 
                checked={settings.autoUpdate} 
                onChange={handleSettingChange('autoUpdate')}
              />
            }
            label="Auto Update"
          />
          <br />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
            Save Settings
          </Button>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
};

// Simple Update Status Page
const UpdateStatusPage = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString());
  const [updating, setUpdating] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  });

  const handleUpdate = () => {
    setUpdating(true);
    setSnackbar({
      open: true,
      message: 'Updating weather data...'
    });

    // Simulate update process
    setTimeout(() => {
      setLastUpdate(new Date().toLocaleString());
      setUpdating(false);
      setSnackbar({
        open: true,
        message: 'Weather data updated successfully'
      });
    }, 2000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        <Update sx={{ mr: 1, verticalAlign: 'middle' }} />
        Update Status
      </Typography>
      
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Last Update: {lastUpdate}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Current Temperature: 22°C
          </Typography>
          <Typography variant="body1" gutterBottom>
            Conditions: Partly Cloudy
          </Typography>
          <Button 
            variant="contained" 
            sx={{ mt: 2 }}
            onClick={handleUpdate}
            disabled={updating}
          >
            {updating ? 'Updating...' : 'Update Now'}
          </Button>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
};

// Simple Generate Report Page
const GenerateReportPage = () => {
    const [options, setOptions] = useState({
      temperature: true,
      humidity: true
    });
    const [generating, setGenerating] = useState(false);
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: ''
    });
  
    const handleOptionChange = (option) => (event) => {
      const newValue = event.target.checked;
      setOptions(prev => ({
        ...prev,
        [option]: newValue
      }));
      setSnackbar({
        open: true,
        message: `${option.charAt(0).toUpperCase() + option.slice(1)} data ${newValue ? 'included' : 'excluded'}`
      });
    };
  
    const handleGenerate = () => {
      setGenerating(true);
      setSnackbar({
        open: true,
        message: 'Generating report...'
      });
  
      // Simulate report generation delay
      setTimeout(() => {
        // Create a link to download the PDF
        const link = document.createElement('a');
        link.href = './report.pdf';
        link.download = `weather-report-${new Date().toISOString().split('T')[0]}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        setGenerating(false);
        setSnackbar({
          open: true,
          message: 'Report downloaded successfully'
        });
      }, 3000);
    };
  
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          <Description sx={{ mr: 1, verticalAlign: 'middle' }} />
          Generate Report
        </Typography>
        
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel 
                  control={
                    <Switch 
                      checked={options.temperature} 
                      onChange={handleOptionChange('temperature')}
                    />
                  }
                  label="Include Temperature Data"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel 
                  control={
                    <Switch 
                      checked={options.humidity} 
                      onChange={handleOptionChange('humidity')}
                    />
                  }
                  label="Include Humidity Data"
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained"
                  onClick={handleGenerate}
                  disabled={generating}
                  startIcon={<Description />}
                >
                  {generating ? 'Generating Report...' : 'Generate & Download Report'}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
  
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          message={snackbar.message}
        />
      </Box>
    );
  };

// Simple Share Page
const ShareWeatherDataPage = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('https://weather.example.com/share/abc123')
      .then(() => {
        setSnackbar({
          open: true,
          message: 'Link copied to clipboard'
        });
      });
  };

  const handleShare = () => {
    setSnackbar({
      open: true,
      message: 'Sharing options opened'
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        <Share sx={{ mr: 1, verticalAlign: 'middle' }} />
        Share Weather Data
      </Typography>
      
      <Card>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Share URL: https://weather.example.com/share/abc123
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item>
              <Button variant="contained" onClick={handleCopy}>
                Copy Link
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handleShare}>
                Share
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Box>
  );
};

export {
  SettingsPage,
  UpdateStatusPage,
  GenerateReportPage,
  ShareWeatherDataPage
};