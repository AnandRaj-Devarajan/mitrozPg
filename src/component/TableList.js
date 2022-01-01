
import React from 'react'
import { Table } from 'react-bootstrap';

export const TableList = (props) => {
    const { extraClass } = props;
    const headData = ["Name", "Email-id", "Country", "Registration Date", "Attended"]
    const bodyData = [<i class="bi bi-person-circle">max clark</i>, "maxclarke@gmail.com", <i class="bi bi-flag"></i>, "may1,2021", "3 / 3"]

    return (
        <div className={extraClass}>
            <Table responsive>
                <thead>
                    <tr>
                        {headData.map((item) => (<th>{item}</th>))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {bodyData.map((item) => (<td >{item}</td>))}
                    </tr>
                    <tr>
                        {bodyData.map((item) => (<td >{item}</td>))}
                    </tr>
                    <tr>
                        {bodyData.map((item) => (<td >{item}</td>))}
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
