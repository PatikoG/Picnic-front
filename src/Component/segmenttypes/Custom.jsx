import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { useState } from "react";
import Header from "../Header";




export const options = {
  title: "My Daily Activities",
};

const segmentDescriptions= [];


export function Custom(props) {
  const [chosenCustom, setCustom] = useState([]);


  const FilterData = props.data.filter((item) => item['Segment Type'] === 'Custom')
  FilterData.forEach((item) => {
    if (!segmentDescriptions.includes(item['Segment Description'])) {
      segmentDescriptions.push(item['Segment Description']);
    }
  });

  const CustomData = FilterData.filter(item => item['Segment Description'] === chosenCustom)
  const CustData = [["Task", "Hours per Day"]];
  CustomData.map((item, index) => {
  
    const oneitem = [
      item.Answer,
      +item.Count,
      
    ]
    
    CustData.push(oneitem)
  })


  return (
    <div>
      <Header/>
      <Wrapper>
        <select onChange={(e) => setCustom(e.target.value)}>
          {segmentDescriptions.map((segment) => {
            return(
              <option value={segment}>{segment}</option>
              )
            })}
        </select>

        <SocialMedia>
          {CustomData.map((item) => {
            return(
              <h1 key={item.Answer}>{item.Answer}:{item.Count}</h1>
              )
            })}
        </SocialMedia>

        <Chart
          chartType="PieChart"
          data={CustData}
          options={options}
          width={"100%"}
          height={"400px"}
          />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding-left: 144px;
  padding-right: 144px;
`

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

