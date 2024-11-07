import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Combined Tab Panel Component
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

// Main Component with Horizontal and Vertical Tabs
export default function HorizontalVerticalTabs() {
  const [horizontalValue, setHorizontalValue] = React.useState(0);
  const [verticalValue, setVerticalValue] = React.useState(0);

  const handleHorizontalChange = (event, newValue) => {
    setHorizontalValue(newValue);
    setVerticalValue(0); // Reset vertical tab selection on horizontal tab change
  };

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue);
  };

  const verticalTabContent = [
    ["Full Stack Developer", "Backend Engineer", "Frontend Engineer"],
    ["Support Role", "Customer Success", "Technical Support"],
    ["Data Entry", "Document Control", "Operations"]
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {/* Horizontal Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={horizontalValue} onChange={handleHorizontalChange} aria-label="horizontal tabs">
          <Tab label="Technical" {...a11yProps(0)} />
          <Tab label="Non Technical" {...a11yProps(1)} />
          <Tab label="Non IT" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Vertical Tabs within Selected Horizontal Tab */}
      <TabPanel value={horizontalValue} index={0}>
        <Box sx={{ display: 'flex', height: 224 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={verticalValue}
            onChange={handleVerticalChange}
            aria-label="Vertical tabs for Technical"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {verticalTabContent[0].map((label, index) => (
              <Tab key={index} label={label} {...a11yProps(index)} />
            ))}
          </Tabs>
          {verticalTabContent[0].map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              {content} details go here.
            </TabPanel>
          ))}
        </Box>
      </TabPanel>

      <TabPanel value={horizontalValue} index={1}>
        <Box sx={{ display: 'flex', height: 224 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={verticalValue}
            onChange={handleVerticalChange}
            aria-label="Vertical tabs for Non Technical"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {verticalTabContent[1].map((label, index) => (
              <Tab key={index} label={label} {...a11yProps(index)} />
            ))}
          </Tabs>
          {verticalTabContent[1].map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              {content} details go here.
            </TabPanel>
          ))}
        </Box>
      </TabPanel>

      <TabPanel value={horizontalValue} index={2}>
        <Box sx={{ display: 'flex', height: 224 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={verticalValue}
            onChange={handleVerticalChange}
            aria-label="Vertical tabs for Non IT"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            {verticalTabContent[2].map((label, index) => (
              <Tab key={index} label={label} {...a11yProps(index)} />
            ))}
          </Tabs>
          {verticalTabContent[2].map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              {content} details go here.
            </TabPanel>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
}
