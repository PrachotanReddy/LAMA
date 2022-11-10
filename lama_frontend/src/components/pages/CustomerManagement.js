import React from 'react'

import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

import '../../App.css'


import "react-datepicker/dist/react-datepicker.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

export default function CustomerManagementPage() {




    return (
        <div className="text-center m-5-auto" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
            height: "100vh",
            flexDirection: 'column',
            background: '#222'
        }} >


            <h2> Customer Management </h2>
            <form action="" >


                            <p>
                                <input type="text" name="employeeid" placeholder='Employee Id' required />
                            </p>





                            <p>
                                <input type="text" name="employeename" placeholder='Employee Name' required />
                            </p>


                        <div className="text-center m-5-auto selectbox" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }} >


                                <Form.Select className='selectboxes'>

                                    <option value="" disabled selected>Department</option>
                                    {options.map((option) => (<option value={option.value} > {option.label} </option>))}

                                </Form.Select>





                                <Form.Select className='selectboxes'>

                                    <option value="" disabled selected>Gender</option>
                                    {gender.map((option) => (<option value={option.value} > {option.label} </option>))}

                                </Form.Select>






                                <Form.Select className='selectboxes'>

                                    <option value="" disabled selected>Designation</option>
                                    {designation.map((option) => (<option value={option.value} > {option.label} </option>))}

                                </Form.Select>


                        </div>



                            <p style={{ marginTop: ".6rem" }}>

                                <FloatingLabel controlId="floatingSelect" label="Date of Birth">
                                    <Form.Control type="date" name='date_of_birth'
                                        calendarDate={calendarDate}
                                        locale="en-US"
                                    />
                                </FloatingLabel>

                            </p>



                            <p>
                                <FloatingLabel controlId="floatingSelect" label="Date of Joining">
                                    <Form.Control type="date" name='date_of_joining'
                                        calendarDate={calendarDate}
                                        locale="en-US"
                                    />
                                </FloatingLabel>
                            </p>








                <p>
                    <button id="sub_btn" type="submit" > Add Data </button>
                </p>


            </form>


            <table>



<tr>

<th>Employee Id</th>
<th>Employee Name</th>
<th>Department</th>
<th>Gender</th>
<th>Designation</th>
<th>Date of Birth</th>
<th>Date of Joining</th>
</tr>


            </table>
            <div>
            <Link to="/dashboard">
                <button className="primary-button">Menu</button>
            </Link>
            <Link to="/logout">
                <button className="primary-button">Logout</button>
            </Link>
            </div>

        </div>
    )

}

const options = [
    {
        label: "Finance",
        value: "finance"
    },

    {


        label: "Technology",
        value: "technology"
    },

    {
        label: "Hr",
        value: "hr"


    },


    {


        label: "Sales",
        value: "sales"

    }




];

const gender = [


    {
        label: "Male",
        value: "male"
    },

    {


        label: "Female",

        value: "female"
    }



];

const designation =
    [



        {
            label: "Manager",
            value: "manager"
        },

        {
            label: "Executive",
            value: "executive"
        },

        {
            label: "Sr executive",
            value: "sr executive"

        },

        {
            label: "Sales",
            value: "sales"
        }
    ];

const calendarDate = new Date(2022, 1, 1)