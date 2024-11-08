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

// Reusable TechCard Component
function TechCard({ name, logo }) {
  return (
    <Card sx={{ width: 120, height: 150 }}>
      <CardMedia
        component="img"
        height="80"
        image={logo}
        alt={name}
      />
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
};

// Tab Panel Component
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
          {children}
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

  // Technology data for each vertical tab category
  const techData = {
    "Frontend Engineer": [
      { name: "React", logo: "https://link-to-react-logo.png" },
      { name: "Vue.js", logo: "https://link-to-vue-logo.png" },
      { name: "Angular", logo: "https://link-to-angular-logo.png" },
      { name: "JavaScript", logo: "https://link-to-js-logo.png" },
    ],
    "Backend Engineer": [
      { name: "Node.js", logo: "https://link-to-nodejs-logo.png" },
      { name: "Express", logo: "https://link-to-express-logo.png" },
      { name: "Django", logo: "https://link-to-django-logo.png" },
      { name: "Spring", logo: "https://link-to-spring-logo.png" },
    ],
    "Full Stack Developer": [
      { name: "MongoDB", logo: "https://link-to-mongodb-logo.png" },
      { name: "GraphQL", logo: "https://link-to-graphql-logo.png" },
      { name: "Firebase", logo: "https://link-to-firebase-logo.png" },
      { name: "REST API", logo: "https://link-to-restapi-logo.png" },
    ],
    "Support Role": [
      { name: "Zendesk", logo: "https://link-to-zendesk-logo.png" },
      { name: "Freshdesk", logo: "https://link-to-freshdesk-logo.png" },
      { name: "Salesforce", logo: "https://link-to-salesforce-logo.png" },
      { name: "LiveChat", logo: "https://link-to-livechat-logo.png" },
    ],
    "Customer Success": [
      { name: "Intercom", logo: "https://link-to-intercom-logo.png" },
      { name: "HubSpot", logo: "https://link-to-hubspot-logo.png" },
      { name: "Gainsight", logo: "https://link-to-gainsight-logo.png" },
      { name: "UserIQ", logo: "https://link-to-useriq-logo.png" },
    ],
    "Technical Support": [
      { name: "TeamViewer", logo: "https://link-to-teamviewer-logo.png" },
      { name: "AnyDesk", logo: "https://link-to-anydesk-logo.png" },
      { name: "Splashtop", logo: "https://link-to-splashtop-logo.png" },
      { name: "LogMeIn", logo: "https://link-to-logmein-logo.png" },
    ],
    "Data Entry": [
      { name: "Microsoft Excel", logo: "https://link-to-excel-logo.png" },
      { name: "Google Sheets", logo: "https://link-to-sheets-logo.png" },
      { name: "Airtable", logo: "https://link-to-airtable-logo.png" },
      { name: "Notion", logo: "https://link-to-notion-logo.png" },
    ],
    "Document Control": [
      { name: "DocuSign", logo: "https://link-to-docusign-logo.png" },
      { name: "Adobe Acrobat", logo: "https://link-to-adobe-logo.png" },
      { name: "Dropbox", logo: "https://link-to-dropbox-logo.png" },
      { name: "SharePoint", logo: "https://link-to-sharepoint-logo.png" },
    ],
    "Operations": [
      { name: "SAP ERP", logo: "https://link-to-sap-logo.png" },
      { name: "Oracle ERP", logo: "https://link-to-oracle-logo.png" },
      { name: "Jira", logo: "https://link-to-jira-logo.png" },
      { name: "Trello", logo: "https://link-to-trello-logo.png" },
    ],
  };

  const verticalTabContent = [
    ["Full Stack Developer", "Backend Engineer", "Frontend Engineer"],
    ["Support Role", "Customer Success", "Technical Support"],
    ["Data Entry", "Document Control", "Operations"],
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {/* Main Heading */}
      <Typography variant="h4" align="center" sx={{ my: 3 }}>
        Apply for Jobs
      </Typography>

      {/* Horizontal Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , alignItems: 'center' }}>
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
              <Tab key={index} label={label} {...a11yProps(index)} sx={{ fontSize: '16px' }} />
            ))}
          </Tabs>
          {verticalTabContent[0].map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              <Grid container spacing={2}>
                {techData[content]?.map((tech, i) => (
                  <Grid item xs={3} key={i}>
                    <TechCard name={tech.name} logo={tech.logo} />
                  </Grid>
                ))}
              </Grid>
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
              <Tab key={index} label={label} {...a11yProps(index)} sx={{ fontSize: '16px' }} />
            ))}
          </Tabs>
          {verticalTabContent[1].map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              <Grid container spacing={2}>
                {techData[content]?.map((tech, i) => (
                  <Grid item xs={3} key={i}>
                    <TechCard name={tech.name} logo={tech.logo} />
                  </Grid>
                ))}
              </Grid>
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
              <Tab key={index} label={label} {...a11yProps(index)} sx={{ fontSize: '16px' }} />
            ))}
          </Tabs>
          {verticalTabContent[2].map((content, index) => (
            <TabPanel value={verticalValue} index={index} key={index}>
              <Grid container spacing={2}>
                {techData[content]?.map((tech, i) => (
                  <Grid item xs={3} key={i}>
                    <TechCard name={tech.name} logo={tech.logo} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
}

