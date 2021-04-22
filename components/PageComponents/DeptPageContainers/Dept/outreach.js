import React from "react";
import HeadingOne from "../../Components/Texts/HeadingOne"
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
class Outreach extends React.Component {

    DeptOutreachHeadingOne = {
        instanceID: "DeptOutreachHeadingOne",
        title: "Outreach Program"
    }
    render() {
        const { list } = this.props.data;
        console.log(list);
        return (
            <React.Fragment>
                <div>
                    <HeadingOne data={this.DeptOutreachHeadingOne} />
                    {list.map(i => (
                        <>
                            <HeadingTwo data={i} className="Heading" />
                            <div className="bodyContainerInner">
                                {i.list.map(c => (<p><BodyOneJustified data={c}></BodyOneJustified></p>))}
                            </div>
                        </>
                    ))}
                </div>

            </React.Fragment >
        )
    }

}

export default Outreach;