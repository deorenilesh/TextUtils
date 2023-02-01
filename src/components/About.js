import React from 'react'
// import { useState } from 'react';
export default function About(props) {

    // const [btntext, setBtnText] = useState("Enable Dark Mode");

    // const [myStyle, setmyStyle] = useState(
    //     {
    //         color: "black",
    //         backgroundColor: "white"
    //     }
    // );

    // const togglebtn = () => {
    //     if (myStyle.color === "black") {
    //         setmyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setBtnText("Enable light mode")
    //     }
    //     else {
    //         setmyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === "light" ? "rgb(0 7 57)" : "white",
        backgroundColor: props.mode === "light" ? "white" : "rgb(0 7 57)"
    }

    return (
        <>
      
            <div className='container'>
            <h2 style={myStyle}>About Us</h2>
            
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body " style={myStyle}>
                                If you receive huge amounts of unstructured data in the form of text (emails, social media conversations, chats), you’re probably aware of the challenges that come with analyzing this data.

                                Manually processing and organizing text data takes time, it’s tedious, inaccurate, and it can be expensive if you need to hire extra staff to sort through text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Free content encompasses all works in the public domain and also those copyrighted works whose licenses honor and uphold the freedoms mentioned above. Because the Berne Convention in most countries by default grants copyright holders monopolistic control over their creations, copyright content must be explicitly declared free, usually by the referencing or inclusion of licensing statements from within the work.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                <strong>Cross Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                The history of cross-browser is involved with the history of the "browser wars" in the late 1990s between Netscape Navigator and Microsoft Internet Explorer as well as with that of JavaScript and JScript, the first scripting languages to be implemented in the web browsers. Netscape Navigator was the most widely used web browser at that time and Microsoft had licensed Mosaic to create Internet Explorer 1.0. New versions of Netscape Navigator and Internet Explorer were released at a rapid pace over the following few years. Due to the intense competition in the web browser market, the development of these browsers was fast-paced and new features were added without any coordination between vendors. The introduction of new features often took priority over bug fixes, resulting in unstable browsers, fickle web standards compliance, frequent crashes and many security holes.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <button onClick={togglebtn}>{btntext}</button>
                </div> */}
            </div>

        </>

    )
}























// import React from 'react'
// import { useState } from 'react'
// export default function About() {

//     const [myStyle, setmyStyle] = useState(
//         {
//             color: "black",
//             backgroundColor: "white"
//         }
//     )
//     const [btntext, setBtnText] = useState("Enable dark mode")

//     const toggleStyle = () => {
//         if (myStyle.color === "white") {
//             setmyStyle({
//                 color: "black",
//                 backgroundColor: "white"
//             })
//             setBtnText("Enable dark mode")
//         }
//         else {
//             setmyStyle({
//                 color: "white",
//                 backgroundColor: "black"
//             })
//             setBtnText("Enable light mode")
//         }
//     }
//     return (
//         <>
//             <div style={myStyle}>
//                 <div >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quia! Fuga deserunt voluptates eveniet! Reprehenderit, architecto minima vero voluptas eos quas consequatur pariatur esse qui, at ipsa sed harum doloremque tempore odit illum totam, deleniti eligendi provident iusto quaerat obcaecati? Odio in officia inventore at alias? Corporis velit illo voluptatum!</div>
//                 <br />
//                 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quaerat quo recusandae placeat animi! Labore, excepturi! Molestiae qui voluptates asperiores esse earum possimus corrupti expedita dolor iste eligendi inventore facere eius sed, similique odit illum sit veritatis reiciendis hic vero rem architecto quo velit. Maxime omnis debitis cupiditate ab perferendis minima rem voluptate fuga aliquam, hic placeat asperiores aut quibusdam sit velit quasi illum vel ratione architecto fugit? Modi recusandae corporis dolor cum accusantium illo natus, assumenda magnam voluptas possimus aut eum voluptatibus laboriosam nam excepturi repudiandae quasi unde maiores.</div>
//                 <br />
//                 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, suscipit eum earum sint, voluptate fugiat, sapiente voluptas ad dolorum doloribus quidem praesentium sequi! Ullam, incidunt, soluta modi corrupti beatae repellat similique praesentium optio quisquam consequatur placeat non temporibus excepturi aliquid!</div>
//                 <br />
//                 <div>
//                     <button onClick={toggleStyle}>{btntext}</button>
//                 </div>
//             </div>
//         </>

//     )
// }


// import React from 'react'
// import { useState } from 'react';
// export default function About() {


//     const [myStyle, setmyStyle] = useState({
//         color: "white",
//         backgroundColor: "black"
//     })
//     const [btntext, setBtnText] = useState("Enable Dark mode");

//     const toggleStyle = () => {
//         if (myStyle.color === "white") {
//             setmyStyle({
//                 color: "black",
//                 backgroundColor: "white"
//             })
//             setBtnText("Enable dark mode")
//             console.log(btntext)
//         }
//         else {
//             setmyStyle({
//                 color: "white",
//                 backgroundColor: "black"
//             })
//         } setBtnText("Enable light mode")
//         console.log(btntext);
//     }

//     return (
//         <>
//             <div style={myStyle}>

//                 <div>About</div><br />
//                 <div>About</div><br />
//                 <div>About</div><br />
//                 <div>
//                     <button onClick={toggleStyle}>{btntext}</button>
//                 </div>
//             </div>


//         </>

//     )
// }



