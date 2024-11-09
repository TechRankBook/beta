import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Jobmodal from './Jobmodal';

function TechCard({ name, logo, onClick }) {
  return (
    <Card
      sx={{
        width: 130,
        height: 100,
        backgroundColor: 'white',
        boxShadow: 7,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      }}
      onClick={onClick}
    >
      <CardMedia component="img" height="60" image={logo} alt={name} />
      <CardContent>
        <Typography variant="body2" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

TechCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function HorizontalVerticalTabs() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedJobId, setSelectedJobId] = React.useState(null);

  const handleHorizontalChange = (event, newValue) => {
    setHorizontalValue(newValue);
    setVerticalValue(0);
  };

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue);
  };

  const handleOpen = (jobId) => {
    setSelectedJobId(jobId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedJobId(null);
  };

  const techData = {
    "Frontend Engineer": [
      { id: 1, name: "React", logo: `${process.env.PUBLIC_URL}/assets/meta.png` },
      { id: 2, name: "Vue.js", logo: `${process.env.PUBLIC_URL}/assets/vue.png` },
      { id: 3, name: "Angular", logo: `${process.env.PUBLIC_URL}/assets/angular.png` },
      { id: 4, name: "JavaScript", logo: `${process.env.PUBLIC_URL}/assets/js.png` },
      { id: 5, name: "HTML5", logo: `${process.env.PUBLIC_URL}/assets/html5.png` },
      { id: 6, name: "CSS3", logo: `${process.env.PUBLIC_URL}/assets/css3.png` },
      { id: 7, name: "Sass", logo: `${process.env.PUBLIC_URL}/assets/sass.png` },
      { id: 8, name: "Bootstrap", logo: `${process.env.PUBLIC_URL}/assets/bootstrap.png` },
      { id: 9, name: "jQuery", logo: `${process.env.PUBLIC_URL}/assets/jquery.png` },
      { id: 10, name: "Webpack", logo: `${process.env.PUBLIC_URL}/assets/webpack.png` },
    ],
  };

  const verticalTabContent = [
    ["Full Stack Developer", "Backend Engineer", "Frontend Engineer", "Mobile App Developer", "Software Developer", "Data Scientist", "DevOps Engineer"],
    ["Support Role", "Customer Success", "Technical Support"],
    ["Data Entry", "Document Control", "Operations"],
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Typography variant="h4" align="center" sx={{ my: 3 }}>
        Apply for Jobs
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={horizontalValue}
          onChange={handleHorizontalChange}
          aria-label="horizontal tabs"
        >
          <Tab label="Technical" {...a11yProps(0)} sx={{ fontSize: '16px' }} />
          <Tab label="Non Technical" {...a11yProps(1)} sx={{ fontSize: '16px' }} />
          <Tab label="Non IT" {...a11yProps(2)} sx={{ fontSize: '16px' }} />
        </Tabs>
      </Box>

      <TabPanel value={horizontalValue} index={0}>
        <Box sx={{ display: 'flex', height: 300 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={verticalValue}
            onChange={handleVerticalChange}
            aria-label="Vertical tabs for Technical"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {verticalTabContent[0].map((label, index) => (
              <Tab key={index} label={label} {...a11yProps(index)} sx={{ fontSize: '16px', marginLeft: -2}} />
            ))}
          </Tabs>

          <Box sx={{ flexGrow: 1 }}>
            {verticalTabContent[0].map((content, index) => (
              <TabPanel value={verticalValue} index={index} key={index}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    height: 300,
                    width: '100%',
                    overflowY: 'auto',
                    padding: 3,
                  }}
                >
                  {(techData[content] || []).map((tech) => (
                    <Grid item xs={6} sm={6} md={2.4} key={tech.id}>
                      <TechCard
                        name={tech.name}
                        logo={tech.logo}
                        onClick={() => handleOpen(tech.id)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            ))}
          </Box>
        </Box>
      </TabPanel>

      <Jobmodal open={open} handleClose={handleClose} jobId={selectedJobId} />
    </Box>
  );
}
