import React,{useState} from 'react'
import * as utils from '../../services/requests'
import { Link,useNavigate } from 'react-router-dom'

import '../../App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

export default function ItemManagementPage() {
  const navigate = useNavigate();

  const route_ = (path) => {
    navigate(path);
  };

  let [itemId, setItemId] = useState(0);
  let [itemDescription, setItemDescription] = useState("");
  let [issueStatus, setIssueStatus] = useState("");
  let [issueCategory, setIssueCategory] = useState("");
  let [itemCategory, setItemCategory] = useState("");
  let [itemMake, setItemMake] = useState("");
  let [itemValue, setItemValue] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let itemCard= {
        itemId : itemId,
        itemDescription : itemDescription,
        issueStatus : issueStatus,
        issueCategory : issueCategory,
        itemCategory : itemCategory,
        itemMake : itemMake,
        itemValue : itemValue
    };

  console.log(JSON.stringify(itemCard));
  utils
    .post("/addItem", itemCard)
    .then((response) => {
     console.log(response.id);
    })
  };
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
            <form action="" onSubmit={handleSubmit}>






                <p>
                    <input type="number" name="Itemid" placeholder='Item ID' onChange={(e) => setItemId(e.target.value)} required />
                </p>





                <p>
                    <input type="text" name="Itemdescription" placeholder='Item Description' onChange={(e) => setItemDescription(e.target.value)} required />
                </p>



                <div className="text-center m-5-auto selectbox" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }} >





                    <Form.Select className='selectboxes' onChange={(e) => setIssueStatus(e.target.value)}>



                        <option value="" disabled selected>Issue Status</option>


                        {issuestatus.map((option) => (<option value={option.value} > {option.label} </option>))}




                    </Form.Select>






                    <Form.Select className='selectboxes' onChange={(e) => setItemCategory(e.target.value)}>






                        <option value="" disabled selected>Item Category</option>


                        {itemcategory.map((option) => (<option value={option.value} > {option.label} </option>))}





                    </Form.Select>

                    <Form.Select className='selectboxes' onChange={(e) => setItemMake(e.target.value)}>





                        <option value="" disabled selected>Item Make</option>


                        {itemsmake.map((option) => (<option value={option.value} > {option.label} </option>))}




                    </Form.Select>





                    <p>
                        <input type="number" name="Itemvalue" placeholder='Item Value' onChange={(e) => setItemValue(e.target.value)} required />
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