import React from 'react';
import { Table } from 'antd';

export default (props) => (
    <div>
        <h2>{props.day}</h2>
        <Table 
            columns={props.columns}
            dataSource={props.classes}
            rowKey={record => record.ID}
            pagination={props.pagination ? props.pagination : false}
            size="small"
        />
    </div>
)
