import { Chart } from "react-google-charts";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../Header";



export const female = {
  title: "Female",
  is3D: true,
};

export const male = {
  title: "Male",
  is3D: true,
}

export function Gender(props) {
  const FilterData = props.data.filter((item) => item['Segment Type'] === 'Gender' )
  
  const MaleRespodents = props.data.filter((item) => item['Segment Description'] === 'Male respondents');
  const FemaleRespodents = props.data.filter((item) => item['Segment Description'] === 'Female respondents');

  const MaleData = [["Task", "Hours per Day"]];
  const FemaleData = [["Task", "Hours per Day"]];
  MaleRespodents.map((item, index) => {
  
    const oneitem = [
      item.Answer,
      +item.Count,
      
    ]
    
    MaleData.push(oneitem)
  })

  FemaleRespodents.map((item, index) => {
  
    const oneitem = [
      item.Answer,
      +item.Count,
     
    ]
    
    FemaleData.push(oneitem)
  })


  return (
    <div>
      <Header/>
        <SocialMedia>
          {FemaleRespodents.map((item) => {
            return(
              <h1 key={item.Answer}>{item.Answer}:{item.Count}</h1>
            )
           })}
        </SocialMedia>

        <Chart
          chartType="PieChart"
          data={FemaleData}
          options={female}
          width={"100%"}
          height={"400px"}
        />

        <SocialMedia>
          {MaleRespodents.map((item) => {
            return(
              <h1 key={item.Answer}>{item.Answer}:{item.Count}</h1>
            )
           })}
        </SocialMedia>

      <Chart
        chartType="PieChart"
        data={MaleData}
        options={male}
        width={"100%"}
        height={"400px"}
        />
    </div>
  );
}

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

