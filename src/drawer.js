import design from "./drawer.module.css"
import {Typography,List,ListItem,ListItemText} from "@material-ui/core"
import {MethodContext} from "./context"
import {useContext} from "react"

const Drawer =({visible,toggleVisble}) =>{
  const {searchFetch,setLoading} = useContext(MethodContext)
  const topics = ["All","National","Business","Sports",,"Entertainment","Politics","Science","Startup",""]
  

      
    return(
        <>
        <div style={{width:visible?"250px":"0px"}} className={design.sidenav}>
        <Typography variant="body1" align="center">
            Categories
        </Typography>
        <hr />
        <List component="nav" aria-label="main mailbox folders">
        {topics.map((item,key) => {
             
            return  <ListItem key={key} button onClick={() =>{
              searchFetch({query:item.toLowerCase() || "hatke"});
              toggleVisble();
              setLoading(true)
            }} >
             <ListItemText primary={item ||"Funny"}/>
             </ListItem>
           })}
      </List>

        </div>
        </>

    )
}
export default Drawer
