import Card from '@material-ui/core/Card';
import {makeStyles,CardContent,CardActions,IconButton,Typography,CardMedia} from "@material-ui/core"
import {ShareRounded,ExpandMoreRounded} from "@material-ui/icons"
import { useState,useEffect } from 'react';
const styles = makeStyles({
    root:{
        padding:10,
        margin:" 20px",
    },
    media:{
        height:200,
        width:340,
        background:"lightgrey"
    },
    alerts:{
        backgroundColor:"#dce1e3",
        marginRight:10,
        padding:3
    },
    flex:{
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap"
    },
    actions:{
        justifyContent:"flex-end",
        height:10,
        paddingRight:20,
        paddingBottom:15
    },
    content:{
        minWidth:300,
        flex:"1",
    },
    rotate:{
        transform: 'rotate(180deg)'
    },
})




const Tiles =({data}) =>{
    console.log(data)
    const [additiona_info,setAdditionalInfo] = useState(false)
    const show = data.summary
    const design = styles()
    useEffect(() =>{
        setAdditionalInfo(false)
    },[data])
    return(
        <Card className={design.root}>
            <div className ={design.flex}>
                <div>
                    <CardMedia
                    className={design.media}
                    image={data.media}
                    title="Item Photo"
                    src=""
                    />
                </div>
                <div  className={design.content}>
                    <CardContent >
                        <Typography variant="caption">
                            by:
                        </Typography>
                    <Typography  className={design.alerts} variant="caption" color="textSecondary" display="inline" >
                    {data.clean_url} 
                    </Typography>

                    

                    <Typography variant="h5" color="textSecondary" gutterBottom  component="p">
                        {data.title}
                    </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                        {additiona_info?show:""}
                    </Typography>
                </CardContent>
                <CardActions className={design.actions}>
                <IconButton className={{[design.rotate]:additiona_info}} onClick={() =>{
                    setAdditionalInfo(!additiona_info);
                }}>
                    <ExpandMoreRounded />
                </IconButton>
                <IconButton onClick={() =>{
                    window.open(data.link)
                }} edge="end" className={design.share_btn} >
                    <ShareRounded/>
                </IconButton>
            </CardActions>  

                </div>
                

            </div>

        </Card>
    )
}
export default Tiles