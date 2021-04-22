import React from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
class ProfBodies extends React.Component {

    DeptProfHeadingOne = {
        instanceID: "DeptProfHeadingOne",
        title: "PROFESSIONAL BODIES"
    }
    render() {
        const profbody = this.props.data;
        return (
            <React.Fragment>
                <div>
                    <HeadingOne data={this.DeptProfHeadingOne} />
                    {profbody.map(b => (<>
                        <HeadingTwo data={b.title} className="Heading" />
                        <BodyOneJustified data={b.content} />
                    </>))}
                </div>

            </React.Fragment >
        )
    }

}

export default ProfBodies;