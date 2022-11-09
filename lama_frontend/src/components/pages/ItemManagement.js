import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

export default function ItemManagementPage() {
    return (
        <div className="text-center m-5-auto" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%",
            height: "100vh",
            flexDirection: 'column',
            background: '#222'
        }}>
            <h2>Item Management</h2>
            <form action="">






                <p>
                    <input type="text" name="Itemid" placeholder='Item ID' required />
                </p>





                <p>
                    <input type="text" name="Itemdescription" placeholder='Item Description' required />
                </p>



                <div className="text-center m-5-auto selectbox" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }} >





                    <Form.Select className='selectboxes'>



                        <option value="" disabled selected>Issue Status</option>


                        {issuestatus.map((option) => (<option value={option.value} > {option.label} </option>))}




                    </Form.Select>






                    <Form.Select className='selectboxes'>






                        <option value="" disabled selected>Item Category</option>


                        {itemcategory.map((option) => (<option value={option.value} > {option.label} </option>))}





                    </Form.Select>

                    <Form.Select className='selectboxes'>





                        <option value="" disabled selected>Item Make</option>


                        {itemsmake.map((option) => (<option value={option.value} > {option.label} </option>))}




                    </Form.Select>





                    <p>
                        <input type="text" name="Itemvalue" placeholder='Item Value' required />
                    </p>








                </div >






                <p>
                    <button id="sub_btn" type="submit" > Add Data </button>
                </p>
            </form >


            <table>
            <tr>
            <th>Item ID</th>

            <th>Item Description</th>

            <th>Issue Status</th>

            <th>Item Category</th>

            <th>Item Make</th>
            <th>Item Value</th>

            </tr>

            
            </table>

        </div>



    )
}


const issuestatus = [


    {
        label: "Yes",
        value: "yes"
    },


    {
        label: "No",

        value: "no"

    }



];



const itemcategory = [


    {
        label: "Furniture",
        value: "furniture"
    },

    {


        label: "Stationary",

        value: "stationary"
    },


    {
        label: "Crockery",
        value: "crockery"

    }



];

const itemsmake = [

    {

        label: "Wodden",

        value: "wodden"
    },

    {
        label: "Glass",

        value: "glass"

    },

    {
        label: "Plastic",

        value: "plastic"

    }

];