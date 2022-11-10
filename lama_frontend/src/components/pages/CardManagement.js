import React,{useState} from 'react'
import * as utils from '../../services/requests'
import { Link,useNavigate } from 'react-router-dom'
import Login from './AdminLoginPage';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

import '../../App.css'


export default function CardManagement() {


const loantype = [


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



const durationF =

    [


        {
            label: "1",
            value: 1
        },
        {
            label: "2",
            value: 2
        },
        {
            label: "3",
            value: 3
        },
        {
            label: "4",
            value: 4
        },
        {
            label: "5",
            value: 5
        }




    ]
  const navigate = useNavigate();

  const route_ = (path) => {
    navigate(path);
  };

  let [loanId, setLoanId] = useState(0);
  let [loanType, setLoanType] = useState("");
  let [duration, setDuration] = useState(0);
  let [loanDeleteId, setLoanDeleteId] = useState(0);

  let handleSubmit = (e) => {
    e.preventDefault();

    let loanCard= {
        loanId : loanId,
        loanType : loanType,
        duration : duration
    };

  console.log(JSON.stringify(loanCard));
  utils
    .post("/addLoanCard", loanCard)
    .then((response) => {
     console.log(response.id);
    })
  };
  let handleDelete = (e) => {
    e.preventDefault();

    let DeleteId= parseInt(loanDeleteId);

  console.log(JSON.stringify(DeleteId));
  utils
    .Delete(`/deleteLoanCard/${DeleteId}`)
    .then((response) => {
     console.log(response.id);
    })
  };
  if (sessionStorage.getItem("user") === null) {
    window.alert("Unauthorized. Please Login")
    return < Login/>;
  }
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
            
            <h2>Card Management</h2>
            <form action="" onSubmit={handleSubmit}>







                <p>
                    <input type="number" name="Loanid" placeholder='Loan ID' onChange={(e) => setLoanId(e.target.value)} required />
                </p>


                <div className="text-center m-5-auto selectbox" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }} >




                    <Form.Select className='selectboxes' onChange={(e) => setLoanType(e.target.value)}>




                        <option value=""  disabled selected>Loan Type</option>

                        {loantype.map((option) => (<option value={option.value} > {option.label} </option>))}




                    </Form.Select>





                    <p>




                        <Form.Select className='selectboxes' onChange={(e) => setDuration(e.target.value)}>


                            <option value=""  disabled selected>Duration</option>
                            {durationF.map((option) => (<option value={option.value} > {option.label} </option>))}

                        </Form.Select>

                    </p>

                </div >





                <p>
                    <button id="sub_btn" type="submit" > Add Data </button>
                </p>
            </form >

            <form action="" onSubmit={handleDelete}>

                <input type="number" name="Loanid" placeholder='Loan ID' value={loanDeleteId} onChange={(e) => setLoanDeleteId(e.target.value)} required />
            <p>
                    <button id="sub_btn" type="submit" > Delete </button>
                </p>
            </form>

            {/* <table>
            <tr>

            <th>Loan ID</th>

            <th>Loan Type</th>

            <th>Duration</th>

            </tr>


            </table> */}

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
