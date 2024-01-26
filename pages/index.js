import React,{ useState,useEffect,useContext} from "react";
import  Image  from "next/image";
import Countdown from "react-countdown";
//internal import
import { VotingContext } from "../context/voter";
import Style from "../styles/index.module.css";
import Card from "../components/Card/Card";
import image from "../public/upload.png";   
const index = ()=>{
    const{votingTitle}= useContext(VotingContext)
    return <div>{votingTitle}</div>;
};
export default index;