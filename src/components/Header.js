function Header(props){
    const {headerInput} =props
    const {header1,header2}=headerInput
    return(
    <h2 style={{color:"white",backgroundColor:"black"}}>{header1} {header2}</h2>
    );
}
export default Header;
