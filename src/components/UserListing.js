import React from 'react';
import { Table } from 'antd';
import axios from 'axios';
import store from '../store';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name}`,
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: true,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
    },
  ];




class UserListing extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            pagination: {
              current: 1,
              pageSize: 2,
            },
            loading: false,
            token: store.getState().token
        };
    }

    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    handleTableChange = (pagination, filters, sorter) => {

        console.log('in handle table change');
        console.log(pagination);
        
        this.fetch({
          sortField: sorter.field,
          sortOrder: sorter.order,
          pagination,
          ...filters,
        });
    };

    getRandomuserParams = params => {
        return {
          page: params.pagination.current
        };
      };

    fetch = (params = {}) => {
        console.log('inside fetch');
        console.log(this.state);
        this.setState({ loading: true });
        axios.get('http://lumenauthapp.com/api/users',
        {
            params: this.getRandomuserParams(params),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${this.state.token}`
            }
        }).then(data => {
          console.log(data);
          this.setState({
            loading: false,
            data: data.data.users.data,
            pagination: {
              ...params.pagination,
              total: data.data.users.total,
              // 200 is mock data, you should read it from server
              // total: data.totalCount,
            },
          });
        });
    };

    render() {
        const { data, pagination, loading } = this.state;
        return (
            <div className="UserListing">
            <Table
                columns={columns}
                rowKey={record => record.id}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={this.handleTableChange}
            />
            </div>
        )
    }
  }
  
  export default UserListing;