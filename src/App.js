import "./styles.css";
import { Button } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import {
  AutoComplete,
  Cascader,
  Col,
  DatePicker,
  InputNumber,
  Row,
  Select,
  Tooltip,
  Form
} from "antd";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [inter, setInter] = useState('');
      console.log("clicked me",inter);
  
  const onFinish = (e)=>{
    console.log(e)
  }
  const { Option } = Select;
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  const games = ['forest','gta','forsa','need for speed','good of war']
  const  [gamesfiled,setGamesFiled] = useState([])
  console.log(gamesfiled)
  const handleClick = () => {
    console.log("clicked me");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Input placeholder="default size" prefix={<UserOutlined />} />

      {/* forminput START */}
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={5}>
            <Input defaultValue="0571" allowClear />
          </Col>
          <Col span={8}>
            <Input defaultValue="26888888" allowClear />
          </Col>
        </Row>
      </Input.Group>

      <Input.Group compact>
        <Input
          style={{
            width: "calc(100% - 200px)",
          }}
          defaultValue="https://ant.design"
        />
        <Button type="primary">Submit</Button>
      </Input.Group>
      <br />
      <br />

      <Input.Group compact>
        <Input
          style={{
            width: "calc(100% - 200px)",
          }}
          defaultValue="git@github.com:ant-design/ant-design.git"
          onChange={(e)=>setInter(e.target.value)}
          value={inter}
        />
        <Tooltip title="copy git url">
          <Button icon={<CopyOutlined />} />
        </Tooltip>
      </Input.Group>
      
       <Input.Group compact>
      <Select style={{ width: '30%' }} defaultValue="Home">
        <Option value="Home">Home</Option>
        <Option value="Company">Company</Option>
      </Select>
      <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
    </Input.Group>
      {/* forminput FINISH*/}
      <h4>what is your favorit game</h4>
      
      <Input.Group compact>
      <Select allowClear mode="multiple" style={{ width: '30%' }} defaultValue="Home" onChange={(e)=> setGamesFiled(e)}>
          {  games.map((game ,index)=> <Select.Option  value={game} key={index}>{game}</Select.Option>)}
      </Select>
       </Input.Group>
       <div>
         {gamesfiled.map((item)=><p>{item}</p>)}
       </div>
       <Form onFinish={onFinish}>
         <Form.Item label="User name" name='username'>
           <Input placeholder='Username' required></Input>
         </Form.Item>
         
         <Form.Item label="Password" name='password'>
           <Input.Password placeholder='Password' required></Input.Password>
         </Form.Item>
         
          <Form.Item>
          <Button type='primary' htmlType='Submit'>Submit</Button>
         </Form.Item>
       </Form>
      <Button
        type="primary"
        onClick={handleClick}
        loading={loading}
        icon={<SearchOutlined />}
        style={{ backgroundColor: "green" }}
      >
        Primary Button
      </Button>
    </div>
  );
}
