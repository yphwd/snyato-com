import React from "react";
import stylesheet from './Inbox.module.css'
import ChatItem from './ChatItem/ChatItem'
import Message from "./Message/Message";


// yeah :)) i know this component is not a single responsibility function. I'm really sorry about that(( 
// I promise you  in future edits I divide this pair of combined actions into two independent functions!!

const Inbox = (props) => {



    // converting data array of people and messages to required JSX state

    let i = props.InboxItems.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />)
    let m = props.InboxMessages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse()

    console.log(m)

    let textAreaConverterHTMLtoJS = React.createRef();

    let addNewMessageActionCreator = () => {
        props.dispatch(
            {
                type: 'ADD-NEW-MESSAGE',
                desiredValue: textAreaConverterHTMLtoJS.current.value
            }
        )
    }

    let oneByOneCharachtersEnteringActionCreator = () => {
        props.dispatch(
            {
                type: 'ONE-BY-ONE-CHARACHTERS-ENTERING',
                desiredValue: textAreaConverterHTMLtoJS.current.value
            }
        )
    }


    return (
        <div>
            <div className={stylesheet.messages}>
                <div className={stylesheet.people}>
                    {i}
                </div>
                <div className={stylesheet.dialogs}>
                    <div className={stylesheet.textarea}>
                        <textarea onChange={oneByOneCharachtersEnteringActionCreator} ref={textAreaConverterHTMLtoJS} value={props.defaultText} />
                        <button onClick={addNewMessageActionCreator}>Send</button>
                    </div>
                    <div className={stylesheet.mItems}>
                        <br />
                        {m}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox;