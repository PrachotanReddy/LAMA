import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function CardManagementPage() {
    return (
        <div className="text-center m-5-auto" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
            height: "100vh",
            flexDirection: 'column',
            background:'#222'
          }}>
            <h2>CardManagementPage</h2>
            <form action="/home">
                <p>
                    <input type="text" name="Loanid" placeholder='Loan ID' required />
                </p>
                <p> Loan Type


                                        <select>


                                            {loantype. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                                         </select>
                                    </p>
                <p>


                <p> Duration


                                                        <select>


                                                            {duration. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                                                         </select>
                                                    </p>
                                  <p>
                                                       <button id ="sub_btn" type ="submit" > Add Data </button>
                                                   </p>

            </form>
        </div>
    )
}


const loantype = [


    { label : "Furniture" ,
    value : "furniture" } ,

    {


        label : "Stationary" ,

        value : "stationary"
    }


    {
    label : "Crockery",
    value: "crockery"

    }



] ;



const duration =

[


    { label : "1" ,
    value : "1" } ,
{ label : "2" ,
    value : "2" } ,
    { label : "3" ,
        value : "3" } ,
        { label : "4" ,
            value : "4" } ,
            { label : "5" ,
                value : "5" }




]