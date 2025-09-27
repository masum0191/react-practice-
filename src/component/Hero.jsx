
const Hero = (props) => {
    return (
        <div>
            <ul>
                <li>Name : {props.item.name}</li>
                <li>Image : <img style={{width:"20px", height:"20px"}} src={props.item.imgUrl} alt={props.item.name} /></li>
                <li>Designation : {props.item.designation}</li>
                <li>Company : {props.item.company}</li>
                <li>Experience : {props.item.experience} years</li>
                <li>Salary : ${props.item.salary}</li>
                <li>Email : {props.item.email}</li>
            </ul>
        </div>
    );
};

export default Hero;