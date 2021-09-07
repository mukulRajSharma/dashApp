import React from 'react';
import './vendors.scss';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  FilterRow,
  MasterDetail,
  Selection,
  Button as GridButton
} from 'devextreme-react/data-grid';
import Form, { Item } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import { Center } from 'devextreme-react/map';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Vendors</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}>
        <DataGrid>
            <FilterRow visible={true} />
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />
            <Column
              dataField="name"
              caption="Name"
            />
        </DataGrid>
      </div>
      <div style={{textAlign:Center}}>
        <Form
          // onContentReady={this.validateForm}
          colCount={2}
          id="form"
          // formData={this.employee}
        >
          <Item dataField="Vendor" editorOptions={{ disabled: false }} />            
        </Form>
      </div>
      <div style={{'text-align':'center', margin:20}}>
        <Button
              width={180}
              text="Add Vendor"
              type="success"
              stylingMode="contained"
              // onClick={this.onSubmitClick}
          />
      </div>
    </div>
  </React.Fragment>
);
