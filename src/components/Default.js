
import Header from './Header';
import Footer from './Footer';
import Apple from './Apple';
import Student from './Student';

function Default(){
    // const header = "React Demo header";
    const header = {header1:"Rect Demo",header2:"Header"}

    const footer1 = "React Demo ";
    const footer2 = "footer ";

    const apple = {qty:3,color:"Red"}

    const student = [
        {name:"santhiya",age:22},
        {name:"Thiya",age:22},
        {name:"Poovitha",age:22},
        {name:"Poovi",age:22}
    ];

    return(
        <div>
            <Header headerInput = {header}/>
            {apple.qty>2?
            <Apple appleInput={apple}/>
            :null}
            <Student studentinfo={student}/>
            <Footer footerInput1={footer1} footerInput2={footer2}/>
        </div>
    );
}
export default Default;