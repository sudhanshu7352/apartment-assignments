
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./home.css"
export const HomePage =()=>{
  const [flat,setFlat] =useState([])
    const history =useNavigate()
   useEffect(()=>{
    axios.get("https://apartment-man.herokuapp.com/block").then((res)=>{
        setFlat([...res.data])
        console.log(res.data)
    })
   },[])
   const handleLink=(e)=>{
      history(`flat/${e.flat_id[0]._id}`)
   }
    return (
        <div >
            <table className="table_head">
                <thead>
                    <tr>
                        <th>Flat No.</th>
                        <th>Flat Type</th>
                         <th>Block</th>
                    </tr>
                </thead>
                <tbody>
                   {flat.map((e)=>(
                       
                    //    <Link to={`flat/${e._id}`}>
                        //    <div className="link_div">
                       <tr onClick={()=>handleLink(e)} key={e._id}>
                             <td>{e.flat_id[0].flatNo}</td>
                            <td>{e.flat_id[0].flatType}</td>
                            <td>{e.blockName}</td>
                          
                              {/* </div> */}
                      </tr>
                                // </Link>
                   )

                   )}  
                </tbody>
            </table>
        </div>
    )
}