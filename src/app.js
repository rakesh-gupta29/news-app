import { useEffect ,useContext} from "react";
import Tiles from "./tiles.js"
import Loader from "./loader.js"
import Nav from "./nav.js"
import {MethodContext} from "./context"
import {Typography} from "@material-ui/core"



const App =() =>{
  const{data_used,searchFetch,isLoading} = useContext(MethodContext)
    useEffect(() =>{
      searchFetch({query:"india national"})
    },[])

    return(
        <>
        <Nav  />
        {isLoading?<Loader/>:
          <div style={{maxWidth:"900px",minWidth:"390px",margin:"auto",padding:"20px"}}>
            <Typography align="right" color="textSecondary" gutterBottom={false} variant="body2">
             Total Items : {data_used["0"]["result"].length}
            </Typography>
            {data_used["0"]["result"].map((item,key) => <Tiles key ={key} data={item}/>)}
            </div>
        }
       </>
)
}
export default App