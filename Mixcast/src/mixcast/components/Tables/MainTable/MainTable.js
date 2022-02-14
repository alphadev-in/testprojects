import React, { cloneElement } from 'react';

import { Table, Card, CardContent, Typography } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

// * based on: /example-components/Tables/Tables8/index.js

export default function MainTable(props) {
  const { title, head, data, handler } = props;

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <b>{title}</b>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive-md">
            <Table className="table table-hover table-striped text-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  {head.map((headData, idx) => {
                    if (headData.customWidth) {
                      return (
                        <th key={idx} style={{ ...headData.style }}>
                          {headData.show && headData.title}
                        </th>
                      );
                    }
                    return <th key={idx}>{headData.show && headData.title}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>
                        <div className="avatar-icon-wrapper">
                          <div className="avatar-icon rounded">
                            <img alt="..." src={item.cover} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="d-flex align-items-center"
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '15rem'
                          }}>
                          <Typography
                            noWrap
                            className="font-weight-bold text-black">
                            {item.song}
                          </Typography>
                        </div>
                      </td>
                      <td>
                        <div
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '10rem'
                          }}>
                          <Typography
                            noWrap
                            className="font-weight-bold text-black">
                            {item.artist}
                          </Typography>
                        </div>
                      </td>
                      <td>
                        <div
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '11rem'
                          }}>
                          <Typography
                            noWrap
                            className="font-weight-bold text-black">
                            {item.album}
                          </Typography>
                        </div>
                      </td>
                      <td>
                        <span className="font-weight-bold">{item.time}</span>
                      </td>
                      <td>
                        <span className="font-weight-bold">
                          {item.released}
                        </span>
                      </td>
                      <td>
                        {item.actions.map((Component, idx) => {
                          return cloneElement(Component, {
                            key: idx,
                            onClick: () =>
                              handler(item.id, Component.props.children.props)
                          });
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="p-3 d-flex justify-content-center">
            <Pagination className="pagination-primary" count={10} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
