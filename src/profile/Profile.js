

import PropTypes from 'prop-types';

function Profile({children,fullName, bio, profession,handelName})
{
    console.log(typeof(handelName))
return <div style={{ width:"100%", display:"flex",  flexDirection:'column' , backgroundColor: "lightblue"}}>
    {children}
<br/>
    <button style={{height:"50px",width :"180px",fontWeight:"bold" ,fontSize :"20px" }}  
    onClick={()=>handelName(fullName)}  >
        click here to see my name 
    </button     >
    <h1 style={{backgroundColor:"blue" ,color:"white" ,padding:"20px" }}>My bio : {bio}</h1>
    <h1 style={{backgroundColor:"blue" ,color:"white" ,padding:"20px" }}>My profession : {profession}</h1>
    
</div>
}

Profile.propTypes={
    fullname:PropTypes.string,
    bio:PropTypes.string, 
    profession:PropTypes.string,
    children:PropTypes.object
}

export default Profile 