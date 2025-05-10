function Footer(props){
    const mystyle ={
        color:"white",backgroundColor:"black"
    }
    const{footerInput1,footerInput2}=props;
    return(
    <h2 style={mystyle}>{footerInput1}{footerInput2}</h2>
    );
}
export default Footer;