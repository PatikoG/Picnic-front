import React from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Header";



export function Web(props) {
  const FilterData = props.data.filter((item) => item['Segment Type'] === 'Web' )
  const data = [["Element", "Count", { role: "style" }]]
  const colors = [ 'red', 'blue' , 'yellow' ,'ligthblue'     ]
  FilterData.map((item, index) => {
  
    const oneitem = [
      item.Answer,
      +item.Count,
      colors[index],
    ]
    
    data.push(oneitem)
  })

  console.log(data);
  return (
    <div>
      <Header/>
      <Wrapper>
          <SocialMedia>
            {FilterData.map((item) => {
              return(
                <h1>{item.Answer}:{item.Count}</h1>
                )
                })}
          </SocialMedia>


          <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
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

const HeaderInfo = styled.div`
    margin-top: 48px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`