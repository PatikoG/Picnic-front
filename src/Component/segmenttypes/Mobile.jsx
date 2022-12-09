import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Header";




export function Mobile(props) {
  const FilterData = props.data.filter((item) => item['Segment Type'] === 'Mobile' )
  console.log(FilterData);
  const data = [["Element", "Count", { role: "style" }]]
  const colors = [ 'red', 'blue' , 'yellow' ,'ligthblue' ]
  FilterData.map((item, index) => {
  
    const oneitem = [
      item.Answer,
      +item.Count,
      colors[index],
    ]
    
    data.push(oneitem)
  })
  return (
    <div>

      <Header/>
    <Wrapper>
        <SocialMedia>
        {FilterData.map((item) => {
          return(
            <h1 key={item.Answer}>{item.Answer}:{item.Count}</h1>
            )
          })}
        </SocialMedia>
        
        <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding-left:144px;
  padding-right: 144px;
`

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

