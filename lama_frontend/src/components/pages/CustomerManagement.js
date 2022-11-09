import React from 'react'

import DatePicker from 'react-datepicker' ;
import { Link } from 'react-router-dom' ;

import '../../App.css'


import "react-datepicker/dist/react-datepicker.css" ;
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "bootstrap/dist/css/bootstrap.min.css" ;
import Form from 'react-bootstrap/Form';

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
                <form action ="" >

                <table>

                <tr>

                <td>
                    <p>
                        <input type ="text" name ="employeeid" placeholder ='Employee Id' required />
                    </p>

                    </td>


                    <td>
                    <p>
                        <input type ="text" name ="employeename" placeholder ='Employee Name' required />
                    </p>

                    </td>
                    <div className ="text-center m-5-auto selectbox" style = {{
                display : 'flex' ,
                alignItems : 'center' ,
                justifyContent : 'center' ,
                flexDirection : 'column'
            }} >

            <td>
                        <Form.Select className='selectboxes'>

                        <option value="" disabled selected>Department</option>
                        {options. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                        </Form.Select>

</td>


<td>
                        <Form.Select className='selectboxes'>

                        <option value="" disabled selected>Gender</option>
                        {gender. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                        </Form.Select>


                        </td>


                        <td>
                        <Form.Select className='selectboxes'>

                        <option value="" disabled selected>Designation</option>
                        {designation. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                        </Form.Select>

                        </td>
                    </div>


<td>
                    <p style={{marginTop:".6rem"}}>

                    <FloatingLabel controlId="floatingSelect" label="Date of Birth">
                        <Form.Control type="date" name='date_of_birth'
                            calendarDate = {calendarDate}
                            locale = "en-US"
                        />
                    </FloatingLabel>

                    </p>

                    </td>


                    <td>

                    <p>
                    <FloatingLabel controlId="floatingSelect" label="Date of Joining">
                        <Form.Control type="date" name='date_of_joining'
                            calendarDate = {calendarDate}
                            locale = "en-US"
                        />
                    </FloatingLabel>
                   </p>

                   </td>

</tr>

</table>


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