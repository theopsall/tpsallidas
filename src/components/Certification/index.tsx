import  Divider  from 'antd/lib/divider';
import Tag from 'antd/lib/tag';
import './index.less';
interface ICertificationProps {
  title: string;
  organization: string;
  date: string;
  description: React.ReactElement | string;

}
const Certification = (props: ICertificationProps) => {
  const { title, organization, date, description } = props;
  return (
    <div className="certification-item">
      <div className="row">
        <h3 className='title'>{title}</h3>
        <span className="period">{date}</span>
      </div>
      <Tag className='organization'>{organization}</Tag>
      {description}
    <Divider/>
    </div>)
};

export default Certification;
