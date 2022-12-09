import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { useState } from "react";
import Header from "../Header";



export const options = {
  title: "Universities",
};

const segmentDescriptions= [];

export function University(props) {
  const [chosenSegmentDecs, setChosenSegmentDecs] = useState([]);
  const FilterData = props.data.filter((item) => item['Segment Type'] === 'University')
  FilterData.forEach((item) => {
    if (!segmentDescriptions.includes(item['Segment Description'])) {
      segmentDescriptions.push(item['Segment Description']);
    }
  });
  const universityData = FilterData.filter(item => item['Segment Description'] === chosenSegmentDecs)
  const UniData = [["Task", "Hours per Day"]];
  universityData.map((item, index) => {
  
    const oneitem = [
      item.Answer,
      +item.Count,
      
    ]
    
    UniData.push(oneitem)
  })
  return (
    <div>
      <Header/>
      <Wrapper>
        <select onChange={(e) => setChosenSegmentDecs(e.target.value)}>
          {segmentDescriptions.map((segment) => {
            return(
              <Selection value={segment}>{segment}</Selection>
              )
            })}
        </select>

        <SocialMedia>
          {universityData.map((item) => {
            return(
              <h1 key={item.Answer}>{item.Answer}:{item.Count}</h1>
              )
            })}
        </SocialMedia>
       
          <Chart
          chartType="PieChart"
          data={UniData}
          options={options}
          width={"100%"}
          height={"400px"}
          />
      </Wrapper>
    </div>
  );
}

const SocialMedia = styled.div`
   display: flex;
    align-items: center;
    justify-content: space-between;
`


const Selection = styled.option`
  width: 150px;
`

const Wrapper = styled.div`
  padding-left: 144px;
  padding-right: 144px;
`

