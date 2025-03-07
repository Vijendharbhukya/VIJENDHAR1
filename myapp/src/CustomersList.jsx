import { Component } from "react";

export default class MainContent extends Component{
state={pageTitle:"Customers",
customersCount:5,
customers:[
    {id:1,name:"vijendhar",phone:"9849571047",address:{city:"Delhi"},photo:"https://picsum.photos/id/1010/60"},
    {id:2,name:"Laxmi",phone:"9030499281",address:{city:"Japane"},photo:"https://picsum.photos/id/1011/60"},
    {id:3,name:"Basu",phone:"6281812885",address:{city:"USA"},photo:"https://picsum.photos/id/1012/60"},
]
};
customerNmaeStyle =(custName)=> {
    if (custName.startsWith("v")) return "green-highlight border-left";
    else if(custName.startsWith("L")) return "red-highlight border-right";
    else return {};
}
render(){
    return(
        <div>
            <h4 className=" m-1 p-1">{this.state.pageTitle}

            <span className="badge badge-secondary m-2">{this.state.customersCount}</span>
            
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>{this.getCustomerRow()}
                    {/* {this.state.customers.map((cust)=>{
                        return(
                            <tr Key={cust.id}>
                            <td>{cust.id}</td>
                            <td>{cust.name}</td>
                            <td>{this.getPhoneToRender(cust.phone)}</td>
                            <td>{cust.address.city}</td>
                        </tr>   
                        );
                    })} */}
                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
onRefreshClick=()=>{
    this.setState({
        customersCount:7});
    };
    getPhoneToRender=(phone)=>{
        if(phone) return phone;
        else{
            return <div className="bg-warning p-2 text-center">No Phone</div>
        }
    };
    getCustomerRow=()=>{
        return this.state.customers.map((cust)=>{
            return(
                <tr Key={cust.id}>
                <td>{cust.id}</td>
                <td className={this.customerNmaeStyle(cust.name)}>{cust.name}</td>
                <td><img src={cust.photo} alt="Customer"/>
                <div>
                    <button 
                    className="btn btn-sm btn-secondary" 
                    onClick={()=>{
                        this.onChangePictureClick(cust,index);
                    }}
                    >
                    Change Picture
                    </button>
                </div>
                </td>
                <td>{cust.name}</td>
                <td>{this.getPhoneToRender(cust.phone)}</td>
                <td>{cust.address.city}</td>
            </tr>   
            );
        });
    };
    onChangePictureClick =(cust,index)=>{
        var custArr=this.state.customers;
        custArr[index].photo="https://picsum.photos/id/104/60";
        this.setState({customers:custArr});
    };
}
