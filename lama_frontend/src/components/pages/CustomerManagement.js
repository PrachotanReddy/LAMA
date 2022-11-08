import React from 'react'

import DatePicker from 'react-datepicker' ;
import { Link } from 'react-router-dom' ;

import '../../App.css'


import "react-datepicker/dist/react-datepicker.css" ;

import "bootstrap/dist/css/bootstrap.min.css" ;

export default function CustomerManagementPage () {




        return (
            <div className ="text-center m-5-auto" style = {{
                display : 'flex' ,
                alignItems : 'center' ,
                justifyContent : 'center' ,
                width : "100%" ,
                height : "100vh" ,
                flexDirection : 'column' ,
                background : '#222'
            }} >


                <h2> Customer Management </h2>
                <form action ="/home" >
                    <p>
                        <input type ="text" name ="employeeid" placeholder ='Employee Id' required />
                    </p>
                    <p>
                        <input type ="text" name ="employeename" placeholder ='Employee Name' required />
                    </p>




                    <p> Department


                        <select>


                            {options. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                         </select>
                    </p>


                    <p> Gender


                        <select>


                            {gender. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                        </select>
                    </p>
                    <p> Designation


                        <select>


                            {designation. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                        </select>
                    </p>


                    <p>

                        Date Of Birth
                        <DatePicker

                            calendarDate = {calendarDate}
                            locale = "en-US"

                        />

                    </p>

                    <p>

                        Date Of Joining
                        <DatePicker

                            calendarDate = {calendarDate}
                            locale = "en-US"

                        />

                   </p>


                    <p>
                        <button id ="sub_btn" type ="submit" > Add Data </button>
                    </p>


                </form>


            </div>
        )

}

const options = [
    { label : "Finance" ,
     value : "finance" } ,

    {


        label : "Technology" ,
        value : "technology"
    } ,

    {
      label : "Hr" ,
      value : "hr"


    } ,


    {


        label : "Sales" ,
        value : "sales"

    }




] ;

const gender = [


    { label : "Male" ,
    value : "male" } ,

    {


        label : "Female" ,

        value : "female"
    }



] ;

const designation=
    [



        { label : "Manager" ,
        value : "manager"
        } ,

        {
            label : "Executive" ,
            value : "executive"
        } ,

        { label : "Sr executive" ,
         value : "sr executive"

        } ,

        { label : "Sales" ,
        value : "sales"
        }
    ] ;

const calendarDate = new Date ( 2022 , 1 , 1 )