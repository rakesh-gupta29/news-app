import {createContext, useState} from "react"

 export const MethodContext = createContext()

 export const MethodProvider =(props) =>{
     const [loading,setLoading] = useState(true)
     const [data_used,setDataUsed] = useState([])
     const [serachLanguage,setSearchLanguage] = useState("en")
    const searchAction =(paramObject) =>{
    fetch(`https://materialnews123.herokuapp.com/news/india ${paramObject.query}/${paramObject.language || serachLanguage}`,{
        method:"POST",
    })
    .then(res => res.json())
    .then(data => {
        setDataUsed([data])
        setLoading(false)
    })
    .catch(err => alert("An Error Has Occured"))
    }


    const contextObject ={
        isLoading:loading,
        setLoading:setLoading,
        data_used:data_used,
        searchFetch :searchAction,
        setSearchLanguage:setSearchLanguage,
    }


    return(
        <MethodContext.Provider value={contextObject}>
            {props.children}
        </MethodContext.Provider>
    )
}