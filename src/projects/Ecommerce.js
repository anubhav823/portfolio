import { Component } from "react";
import './projects.css'
export class Ecommerce extends Component {
    render() {
        return (
            <div className='projects'>
                <div className='video'>

                </div>
                <div className='info'>This is a project I made using Spring Boot and React. I used Oracle as a database for this project.
                    This application has a user registration page, a login page that gives you access based on whether or not you are a user or an administrator.
                    If you are an administrator, you can access several user stats such as number of users, add or remove products from database, change their prices, etc.
                    If you are a user, you can "buy" items, view your cart, remove items from your cart and proceed to checkout.</div>
            </div>
        )
    }
}