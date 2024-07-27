
import './App.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setFormValue,resetForm} from './store/userData/liveData'
import { Typography } from '@mui/material';
import { TextField, InputAdornment } from '@mui/material';
import { useEffect, useState} from 'react';
import { Button, IconButton, Paper, Stack, Divider } from '@mui/material';
import { Person,InfoOutlined } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      };
      const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
      setTime(formattedTime);
    };

    // Update the time every minute
    updateTime();
    const timerId = setInterval(updateTime, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(timerId);
  }, []);


  const emails = [
    {
      id: 1,
      subject: 'Bravo Academy',
      subSubject: 'Free email marketing course',
      snippet: 'Don’t forget about our meeting tomorrow...',
      time: '9:45 AM',
    },
    {
      id: 1,
      subject: 'Bravo Academy',
      subSubject: 'Free email marketing course',
      snippet: 'Don’t forget about our meeting tomorrow...',
      time: '9:45 AM',
    },
    {
      id: 1,
      subject: 'Bravo Academy',
      subSubject: 'Free email marketing course',
      snippet: 'Don’t forget about our meeting tomorrow...',
      time: '9:45 AM',
    },
    {
      id: 1,
      subject: 'Bravo Academy',
      subSubject: 'Free email marketing course',
      snippet: 'Don’t forget about our meeting tomorrow...',
      time: '9:45 AM',
    },
    // Add more emails as needed
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const EmailRow = styled(ListItem)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  }));
  const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    textAlign: 'center',
  }));
  const dispatch = useDispatch();
  const {
    firstSubjectLine,
    secondSubjectLine,
    previewText
  } = useSelector((state) => state.userData)
  const campaignForm = (event) => {
    console.log("event", event)
    const { name, value } = event.target;
    dispatch(setFormValue({ field: name, value }))
  }
  const EllipsisText = styled(Typography)(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '260px', // Adjust the width as needed
  }));
  const currTime = new Date().toLocaleTimeString();
  useEffect(() => {
  }, [firstSubjectLine, secondSubjectLine, previewText])
  const clearForm = ()=>{

    dispatch(resetForm())
  }
  return (
    <>
      <Container sx={{ padding: 5 }}>
        <Box sx={{display:'flex', alignItems:'start'}}>
        <CheckCircleIcon sx={{marginRight:'15px', color:'green'}}/>
        <Box>
        <Typography variant="h1" sx={{letterSpacing:'1px'}}>Subject</Typography>
        <Typography variant="body1" sx={{marginBottom:'20px',marginTop:'5px'}}>
          Add a subject line for this compaign
        </Typography>
        </Box>
        <CloseIcon sx={{position:'absolute', right:'30px'}}/>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box sx={{display:'flex', alignItems:'end', marginBottom:'10px',marginTop:'10px',color:'#000'}}>
            <Typography variant="h3" gutterBottom>
              Subject Line
            </Typography>
            <HelpIcon color="primary" sx={{width:18,marginLeft:'10px'}}/>
            </Box>
            <Stack spacing={2}>
              <TextField
                sx={{
                  '& .MuiInputBase-input': {
                    borderLeft: 1,
                    paddingLeft: 10,
                    borderColor: '#ccc',
                    paddingBottom: '5px',
                    paddingTop: '5px',
                    paddingLeft: '10px'
                  },
                }}
                name="firstSubjectLine"
                id="firstSubjectLine"
                onChange={campaignForm}
                value = {firstSubjectLine}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end">
                      <Person />
                    </IconButton>
                  ),
                  startAdornment: (
                    <InputAdornment position="start" >
                      <div></div>
                      <Typography>A</Typography> {/* Use an icon here if preferred */}
                    </InputAdornment>
                  ),
                }}
              />
              <Box display="flex" justifyContent="flex-end">
                <Button variant="outlined" sx={{ width: 80,borderRadius:'15px', color:'#000', fontWeight:'900', borderColor:"#ccc"}}  >
                  Use AI
                </Button>
              </Box>
              <TextField
                sx={{
                  '& .MuiInputBase-input': {
                    borderLeft: 1,
                    paddingLeft: 10,
                    borderColor: '#ccc',
                    paddingBottom: '5px',
                    paddingTop: '5px',
                    paddingLeft: '10px'
                  },
                }}
                name="secondSubjectLine"
                id="secondSubjectLine"
                onChange={campaignForm}
                value={secondSubjectLine}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" >
                      <div></div>
                      <Typography>B</Typography> {/* Use an icon here if preferred */}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton edge="end">
                      <Person />
                    </IconButton>
                  ),

                }}
              />
              <Box display="flex" justifyContent="flex-end">
                <Button variant="outlined" sx={{ width: 80,borderRadius:'15px', color:'#000', fontWeight:'900', borderColor:"#ccc"}} >
                  Use AI
                </Button>
              </Box>
              <Box sx={{display:'flex', alignItems:'end', marginBottom:'10px',marginTop:'10px',color:'#000'}}>
            <Typography variant="h3" gutterBottom>
              Preview Text
            </Typography>
            <HelpIcon color="primary" sx={{width:18, marginLeft:'10px'}}/>
            </Box>
              <TextField
                name='previewText'
                id="previewText"
                onChange={campaignForm}
                value = {previewText}
                sx={{
                  '& .MuiInputBase-input': {
                    borderColor: '#ccc',
                    paddingBottom: '5px',
                    paddingTop: '5px !important'
                  },
                }}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end">
                      <InfoOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Stack>


          </Grid>
          <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'end' }}>
            <Box xs={12} md={12}
              sx={{
                height: 550,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start',
                backgroundImage: 'url(/iphone.png)',  // Replace with your image URL
                backgroundSize: '100%',
                backgroundPosition: '0 0',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                width: 550,
                p: 2,
                position: 'relative'
              }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '154px',
                  width: '80%'
                }}>
                <AppBar position="static" sx={{backgroundColor:'#fff', boxShadow:'none',}}>
                  <Toolbar sx={{backgroundColor:'#fff', boxShadow:'none',minHeight:'35px !important'}}>
                    <IconButton edge="start" color="inherit" aria-label="back" sx={{color:'#000'}}>
                      <ArrowBackIcon />
                    </IconButton>
                    <Title variant="h6" sx={{color:'#000'}}>Inbox</Title>
                    <IconButton edge="end" color="inherit" aria-label="more" sx={{color:'#000'}}>
                      <MoreVertIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <List>
                  {
                    firstSubjectLine && <EmailRow>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <EllipsisText sx={{marginBottom:'2px'}}>
                          <Typography variant='h2'>{firstSubjectLine}</Typography>
                        </EllipsisText>
                        
                      }
                      secondary={
                        <>
                        <EllipsisText>
                        <Typography variant="h3" color="textSecondary">
                          {secondSubjectLine}
                          </Typography>
                        </EllipsisText>
                         
                          <EllipsisText>
                          <Typography variant="body2" color="textSecondary">
                            {previewText}
                          </Typography>
                          </EllipsisText>
                        </>
                      }
                    />
                    <Typography variant="body2" color="textSecondary" sx={{ ml: 'auto' }}>
                      {
                        
                        time
                      }
                    </Typography>
                    <IconButton edge="end">
                      <StarBorderIcon />
                    </IconButton>
                  </EmailRow>
                  }
                
      {emails.map((email) => (
        <EmailRow key={email.id}>
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='h2' sx={{marginBottom:'2px'}}>{email.subject}</Typography>
            }
            secondary={
              <>
                <Typography variant="h3" color="textSecondary">
                  {email.subSubject}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {email.snippet}
                </Typography>
              </>
            }
          />
          <Typography variant="body2" color="textSecondary" sx={{ ml: 'auto' }}>
            {email.time}
          </Typography>
          <IconButton edge="end">
            <StarBorderIcon />
          </IconButton>
        </EmailRow>
      ))}
    </List>
              </Box>
            </Box>

          </Grid>

        </Grid>
        <Box>
          <Typography variant="body1" sx={{display:'flex', justifyContent:'end',marginTop:'70px', fontSize:'13px', color:'#787777',marginBottom:'20px'}}>
            Actual email preview may vary depending on the email client
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
      <Button variant="outlined"  sx={{backgroundColor:'#fff', border:'none'}} onClick={clearForm}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" sx={{backgroundColor:'grey', borderRadius:'20px'}}>
        Save
      </Button>
    </Box>
      </Container>


    </>

  );
}

export default App;
