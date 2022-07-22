import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Legend, Tooltip, ColumnSeries, RangeColorSettingDirective } from "@syncfusion/ej2-react-charts";
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";


const ColorMapping = () => {
 const {currentMode} = useStateContext();

  return (
   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
   <ChartsHeader category="Color Mapping" title="Climate - WEATHER BY MONTH" />
     <ChartComponent
     id="chart"
     height="420px"
     primaryXAxis={ColorMappingPrimaryXAxis}
     primaryYAxis={ColorMappingPrimaryYAxis}
     chartArea={{border: {width: 0}}}
     tooltip={{enable: true}}
     background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services = {[ColumnSeries, Tooltip, Legend, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={colorMappingData[0]}
          name="USA"
          xName="x"
          yName="y"
          type="Column"
          cornerRadius={{
            topLeft: 10,
            topRight: 10
          }}
        />
      </SeriesCollectionDirective>
      <RangeColorSettingDirective>
        {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
      </RangeColorSettingDirective>
    </ChartComponent>
   </div>
  );
};

export default ColorMapping;
