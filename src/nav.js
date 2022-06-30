
import {useContext, useState} from 'react';
import Drawer from "./drawer"
import {MethodContext} from "./context"
import {AppBar,Toolbar,Typography,IconButton,Switch,makeStyles} from "@material-ui/core"
import {MenuRounded,SearchRounded} from "@material-ui/icons"
import Search from "./search"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:10,
    
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  hindiText:{
    marginRight:10
  },
  colorNav:{
    backgroundColor:"#475B5A"

  }
}));

const Nav =() => {
  const {setSearchLanguage} = useContext(MethodContext)
  const [visible,setVisible] = useState(false)
  const [searchVisible,setSearchVisible] = useState(false)

  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.colorNav}>
          <IconButton onClick={() =>{
            setVisible(!visible)
          }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuRounded  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Neews
          </Typography>
          <Typography>
          Aa
          </Typography>
          <Switch value="en" onChange={() =>setSearchLanguage(prev => {
            if(prev === "en"){return "hi"}
            else{return "en"}
          }) } className={classes.switch} />
            <Typography className={classes.hindiText}>
            अ
            </Typography>

          <IconButton onClick={() => setSearchVisible(prev => !prev)} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <SearchRounded />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
    <div style={{height:"65px",width:"100%"}}></div>
    <Drawer visible={visible} toggleVisble={setVisible}/>
    {searchVisible?<Search visible={visible}/>:""}
    </>

  );
}

export default Nav