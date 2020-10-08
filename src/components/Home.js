import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import { Skeleton, Switch, List, Avatar } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 1; i < 2; i++) {
  listData.push({
    href: 'https://www.google.com',
    title: `Test Tile ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Lorem Ipsum is simply dummy text.',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrysstandard dummy text ever since the 1500s.',
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
    };
  }
  

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    return (
      <div className="Home">
        <PageHeaderCommon title="Home" subTitle="Home page" />
        <p>Progressive content <Switch checked={!this.state.loading} onChange={this.onChange} /></p>
        

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !this.state.loading && [
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]
              }
              extra={
                !this.state.loading && (
                  <img
                    width={300}
                    height={200}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={this.state.loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Home;
