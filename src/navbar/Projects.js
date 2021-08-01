import { Component } from "react";
import { BugTracking } from "../projects/BugTracking";
import { Ecommerce } from "../projects/Ecommerce";

export class Projects extends Component {
    render() {
        return (
            <div>
                <Ecommerce />
                <BugTracking />
            </div>
        )
    }
}
export default Projects