import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ReactPropTypes } from "react";
export default function TextForm(props)
{
    
   const handleOnChange = (event)=>
    {
        console.log("On change");
        setText(event.target.value);

    }
    const handleOnClickUpper = ()=>
    {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.setAlert({
            msg:'Text has been converted to UPPECASE!!',
            type:'success'
        })
        setInterval(() => {
            props.setAlert(null);
          }, 2000);
        

    }
    const handleOnClickLower=()=>
    {
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlert({
            msg:'Text has been converted to lowercase!!',
            type:'success'
        })
        setInterval(() => {
            props.setAlert(null);
          }, 2000);
    }
    const handleOnClickClear=()=>
    {
        let newText = "";
        setText(newText);
        props.setAlert({
            msg:'Text cleared!!!',
            type:'success'
        })
        setInterval(() => {
            props.setAlert(null);
          }, 2000);
    }
    const handleOnClickCapitalize=()=>
    {
            let arr = text.split(' ');
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
           let newText = arr.join(" ");
            console.log(newText);
            setText(newText);
            props.setAlert({
                msg:'Text has been Capitalized!!',
                type:'success'
            })
            setInterval(() => {
                props.setAlert(null);
              }, 2000);
       

    }
    // const handleOnClickAlternate= ()=>
    // {
    //     let arr = text.split(' ');
    //     for(let i = 0;i<arr.length;i++)
    //     {
    //         let word = arr[i];
    //         for(let j = 0;j<word.length;j++)
    //         {
    //             if(j%2==1)
    //             {
    //                 word= word.slice(0,j)+ word[j].charAt(j).toUpperCase() + word.slice(j+1);
    //             }
    //         }
    //         arr[i]=word;
    //     }
    //     let newText = arr.join(' ');
    //     setText(newText);
    // }
    const handleOnClickCopy=()=>
    {
       
        const copyContent = async () => {
          try {
            await navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        }
        copyContent();
        props.setAlert({
            msg:'Text Copied!!',
            type:'success'
        })
        setInterval(() => {
            props.setAlert(null);
          }, 2000);
    }
    const handleOnclickDownload=()=>
    {
        //create element with <a>tag
        const link = document.createElement("a");
        // create a blog object with the file content which you want to add to the file
        const file = new Blob([text],{type:"text/plain"});
        // add file content in the object URL
        link.href = URL.createObjectURL(file);
        // Add file name
        link.download = "Your Text";
        // Add click event to <a>tag to save file
        link.click();
        URL.revokeObjectURL(link.href);
        props.setAlert({
            msg:'Text Downloaded!!',
            type:'success'
        })
        setInterval(() => {
            props.setAlert(null);
          }, 2000);
        

    }
    const[text, setText]=useState("Enter!!");
   
    return (
        <>
        <div>
            <h1 style={props.h1text}>Enter your text here!</h1>
            <textarea className='writearea'id="mybox" value ={text} onChange={handleOnChange}></textarea><br/>
            <button id="UCbtn" className="button_style" onClick={handleOnClickUpper}>UPPERCASE</button>
            <button id="LCbtn" className="button_style" onClick={handleOnClickLower}>lowercase</button>
            <button id="CRbtn" className="button_style" onClick={handleOnClickClear}>clear</button>
            <button id="CTbtn" className="button_style" onClick={handleOnClickCapitalize}>Capitalize Text</button>
            <button id="CPYbtn" className="button_style" onClick={handleOnClickCopy}>Copy Text</button>
            <button id="DOWNbtn" className="button_style" onClick={handleOnclickDownload}>Download Text</button>
            
            
        </div>
        <div>
            <h1 style={props.previewtext} >Your Text Summary</h1>
            <p style={props.previewtext} >{text.split(' ').length} words and {text.length} characters</p>
            <p style={props.previewtext} >{0.008 * text.split(' ').length.toPrecision(1)} Minutes Required to read!!(Happy reading)</p>
            <h2 style={props.previewtext} >Preview:</h2>
            <div className="preview">
                <p style={props.h1text}>{text}</p>
            </div>
        </div>
        </>
    )
}