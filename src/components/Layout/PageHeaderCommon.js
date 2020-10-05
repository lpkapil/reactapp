import React from 'react';
import { Row, Col, PageHeader } from 'antd';

class PageHeaderCommon extends React.Component {

    render() {
        return(
          <div>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <PageHeader
                        className="site-page-header"
                        title={this.props.title}
                        subTitle={this.props.subTitle}
                    />
                </Col>
            </Row>
           </div> 
        )
    }
}

export default PageHeaderCommon;