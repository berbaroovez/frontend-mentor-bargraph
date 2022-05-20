import styled from "styled-components"


 interface BarProps {
    day: string,
    money: number,
 }

 interface BarCSSProps {
     money: number,
 }

export const Bar = ({day,money}:BarProps) => {


    return <BarZone>
        <Box money={money} style={{
            height: `${money*2}px`,
        }}/>
        <BarDay>{day}</BarDay>
    </BarZone>

}

    const BarZone = styled.div`
        display: flex;
        flex-direction: column;
        gap:8px;
        justify-content: end;
       
    `
    const Box = styled.div<BarCSSProps>`
    position: relative;
        background-color: hsl(10, 79%, 65%);
      
        width: 35px;
        border-radius: 4px;

        ::before {
            visibility: hidden;

            content: "$${props => props.money}";
            font-weight: bold;
            color:white;
            font-size:10px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -35px;
            left: 0;
            width: 100%;
            height: 30px;
            background-color:black;
            border-radius: 4px;
        }

        &:hover {
            cursor: pointer;
            background-color:hsl(186, 34%, 60%);

            ::before {
                visibility: visible;
            }
        }
        `
    const BarDay = styled.div`
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        color: hsl(28, 10%, 53%);
    `
    