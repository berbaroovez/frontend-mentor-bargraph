import styled from "styled-components";
import { Bar } from "../components/Bar";
import ChartData from "../util/data.json";
const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  
  const total = ChartData.reduce((acc, cur) => acc + cur.amount, 0);


  return <HomePage>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
  <ChartZone>


    <BalanceZone>
      <BalanceTitle>My Balance </BalanceTitle>
      <BalanceValue>$420.69</BalanceValue>
      <BalanceCircles>
        <BalanceCircleOutline/>
        <BalanceCircle/>
      </BalanceCircles>
    </BalanceZone>
    <SpendingZone>
      <SpendingTitle>Spending - Last 7 days</SpendingTitle>
      <GraphZone>
        {
          ChartData.map((item, index) => {
            return <Bar key={index} day={item.day} money={item.amount}/>
          }
          )
        }
      </GraphZone>
      <FancyLine/>
      <SummaryZone>
        <SummaryTitle>Total this month</SummaryTitle>
        <SummaryValue>${total}</SummaryValue>
        <PercentZone>
      
          <PercentValue>+2.4%</PercentValue>
          <PercentTitle>from last month</PercentTitle>
        </PercentZone>
      </SummaryZone>
    </SpendingZone>
    </ChartZone>
  </HomePage>
}

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
background-color: hsl(27, 66%, 92%);
font-family: 'DM Sans', sans-serif;
`

const ChartZone = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  gap:16px;
`
const BalanceZone = styled.div`
position: relative;
background-color: hsl(10, 79%, 65%);
width: 100%;
height: 100px;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 16px;
color: white;
font-weight: bold;
/* justify-content: space-between; */


`;
const BalanceTitle = styled.p`
  font-weight: normal;
  font-size: 14px;
`;
const BalanceValue = styled.p`
  font-size: 24px;
`;
const BalanceImg = styled.img``;

const SpendingZone = styled.div`


  display: flex;
  gap:16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(33, 100%, 98%);
  border-radius: 8px;
  padding: 16px;
`
const SpendingTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: hsl(25, 47%, 15%);
  align-self: flex-start;
`
const GraphZone = styled.div`

  display: flex;
  gap: 10px;
  justify-content: center;
  height:200px;
`

const FancyLine = styled.div`
  width:100%;
  height: 2px;
  background:hsl(27, 66%, 92%);
`
  
const SummaryZone = styled.div`
height:80px;
width:100%;

padding: 12px;
position: relative;
`
const SummaryTitle = styled.p`
  color:hsl(28, 10%, 53%)
`
  
const SummaryValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: hsl(25, 47%, 15%);
`

const PercentZone = styled.div`
position: absolute;
bottom: 8px;
right: 0;
`
const PercentValue = styled.p`  color: hsl(25, 47%, 15%); font-weight: bold; text-align: right;`
const PercentTitle = styled.p` color:hsl(28, 10%, 53%); font-size: 16px;`


const BalanceCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: hsl(25, 47%, 15%);
  margin-left: -20px;
`
const BalanceCircleOutline = styled.div`
position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  
  border: 2px solid white;

`
const BalanceCircles = styled.div`
position: absolute;
right:20px;
display: flex;

  
`