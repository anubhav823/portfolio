import { Component } from "react";
import './projects.css'
export class BugTracking extends Component {
    render() {
        return (
            <div className='projects'>
                <div className='video'>

                </div>
                <div className='info'>This is a project I also made using Spring Boot and React. I used Oracle as a database for this project.
                    This application is similar to a JIRA board. Users can create stories, change their status from <strong>To Do</strong> to <strong>Done</strong> and vice-versa by
                    dragging the tiles to the respective columns. I took inspiration from this idea after I started working as a software engineer.
                </div>
            </div >
        )
    }
}