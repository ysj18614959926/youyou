import * as echarts from 'echarts/core';
import {
    GridComponent,
    ToolboxComponent,
    TooltipComponent,
    VisualMapComponent,
    LegendComponent,
    BrushComponent,
    DataZoomComponent
} from 'echarts/components';
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    GridComponent,
    BarChart,
    CanvasRenderer,
    TooltipComponent,
    ToolboxComponent,
    TooltipComponent,
    VisualMapComponent,
    LegendComponent,
    BrushComponent,
    DataZoomComponent,
    CandlestickChart,
    LineChart,
    BarChart,
    CanvasRenderer,
    UniversalTransition
]);
export default echarts;