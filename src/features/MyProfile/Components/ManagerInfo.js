import { Grid } from '@mui/material'
import React from 'react'


function Managerinfo() {


        let array = ['a', 'b', 'c', 'd', 'e'];
        console.log('Original array:', array);
        let indexToRemove = 0;

        let removedElement = array.splice(indexToRemove, 1);
        console.log('Removed element:', removedElement);
        console.log('Array after removal:', array);


        let newElement = 'a';

        array.splice(indexToRemove, 0, newElement);
        array.splice(indexToRemove, 0, newElement);
        console.log('Array after adding new element:', array);

        return (
                <div className=' flex pl-16 p-10 border gap-32 border-black'>

                        <div className=' flex flex-col gap-y-3 font-bold'>
                                <label>Reporting Manager : </label>
                                <label>Reporting Manager's Role : </label>
                                <label>Reporting Manager's Email : </label>
                                <label>Reporting Manager's Mobile No. : </label>
                        </div>
                        <div className=' flex flex-col gap-y-3'>
                                <label>Pappu Sharma</label>
                                <label>SA </label>
                                <label>PPP@gmail.com</label>
                                <label>9876123413</label>
                        </div>
                </div>

        )
}


export default Managerinfo