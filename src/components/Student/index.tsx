import  Divider  from 'antd/lib/divider';
import Tag from 'antd/lib/tag';import React from "react";
import './index.less';
interface IStudentProps {
  title: string;
  organization: string;
  date: string;
  thesis: React.ReactElement  | string;
}

const Student = (props: IStudentProps) => {
  const { title, organization, date, thesis } = props;
  return (
    <div className="education-item" >
      <div className="row">
        <h3 className='title'>{title}</h3>
        <span className="period">{date}</span>
      </div>
      <Tag className='organization'>{organization}</Tag>
      {thesis}
    <Divider/>
  </div>
  );
};
export default Student;
