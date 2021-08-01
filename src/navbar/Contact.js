import { Component } from "react"
import './nav-styles.css'
export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                You can reach me on <a href='https://www.linkedin.com/in/anubhav-j/' > my LinkedIn </a> page
                or you can mail me @ anubhav823@gmail.com!
            </div>
        )
    }
}