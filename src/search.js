import {useContext,useRef} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {MethodContext} from "./context"
import {Select,FormControl,MenuItem,InputLabel,makeStyles,TextField,Button} from "@material-ui/core"


const useStyles = makeStyles(() => ({
  textField:{
    width:500,
    marginRight:10,
    marginBottom:10
  },
  flex:{
      display:"flex",
      padding:10,
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap"
  },
  button:{
    height:50,
    marginBottom:10

  },
  inputLabel:{
    border:"1px solid red"
  },
  formControl:{
    marginBottom:10,
    marginRight:10,
    width:110
  }
}));


const Search =() =>{
    const {searchFetch,setLoading} = useContext(MethodContext)
    const languageRef = useRef()
    const queryRef = useRef("ichduivh")

    const design = useStyles();
    const handleSubmit =(event) =>{
      event.preventDefault()
      setLoading(true)
      const body ={
        query:queryRef.current.value,
        language:languageRef.current.value
      }
      searchFetch(body)
    }

  return (
      <form onSubmit={(event) => handleSubmit(event)}>
          <div className={design.flex}>

        <TextField inputRef={queryRef} className={design.textField}   label="Enter Search Topic" variant="outlined" />
          <FormControl variant="outlined" className={design.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Language </InputLabel>
          <Select autoWidth
            label="Language"
            inputRef={languageRef}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"hi"}>Hindi</MenuItem>
          </Select>
        </FormControl>

        <Button
        type="submit"
          variant="outlined"
          color="primary"
          className={design.button}
          startIcon={<SearchIcon />}
        >
        Search
        </Button> 

      </div>
    </form>
  );
}

export default Search