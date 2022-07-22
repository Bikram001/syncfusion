import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Legend, Tooltip, ColumnSeries, DataLabel } from "@syncfusion/ej2-react-charts";
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";


const Bar = () => {
 const {currentMode} = useStateContext();

  return (
   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
   <ChartsHeader category="Bar" title="Olympic Medal Counts" />
     <ChartComponent
     id="chart"
     height="420px"
     primaryXAxis={barPrimaryXAxis}
     primaryYAxis={barPrimaryYAxis}
     chartArea={{border: {width: 0}}}
     tooltip={{enable: true}}
     background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services = {[ColumnSeries, Tooltip, Legend, Category, DataLabel]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
   </div>    
  );
};

export default Bar;
