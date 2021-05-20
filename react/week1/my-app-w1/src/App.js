import React, {
  useState
} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  Table,
  Radio
} from 'antd';
const columns = [{
    title: 'Id',
    dataIndex: 'Id',
  },
  {
    title: 'Task',
    dataIndex: 'Task',
  },
  {
    title: 'Deadline',
    dataIndex: 'Deadline',
  },
];
const data = [

  {
    Id: '1',
    Task: 'React Homework',
    Deadline: 'May-22nd-2021',
  },
  {
    Id: '2',
    Task: 'UI assingments',
    Deadline: 'June-15th-2021',
  },
  {
    Id: '3',
    Task: 'Ux assingments',
    Deadline: 'June-21st-2021',
  },
  {
    Id: '4',
    Task: 'Meal sharing app',
    Deadline: 'June-?-2021',
  },
  {
    Id: '5',
    Task: 'ReDI Final project',
    Deadline: 'June-22nd-2021',
  },
  {
    Id: '6',
    Task: 'Update portfolio',
    Deadline: 'July-2021',
  },
  {
    Id: '7',
    Task: 'Update CV',
    Deadline: 'July-2021',
  },
  {
    Id: '8',
    Task: 'Apply to internship',
    Deadline: 'July-2021',
  },
  {
    Id: '9',
    Task: 'Update LinkedIn',
    Deadline: 'Agust-2021',
  },
  {
    Id: '10',
    Task: 'Buy tickets to Portugal',
    Deadline: 'Agust-2021',
  },


];


const App = () => {
  const [selectionType] = useState('checkbox');
  return ( <
    div >
    <
    header >
    <
    h1 > Darinka 's to-do list</h1> <
    /header> <
    Radio.Group value = {
      selectionType
    } >
    <
    /Radio.Group> <
    Table rowSelection = {
      {
        type: selectionType
      }
    }
    columns = {
      columns
    }
    dataSource = {
      data
    }
    /> 
    </div>
  );
};

export default App;