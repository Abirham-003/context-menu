import{j as t}from"./index-DlC1yEB1.js";import{r as h}from"./index-D5jfS-9e.js";import{S as c,D as x,W as v,M as w}from"./month-view-CZfyM3E5.js";import{h as S,D as g}from"./recurrence-editor-QwNqHFYz.js";import{t as D}from"./dataSource-D9recjXz.js";import"./index-lf5wH9A6.js";const b={title:"Scheduler/Timezone Support",component:c,parameters:{layout:"fullscreen"}},a={parameters:{controls:{disable:!0}},render:()=>{const[r,d]=h.useState("Atlantic/South_Georgia"),m={dataSource:D},u=e=>{d(e==null?void 0:e.value)},p=(S.getCommonTimezones()||[]).map(e=>({text:e==null?void 0:e.Text,value:e==null?void 0:e.Value}));return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"control-section",children:[t.jsx("div",{style:{padding:"10px",marginBottom:"10px"},children:t.jsx(g,{dataSource:p,fields:{text:"text",value:"value"},value:r,style:{width:"300px"},placeholder:"Select timezone",labelMode:"Always",onChange:u})}),t.jsx("div",{className:"scheduler-control",children:t.jsxs(c,{height:"550px",width:"100%",timezone:r,defaultSelectedDate:new Date(2026,5,17),eventSettings:m,children:[t.jsx(x,{}),t.jsx(v,{}),t.jsx(w,{})]})})]})})}};var o,n,s,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [timezone, setTimezone] = useState('Atlantic/South_Georgia');
    const eventSettings = {
      dataSource: timeZoneData
    } as EventSettings;
    const handleChange = (args?: ChangeEvent) => {
      setTimezone(args?.value as string);
    };
    const rawData = Timezone.getCommonTimezones();
    const data = (rawData || []).map((item: any) => {
      return {
        text: item?.Text,
        value: item?.Value
      };
    });
    return <>\r
        <div className="control-section">\r
          <div style={{
          padding: '10px',
          marginBottom: '10px'
        }}>\r
\r
            <DropDownList dataSource={data} fields={{
            text: 'text',
            value: 'value'
          }} value={timezone} style={{
            width: '300px'
          }} placeholder="Select timezone" labelMode="Always" onChange={handleChange} />\r
          </div>\r
          <div className="scheduler-control">\r
            <Scheduler height={'550px'} width={'100%'} timezone={timezone} defaultSelectedDate={new Date(2026, 5, 17)} eventSettings={eventSettings}>\r
              <DayView />\r
              <WeekView />\r
              <MonthView />\r
            </Scheduler>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source},description:{story:`Display scheduler in UTC timezone.\r
All events show their exact UTC times.\r
Includes timezone selector dropdown to switch between timezones.`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.description}}};const A=["BasicUTC"];export{a as BasicUTC,A as __namedExportsOrder,b as default};
