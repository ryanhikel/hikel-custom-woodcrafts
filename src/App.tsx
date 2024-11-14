import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // A brown color for wood theme
    },
    secondary: {
      main: '#D2691E', // A lighter brown
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Navigation />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Home />
          <About />
          <OurStory />
          <Gallery />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;