import React from 'react'
import { ListTitle, WidgetContainer } from '../DashboardElements'
import { Widget } from './../Widget/Widget';
import { ListContainer } from './../DashboardElements';
import { ListTable } from './../ListTable/ListTable';

export const DashHome = () => {
  return (
    <div>
         <WidgetContainer>
          <Widget type="customer" />
          <Widget type="transaction" />
          <Widget type="deposite" />
          <Widget type="withdraw" />
        </WidgetContainer>
        <ListContainer>
          <ListTitle>All Transaction</ListTitle>
          <ListTable />
        </ListContainer>
    </div>
  )
}
