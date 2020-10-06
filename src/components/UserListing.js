import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import axios from 'axios';
import store from '../store';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

class UserListing extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            pagination: {
              current: 1,
              pageSize: 5,
            },
            loading: false,
            searchText: '',
            searchedColumn: '',
            token: store.getState().token
        };
    }

    
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select(), 100);
        }
      },
      render: text =>
        this.state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  
    handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };

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
          page: params.pagination.current,
          ...params,
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
        const columns = [
          {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: true,
            width: '20%',
            ...this.getColumnSearchProps('id'),
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
            render: name => `${name}`,
            width: '20%',
            ...this.getColumnSearchProps('name'),
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: true,
            filters: [
              { text: 'Male', value: 'male' },
              { text: 'Female', value: 'female' },
            ],
            width: '20%',
            ...this.getColumnSearchProps('email'),
          },
          {
            title: 'Created At',
            dataIndex: 'created_at',
          },
        ];
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