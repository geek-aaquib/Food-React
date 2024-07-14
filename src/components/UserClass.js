import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 1,
            userInfo: {
                name: "",
                location: "",
                avatar_url: "",
                contact: "",
                followers: ""
            }
        };

    }

    async componentDidMount(){
        const userInfo = await fetch("https://api.github.com/users/geek-aaquib");
        const userInfoJson = await userInfo.json();

        this.setState({
            userInfo: userInfoJson
        })
    }
    render(){
        return (
        <div className="m-4 p-4">
            <UserContext.Consumer>
                {(data) => <h1>Username is: {data.loggedinUser}</h1>}
            </UserContext.Consumer>
            <h1>Count is: {this.state.count}</h1>
            <button className="m-4 p-4 rounded-lg bg-gray-300 hover:bg-slate-200" onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1
                })
            }}>Increase</button>
            <p>Count2 is: {this.state.count2}</p>
            
            <div className="m-4 p-4 flex items-center flex-wrap w-[200px] h-[400px]">
                <ul>
                    <img className="rounded-lg" src={this.state.userInfo.avatar_url}></img>
                </ul>
                <ul>Name: <h1 className="font-bold">{this.state.userInfo.name}</h1></ul>
                <ul><h2>Address: {this.state.userInfo.location}</h2></ul>
                <ul><h2>Followers: {this.state.userInfo.followers}</h2></ul>
            </div>
            
        </div>
        );
    }
};

export default UserClass;