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
            <form action="">


            <table>

            <tr>

            <td>
                <p>
                    <input type="text" name="Loanid" placeholder='Loan ID' required />
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




<option value="" disabled selected>Loan Type</option>

                                            {loantype. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}




                                    </Form.Select>

                                    </td>


                                    <td>
                <p>




<Form.Select className='selectboxes'>


<option value="" disabled selected>Duration</option>
                                                            {duration. map ((option) => ( <option value = {option. value } > {option. label } </option> ))}

                                                        </Form.Select>


                                                        </td>


                                                        </tr>

                                                        </table>

                                  <p>
                                                       <button id ="sub_btn" type ="submit" > Add Data </button>
                                                   </p>


                                                   </div>

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