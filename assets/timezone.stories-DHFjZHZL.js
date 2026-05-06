import{j as o}from"./index-DlC1yEB1.js";import{r as S}from"./index-D5jfS-9e.js";import{S as c,e as w,D as T,W as E,M as D}from"./month-view-DiOFdYX-.js";import{D as C}from"./recurrence-editor-DbxZL71u.js";import"./index-lf5wH9A6.js";const G={title:"Scheduler/Timezone Support",component:c,parameters:{layout:"fullscreen"}},z=[{Id:9,Subject:"COSTA RICA vs SERBIA",Description:"Group E",StartTime:new Date(2018,5,17,12,0),EndTime:new Date(2018,5,17,14,0),StartTimezone:"Europe/Samara",EndTimezone:"Europe/Samara",City:"Samara",CategoryColor:"#00bdae",GroupId:5},{Id:10,Subject:"GERMANY vs MEXICO",Description:"Group F",StartTime:new Date(2018,5,17,15,0),EndTime:new Date(2018,5,17,17,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Moscow",CategoryColor:"#f57f17",GroupId:6},{Id:11,Subject:"BRAZIL vs SWITZERLAND",Description:"Group E",StartTime:new Date(2018,5,17,18,0),EndTime:new Date(2018,5,17,20,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Rostov-On-Don",CategoryColor:"#00bdae",GroupId:5},{Id:12,Subject:"SWEDEN vs KOREA REPUBLIC",Description:"Group F",StartTime:new Date(2018,5,18,12,0),EndTime:new Date(2018,5,18,14,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Nizhny Novgorod",CategoryColor:"#f57f17",GroupId:6},{Id:13,Subject:"BELGIUM vs PANAMA",Description:"Group G",StartTime:new Date(2018,5,18,15,0),EndTime:new Date(2018,5,18,17,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Sochi",CategoryColor:"#8e24aa",GroupId:7},{Id:14,Subject:"TUNISIA vs ENGLAND",Description:"Group G",StartTime:new Date(2018,5,18,18,0),EndTime:new Date(2018,5,18,20,0),StartTimezone:"Europe/Volgograd",EndTimezone:"Europe/Volgograd",City:"Volgograd",CategoryColor:"#8e24aa",GroupId:7},{Id:15,Subject:"COLOMBIA vs JAPAN",Description:"Group H",StartTime:new Date(2018,5,19,12,0),EndTime:new Date(2018,5,19,14,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Saransk",CategoryColor:"#7fa900",GroupId:8},{Id:16,Subject:"POLAND vs SENEGAL",Description:"Group H",StartTime:new Date(2018,5,19,15,0),EndTime:new Date(2018,5,19,17,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Moscow",CategoryColor:"#7fa900",GroupId:8},{Id:17,Subject:"RUSSIA vs EGYPT",Description:"Group A",StartTime:new Date(2018,5,19,18,0),EndTime:new Date(2018,5,19,20,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Saint Petersburg",CategoryColor:"#1aaa55",GroupId:1},{Id:18,Subject:"PORTUGAL vs MOROCCO",Description:"Group B",StartTime:new Date(2018,5,20,12,0),EndTime:new Date(2018,5,20,14,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Rostov-On-Don",CategoryColor:"#357cd2",GroupId:2},{Id:19,Subject:"URUGUAY vs SAUDI ARABIA",Description:"Group A",StartTime:new Date(2018,5,20,15,0),EndTime:new Date(2018,5,20,17,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Moscow",CategoryColor:"#1aaa55",GroupId:1},{Id:20,Subject:"IR IRAN vs SPAIN",Description:"Group B",StartTime:new Date(2018,5,20,18,0),EndTime:new Date(2018,5,20,20,0),StartTimezone:"Europe/Moscow",EndTimezone:"Europe/Moscow",City:"Kazan",CategoryColor:"#357cd2",GroupId:2}],t={parameters:{controls:{disable:!0}},render:()=>{const[r,u]=S.useState("UTC"),m={dataSource:z},p=e=>{u(e==null?void 0:e.value)},l=(w.getCommonTimezones()||[]).map(e=>({text:e==null?void 0:e.Text,value:e==null?void 0:e.Value}));return o.jsx(o.Fragment,{children:o.jsxs("div",{className:"control-section",children:[o.jsx("div",{style:{padding:"10px",marginBottom:"10px"},children:o.jsx(C,{dataSource:l,fields:{text:"text",value:"value"},value:r,style:{width:"300px"},placeholder:"Select Timezone",labelMode:"Always",onChange:p})}),o.jsx("div",{className:"scheduler-control",children:o.jsxs(c,{height:"550px",width:"100%",timezone:r,defaultSelectedDate:new Date(2018,5,17),eventSettings:m,children:[o.jsx(T,{}),o.jsx(E,{}),o.jsx(D,{})]})})]})})}};var a,n,i,s,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [timezone, setTimezone] = useState('UTC');
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
          }} placeholder="Select Timezone" labelMode="Always" onChange={handleChange} />\r
          </div>\r
          <div className="scheduler-control">\r
            <Scheduler height={'550px'} width={'100%'} timezone={timezone} defaultSelectedDate={new Date(2018, 5, 17)} eventSettings={eventSettings}>\r
              <DayView />\r
              <WeekView />\r
              <MonthView />\r
            </Scheduler>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:`Display scheduler in UTC timezone.\r
All events show their exact UTC times.\r
Includes timezone selector dropdown to switch between timezones.`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.description}}};const x=["BasicUTC"];export{t as BasicUTC,x as __namedExportsOrder,G as default};
