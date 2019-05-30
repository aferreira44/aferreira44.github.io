import React from 'react'
import { Helmet } from "react-helmet";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import Footer from '../UI/Footer'
import Header from '../UI/Header'
import CssBaseline from '@material-ui/core/CssBaseline';

class Layout extends React.Component {
  state = {
    drawerOpened: false
  };

  componentDidMount() {
    /* Google Tag Manager */
    if (!['localhost', 's3', 'cloudfront'].some((e) => { return window.location.hostname.includes(e) })) {
      (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-N3Q4DJ');

      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');

      noscript.appendChild(iframe);

      iframe.setAttribute("src", "https://www.googletagmanager.com/ns.html?id=GTM-N3Q4DJ");
      iframe.setAttribute("height", "0");
      iframe.setAttribute("width", "0");
      iframe.setAttribute("style", "display:none;visibility:hidden");

      document.body.prepend(noscript);
    }
    /* End Google Tag Manager */
  }

  toggleDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <CssBaseline />
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="google-site-verification" content="Uvks456skSsvBaBg4pM4V_ZvGivMNvpPbtgKcuWWL-E" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              André Ferreira
            </Typography>
          </Toolbar>
        </AppBar>
        <Header />
        <Drawer open={this.state.drawerOpened} onClose={this.toggleDrawer} variant="temporary">
          <List>
            <ListItem button key='Home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button key='About'>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button key='Work'>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary='Work' />
            </ListItem>
            <ListItem button key='Contact'>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Contact' />
            </ListItem>
          </List>
        </Drawer>
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout;