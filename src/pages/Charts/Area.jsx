import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries , Inject, DateTime, Legend, } from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";


const Area = () => {
 const {currentMode} = useStateContext();

  return (
   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
   <ChartsHeader category="Area" title="Inflation Rate in Percentage" />
     <ChartComponent
     id="chart"
     height="420px"
     primaryXAxis={areaPrimaryXAxis}
     primaryYAxis={areaPrimaryYAxis}
     chartArea={{border: {width: 0}}}
     background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services = {[SplineAreaSeries, DateTime, Legend]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
   </div>
    
  );
};

export default Area;